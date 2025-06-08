"use server";
import {
  FormState,
  SignupFormApplicantSchema,
  SignupFormUserSchema,
} from "@/lib/definition";
import { prisma } from "@/lib/prisma-client";
import bcrypt from "bcryptjs";

export async function signUpApplicant(state: FormState, formData: FormData) {
  const validatedData = SignupFormApplicantSchema.safeParse({
    email: formData.get("email"),
    fullname: formData.get("fullname"),
    birthdate: formData.get("birthdate"),
    password: formData.get("password"),
    gender: formData.get("gender"),
  });

  if (!validatedData.success) {
    return {
      errors: validatedData.error.flatten().fieldErrors,
    };
  }
  const { fullname, email, birthdate, gender, password } = validatedData.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.$transaction([
    prisma.applicants.create({
      data: {
        email,
        fullname,
        birthdate,
        password: hashedPassword,
        gender,
      },
    }),
  ]);
}

export async function signUpUser(state: FormState, formData: FormData) {
  const validatedData = SignupFormUserSchema.safeParse({
    email: formData.get("email"),
    username: formData.get("username"),
    fullname: formData.get("fullname"),
    birthdate: formData.get("birthdate"),
    password: formData.get("password"),
    gender: formData.get("gender"),
  });

  if (!validatedData.success) {
    return {
      errors: validatedData.error.flatten().fieldErrors,
    };
  }

  const { fullname, email, birthdate, username, password } = validatedData.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.$transaction([
    prisma.users.create({
      data: {
        email,
        username,
        fullname,
        birthdate,
        password: hashedPassword,
        role: "HR",
      },
    }),
  ]);
}

export async function validatingApplicant({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  // validating Applicant TODO
}
