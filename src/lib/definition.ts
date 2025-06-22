import { JWTPayload } from "jose";
import { z } from "zod";

export const SignupFormApplicantSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  fullname: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .trim(),
  birthdate: z.string({ message: "Birthdate must be choosen" }),
  password: z
    .string()
    .min(8, { message: "Be at least 8 characters long" })
    .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
    .regex(/[0-9]/, { message: "Contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Contain at least one special character.",
    })
    .trim(),
  gender: z.enum(["MALE", "FEMALE"], {
    message: "Must choose one of the gender",
  }),
});

export const SignInFormApplicationSchema = SignupFormApplicantSchema.pick({
  email: true,
  password: true,
});

export const SignupFormUserSchema = SignupFormApplicantSchema.omit({
  gender: true,
}).extend({ username: z.string().min(5) });

export const SendOTPSchema = SignupFormApplicantSchema.pick({
  email: true,
  fullname: true,
}).extend({ otp: z.number().max(6) });

export const SendOTPVerificationSchema = SendOTPSchema.omit({
  otp: true,
});

export const VerifyOTPSchema = SendOTPSchema.omit({
  fullname: true,
  email: true,
});

export interface SessionPayload extends JWTPayload {
  email: string;
  fullname: string | undefined;
  expiredOTP: Date | null | undefined;
}

export type FormState =
  | {
      values?: Partial<z.infer<typeof SignupFormApplicantSchema>>;
      errors?: {
        fullname?: string[];
        email?: string[];
        password?: string[];
        gender?: string[];
        birthdate?: string[];
      };
      message?: string;
      success?: boolean;
    }
  | undefined;
