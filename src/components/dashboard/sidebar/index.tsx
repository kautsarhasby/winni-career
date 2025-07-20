"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import {
  BriefcaseBusiness,
  Calendar,
  DoorOpen,
  Home,
  LayoutDashboard,
  User,
  Users,
} from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const userRole = session?.user.role;
  const userId = session?.user.id;
  const [fullname, setFullname] = useState("");
  const pathSplit = pathname.split("/");
  const usersPath = pathSplit[pathSplit.length - 1];

  const { data: profile } = useQuery({
    queryKey: ["profile", userRole],
    queryFn: () =>
      fetch(`/api/users?role=${userRole}&uuid=${userId}`).then((res) =>
        res.json()
      ),
    enabled: !!userRole,
  });

  useEffect(() => {
    if (profile) {
      console.log("profile :", profile);
      setFullname(profile.data.fullname);
    }
  }, [profile, session]);

  return (
    <main className="bg-gradient-to-b h-screen from-[#314499] via-[#D793CD] to-[#314499] w-[380px]">
      <main className="h-screen flex flex-col bg-[#111111] mr-[1px] p-4">
        <section className="w-full gap-3 border-b-2 h-[150px] flex items-center justify-start">
          <Avatar className="w-[86px] h-[86px]">
            <AvatarImage src="https://winnicode.com/mazer/images/logo.png" />
          </Avatar>
          <div className="grid">
            <span className="font-bold">{fullname}</span>
            <p>{session?.user.role}</p>
          </div>
        </section>
        <section className="grid gap-2  my-6">
          <h1>General</h1>
          <Button
            asChild
            variant={usersPath == "dashboard" ? "secondary" : "ghost"}
            className="flex justify-start"
          >
            <Link href={"/dashboard"}>
              <LayoutDashboard />
              Dashboard
            </Link>
          </Button>
        </section>
        <section className="grid gap-2 my-6">
          <h1>Recruitments</h1>
          <Button
            asChild
            variant={usersPath == "jobs" ? "secondary" : "ghost"}
            className="flex justify-start"
          >
            <Link href={"/dashboard/jobs"}>
              <BriefcaseBusiness />
              Jobs
            </Link>
          </Button>
          <Button
            asChild
            variant={usersPath == "applicants" ? "secondary" : "ghost"}
            className="flex justify-start"
          >
            <Link href={"/dashboard/applicants"}>
              <Users />
              Applicants
            </Link>
          </Button>
          {session?.user.role === "ADMIN" ? (
            <Button
              asChild
              variant={usersPath == "human_resource" ? "secondary" : "ghost"}
              className="flex justify-start"
            >
              <Link href={"/dashboard/admin/human_resource"}>
                <Users />
                Human Resource
              </Link>
            </Button>
          ) : (
            ""
          )}
          <Button
            asChild
            variant={usersPath == "schedules" ? "secondary" : "ghost"}
            className="flex justify-start"
          >
            <Link href={"/dashboard/schedules"}>
              <Calendar />
              Schedule
            </Link>
          </Button>
        </section>
        <section>
          <h1>Profile</h1>
          <Button
            asChild
            variant={usersPath == "profile" ? "secondary" : "ghost"}
            className="flex justify-start"
          >
            <Link href={"/dashboard/profile"}>
              <User />
              Profile
            </Link>
          </Button>
        </section>
        <section className="mt-auto">
          <Button asChild variant={"ghost"} className="flex justify-start">
            <Link href={"/"}>
              <Home />
              Home
            </Link>
          </Button>
          <Button
            variant={"ghost"}
            className="flex justify-start w-full"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            <DoorOpen />
            Logout
          </Button>
        </section>
      </main>
    </main>
  );
}
