import { decrypt } from "@/lib/session";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = cookies();
  const cookie = (await cookieStore).get("session")?.value ?? null;
  if (cookie) {
    const decryptedCookie = await decrypt(cookie);
    return NextResponse.json({ cookie: decryptedCookie });
  }
}
