"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
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
import useNotification from "@/hooks/useNotifications";
import { CircleUser } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session, status } = useSession();
  const applicantId = session?.user?.id ?? "";
  const shouldFetch = status === "authenticated" && !!applicantId;
  const { data: notifications = [], isPending } = useNotification({
    applicantId,
    shouldFetch,
  });
  const unreadCount = notifications.filter((n) => !n.isRead).length;

  return (
    <main className="w-full h-auto flex items-center justify-between z-30 px-4 py-3 top-0 sticky bg-[#111111]">
      {/* Logo */}
      <section className="flex items-center gap-2 min-w-0">
        <Avatar className="md:w-[48px] md:h-[48px] w-[24px] h-[24px] hidden md:block">
          <AvatarImage src="/logo-winnicode.png" />
        </Avatar>
        <h1 className="font-changa text-[#FF66C4] truncate max-w-[120px] sm:max-w-[200px] md:text-2xl ">
          Winni<span className="text-[#5271FF]">Career</span>
        </h1>
      </section>

      {/* Web Menu */}
      <section className="hidden md:flex items-center space-x-3">
        <Button variant="ghost" className="text-lg" asChild>
          <Link href="https://winnicode.com/explore/berita">Berita</Link>
        </Button>
        <Button variant="ghost" className="text-lg" asChild>
          <Link href="https://winnicode.com/tentang">Tentang</Link>
        </Button>

        {session ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="w-[48px] h-[48px] relative"
              >
                {!isPending && unreadCount > 0 && (
                  <Badge className="absolute right-1 top-1 h-4 min-w-4 px-1 text-[10px] rounded-full bg-blue-500 text-white flex items-center justify-center">
                    {unreadCount}
                  </Badge>
                )}
                <CircleUser className="!size-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuLabel className="truncate">
                {session.user.fullname}
              </DropdownMenuLabel>
              <p className="text-white/50 pl-2 pr-2 text-sm truncate">
                {session.user.email}
              </p>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                {(session.user.role === "ADMIN" ||
                  session.user.role === "HR") && (
                  <DropdownMenuItem>
                    <Link href="/dashboard" className="w-full">
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem className="relative">
                  <Link href="/profile/notifications" className="w-full">
                    Notification
                  </Link>
                  {!isPending && unreadCount > 0 && (
                    <Badge className="absolute right-2 top-2 h-4 min-w-4 px-1 text-xs rounded-full bg-blue-500 text-white flex items-center justify-center">
                      {unreadCount}
                    </Badge>
                  )}
                </DropdownMenuItem>

                {session.user.role !== "ADMIN" &&
                  session.user.role !== "HR" && (
                    <DropdownMenuItem>
                      <Link href="/profile" className="w-full">
                        Profile
                      </Link>
                    </DropdownMenuItem>
                  )}
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Button
                  variant="ghost"
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="w-full"
                >
                  Log out
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button className="bg-[#5271FF] text-white text-lg" asChild>
            <Link href="/auth/sign_in">Masuk</Link>
          </Button>
        )}
      </section>

      {/* Mobile Menu (hamburger) */}
      <section className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="icon" variant="ghost">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48" align="end">
            <DropdownMenuItem asChild>
              <Link href="https://winnicode.com/explore/berita">Berita</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="https://winnicode.com/tentang">Tentang</Link>
            </DropdownMenuItem>
            {session && (
              <>
                {(session.user.role === "ADMIN" ||
                  session.user.role === "HR") && (
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem asChild>
                  <Link href="/profile/notifications">Notification</Link>
                </DropdownMenuItem>
                {session.user.role !== "ADMIN" &&
                  session.user.role !== "HR" && (
                    <DropdownMenuItem asChild>
                      <Link href="/profile">Profile</Link>
                    </DropdownMenuItem>
                  )}
                <DropdownMenuItem asChild>
                  <Button
                    variant="ghost"
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className="w-full"
                  >
                    Log out
                  </Button>
                </DropdownMenuItem>
              </>
            )}
            {!session && (
              <DropdownMenuItem asChild>
                <Link href="/auth/sign_in">Masuk</Link>
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </section>
    </main>
  );
}
