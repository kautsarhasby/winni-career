/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";
import { FormState } from "./definition";
import bcrypt from "bcryptjs";
import { prisma } from "./prisma-client";
import { PrismaClient } from "@/generated/prisma";
import { clsx, type ClassValue } from "clsx";
import { randomInt } from "crypto";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateRandomOTP() {
  let otp = randomInt(0, 1_000_000).toString();

  if (otp.length < 6) {
    otp = otp.padEnd(6, "0");
  }
  console.log(otp);
  return otp;
}

type RegisterOptions<T extends z.ZodObject<any>> = {
  schema: T;
  createFn: (
    data: z.infer<T> & { hashedPassword: string },
    tx: Omit<
      PrismaClient,
      "$connect" | "$disconnect" | "$on" | "$transaction" | "$use" | "$extends"
    >
  ) => Promise<any>;
};

export async function genericSignUp<T extends z.ZodObject<any>>(
  state: FormState,
  formData: FormData,
  options: RegisterOptions<T>
) {
  const parsedData: { [key: string]: FormDataEntryValue | null } = {};
  for (const [key, value] of formData.entries()) {
    parsedData[key] = value;
  }

  const validatedData = options.schema.safeParse(parsedData);

  if (!validatedData.success) {
    return {
      errors: validatedData.error.flatten().fieldErrors,
      values: parsedData,
    };
  }

  const { password, ...rest } = validatedData.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await prisma.$transaction(
      async (tx) => {
        await options.createFn(
          { ...rest, hashedPassword } as z.infer<T> & {
            hashedPassword: string;
          },
          tx
        );
      },
      {
        maxWait: 5000,
        timeout: 15000,
      }
    );
    return { message: "Registrasi Berhasil", success: true };
  } catch (error: any) {
    if (error.code === "P2002") {
      if (error.meta?.target?.includes("email")) {
        return { errors: { email: ["Email sudah terdaftar."] } };
      }
      if (error.meta?.target?.includes("username")) {
        return { errors: { username: ["Username sudah terdaftar."] } };
      }
    }
    console.error("Error during registration:", error);
    return { message: "Terjadi kesalahan saat pendaftaran.", success: false };
  }
}
