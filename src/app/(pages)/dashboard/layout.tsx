"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/components/dashboard/sidebar";
import TopBar from "@/components/dashboard/topbar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { House } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isMobileScreen = window.innerWidth < 768;
      setIsMobile(isMobileScreen);
    }
  }, []);

  if (isMobile) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-center flex-col gap-2 p-4">
        <p className="text-xl font-semibold text-red-500">
          Halaman dashboard tidak dapat diakses di perangkat mobile.
        </p>
        <Button asChild>
          <Link href={"/"}>
            <House /> Home
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <main className="h-screen w-full flex">
      <Sidebar />
      <section className="w-full flex flex-col overflow-auto">
        <TopBar />
        {children}
      </section>
    </main>
  );
}
