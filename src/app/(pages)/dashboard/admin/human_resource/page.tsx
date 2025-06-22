"use client";
import { FormDialog } from "@/components/dashboard/form-dialog";
import { Input } from "@/components/ui/input";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { IUsers } from "../../../../../../types";

export default function HRListPage() {
  const { data: human_resources, isPending } = useQuery({
    queryKey: ["human_resources"],
    queryFn: async () => {
      const result = await fetch("/api/users?role=hr");
      const data = await result.json();
      console.log(data);
      return data;
    },
  });

  return (
    <main className="h-full w-full flex flex-col  p-4">
      <section className="grid gap-3">
        <Input placeholder="Search HR Account" />
        <div className="w-full flex justify-end">
          <FormDialog />
        </div>
      </section>
      <section>
        {isPending
          ? "Loading HR Account"
          : human_resources.data.map((hr: IUsers, i: number) => (
              <p key={i.toString()}>{hr.fullname}</p>
            ))}
      </section>
    </main>
  );
}
