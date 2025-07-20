"use client";

import { useState, FormEvent, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { useSession } from "next-auth/react";

export default function DashboardProfilePage() {
  const { data: session } = useSession();
  const userRole = session?.user.role;
  const userId = session?.user.id;
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");

  const { mutate, isPending } = useMutation({
    mutationFn: (data: { fullname: string; birthdate: string }) => {
      return fetch(`/api/users?uuid=${session?.user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        if (!res.ok) throw new Error("Gagal menyimpan");
        return res.json();
      });
    },
    onSuccess: () => {
      toast.success("Profil berhasil diperbarui");
      window.location.reload();
    },
    onError: () => toast.error("Gagal memperbarui profil"),
  });

  const { data: profile, isLoading } = useQuery({
    queryKey: ["profile", userRole],
    queryFn: () =>
      fetch(`/api/users?role=${userRole}&uuid=${userId}`).then((res) =>
        res.json()
      ),
    enabled: !!userRole,
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ fullname, birthdate });
  };

  useEffect(() => {
    if (profile) {
      console.log("profile :", profile);
      setFullname(profile.data.fullname);
      setEmail(profile.data.email || session?.user?.email || "");
      setBirthdate(profile.birthdate || "");
    }
  }, [profile, session]);

  return (
    <main className="bg-background text-foreground p-6">
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>

      <form
        onSubmit={handleSubmit}
        className="grid gap-5 bg-card p-6 rounded-lg shadow-md w-full"
      >
        <div className="w-full">
          <Label htmlFor="email" className="mb-2">
            Email
          </Label>
          <Input id="email" value={email} className="w-full" disabled />
        </div>
        <div className="w-full">
          <Label htmlFor="fullname" className="mb-2">
            Fullname
          </Label>
          <Input
            id="fullname"
            value={isLoading ? "" : fullname}
            onChange={(e) => setFullname(e.target.value)}
            required
            className="w-full"
          />
        </div>

        <div className="w-full">
          <Label htmlFor="birthdate" className="mb-2">
            Tanggal Lahir
          </Label>
          <Input
            id="birthdate"
            type="date"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            required
            className="w-full"
          />
        </div>

        <div className="pt-4">
          <Button type="submit" disabled={isPending}>
            {isPending ? "Saving" : "Save Profile"}
          </Button>
        </div>
      </form>
    </main>
  );
}
