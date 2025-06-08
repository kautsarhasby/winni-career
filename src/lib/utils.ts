import { clsx, type ClassValue } from "clsx";
import { randomInt } from "crypto";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateRandomOTP() {
  return randomInt(0, 1_000_000).toString().padStart(6, "0");
}
