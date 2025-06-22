"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const pathSplit = pathname.split("/");
  const usersPath = pathSplit[pathSplit.length - 1];

  useEffect(() => {
    if (session?.user.name && session.user.email) {
    }
  }, [session]);

  return (
    <main className="h-screen w-[350px] p-4">
      <section className="w-full gap-3 border-b-2 h-[150px] flex items-center justify-center">
        <Avatar className="w-[64px] h-[64px]">
          <AvatarImage src="https://winnicode.com/mazer/images/logo.png" />
        </Avatar>
        <div className="grid">
          <span>Kautsar Hasby</span>
          <p>Admin</p>
        </div>
      </section>
      <section className="grid gap-2 ">
        <h1>Account</h1>
        <Button
          asChild
          variant={usersPath == "applicants" ? "secondary" : "ghost"}
        >
          <Link href={"/dashboard/applicants"}>Applicant</Link>
        </Button>
        <Button
          asChild
          variant={usersPath == "human_resource" ? "secondary" : "ghost"}
        >
          <Link href={"/dashboard/admin/human_resource"}>Human Resource</Link>
        </Button>
      </section>
    </main>
  );
}
