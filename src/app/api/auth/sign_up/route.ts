import { NextResponse } from "next/server";
import { SignupFormApplicantSchema } from "@/lib/definition";
import { genericSignUp } from "@/lib/utils";
import { createSession } from "@/lib/session";

export async function POST(req: Request) {
  const form = await req.formData();
  const state = { values: {} };

  console.log(form);
  try {
    let createdUser: { email: string; fullname: string } | null = null;
    const result = await genericSignUp(state, form, {
      schema: SignupFormApplicantSchema,
      createFn: async (data, tx) => {
        const created = await tx.applicants.create({
          data: {
            email: data.email,
            fullname: data.fullname,
            birthdate: new Date(data.birthdate),
            password: data.hashedPassword,
            gender: data.gender as "MALE" | "FEMALE",
          },
        });

        createdUser = {
          email: created.email,
          fullname: created.fullname,
        };
      },
    });

    if (createdUser) {
      const { email, fullname } = createdUser;
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/send-otp`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, fullname }),
        }
      );
      if (res.status === 500) return;
      await createSession({ email });
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("Signup failed:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
