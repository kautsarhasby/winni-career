import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { SessionPayload } from "./definition";
import { cookies } from "next/headers";
import { prisma } from "./prisma-client";

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.log("Failed to verify session", error);
  }
}

export async function createSession({ email }: { email: string }) {
  const [user, applicant] = await Promise.all([
    prisma.users.findUnique({ where: { email } }),
    prisma.applicants.findUnique({ where: { email } }),
  ]);
  let expiredOTP, fullname;

  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  if (user) {
    expiredOTP = user.expiredAt;
    fullname = user.fullname;
  } else if (applicant) {
    expiredOTP = applicant.expiredAt;
    fullname = applicant.fullname;
  }
  const session = await encrypt({ email, expiresAt, expiredOTP, fullname });
  const cookieStore = await cookies();

  cookieStore.set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}
