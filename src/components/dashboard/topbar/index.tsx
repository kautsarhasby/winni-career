import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import React from "react";

export default function TopBar() {
  return (
    <main className="h-[70px] w-full items-center flex justify-between bg-[#111111] px-6">
      <div>
        <h1 className="font-semibold">Dashboard</h1>
      </div>
      <div>
        <Button variant={"ghost"} size={"icon"}>
          <Bell />
        </Button>
      </div>
    </main>
  );
}
