import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import React from "react";

export default function TopBar() {
  return (
    <main className="h-[70px] items-center flex justify-between">
      <div>
        <h1>Dashboard</h1>
      </div>
      <div>
        <Button variant={"ghost"} size={"icon"}>
          <Bell />
        </Button>
      </div>
    </main>
  );
}
