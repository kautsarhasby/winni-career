"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleUser } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <main className="w-full h-[100px] flex justify-between p-4">
      <section className="flex items-center gap-2">
        <Avatar className="w-[58px] h-[58px]">
          <AvatarImage src="https://winnicode.com/mazer/images/logo.png" />
        </Avatar>
        <h1 className="font-bold">WinniCareer</h1>
      </section>
      <section>
        <Button variant={"ghost"} asChild>
          <Link href={"https://winnicode.com/explore/berita"}>Berita</Link>
        </Button>
        <Button variant={"ghost"} asChild>
          <Link href={"https://winnicode.com/tentang"}>Tentang</Link>
        </Button>
        {session ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant={"ghost"}
                size={"icon"}
                className="w-[64px] h-[64px]"
              >
                <CircleUser className="!size-9" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="start">
              <DropdownMenuLabel>{session.user.fullname}</DropdownMenuLabel>
              <p className="text-white/50 pl-2 pr-2 text-sm">
                {session.user.email}
              </p>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link href={"/dashboard"}>Dashboard</Link>
                </DropdownMenuItem>

                <DropdownMenuItem>Profile</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />

              <DropdownMenuItem asChild>
                <Button
                  variant={"ghost"}
                  onClick={() => signOut({ callbackUrl: "/" })}
                >
                  Log out
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <>
            <Button
              className="hover:cursor-pointer bg-[#5271FF] text-white"
              asChild
            >
              <Link href={"/auth/sign_in"}>Masuk</Link>
            </Button>
          </>
        )}
      </section>
    </main>
  );
}
