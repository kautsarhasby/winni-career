"use server";
import { genericSignUp } from "@/lib/utils";
import {
  FormState,
  // SignupFormApplicantSchema,
  SignupFormUserSchema,
} from "@/lib/definition";
// import { createSession } from "@/lib/session";

// export async function signUpApplicant(state: FormState, formData: FormData) {
//   let createdUser: { email: string; fullname: string } | null = null;
//   const result = await genericSignUp(state, formData, {
//     schema: SignupFormApplicantSchema,
//     createFn: async (data, tx) => {
//       const created = await tx.applicants.create({
//         data: {
//           email: data.email,
//           fullname: data.fullname,
//           birthdate: new Date(data.birthdate),
//           password: data.hashedPassword,
//           gender: data.gender,
//         },
//       });

//       createdUser = {
//         email: created.email,
//         fullname: created.fullname,
//       };
//     },
//   });

//   if (createdUser) {
//     const { email, fullname } = createdUser;
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_BASE_URL}/api/send-otp`,
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, fullname }),
//       }
//     );
//     if (res.status === 500) return;
//     await createSession({ email });
//   }

//   return result;
// }

export async function signUpUser(state: FormState, formData: FormData) {
  return genericSignUp(state, formData, {
    schema: SignupFormUserSchema,
    createFn: async (data, tx) => {
      tx.users.create({
        data: {
          email: data.email,
          username: data.username,
          fullname: data.fullname,
          birthdate: data.fullname,
          password: data.hashedPassword,
          role: "HR",
        },
      });
    },
  });
}
