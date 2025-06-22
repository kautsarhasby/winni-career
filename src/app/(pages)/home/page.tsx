"use client";
import Navbar from "@/components/public/navbar";
import { useSession } from "next-auth/react";
import React from "react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main>
      <Navbar />
      <section>Ini Home </section>
      <p>{session?.user.email}</p>
    </main>
  );
}
