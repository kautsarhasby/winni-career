"use client";
import Navbar from "@/components/public/navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardHeader, Card, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Clock, EllipsisVertical, UserCircle } from "lucide-react";
import { useSession } from "next-auth/react";
import React from "react";

export default function ProfilPage() {
  const { data: session } = useSession();
  return (
    <main className="w-full flex flex-col ">
      <Navbar />
      <section className="items-start grid grid-cols-3 h-full">
        <div className="container p-10 flex items-center h-full  justify-center">
          <Card className="w-full h-72">
            <CardHeader className="">
              <CardTitle>Pekerjaan yang dilamar</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center gap-3">
                <Label>Fullstack Developer</Label>
                <div className="flex items-center">
                  <Badge
                    variant={"outline"}
                    className="bg-[#40421C] border-[#E1F00D] text-[#E1F00D]"
                  >
                    <Clock />
                    Pending
                  </Badge>
                  <Button variant={"ghost"} className="cursor-pointer">
                    <EllipsisVertical />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex w-full  h-full  flex-col justify-center">
          <div className="flex gap-3 items-center border-white border-b py-6">
            <UserCircle className="w-[72px] h-[72px]" />
            <section>
              <span className="text-2xl">{session?.user.fullname}</span>
              <p>Applicant</p>
            </section>
          </div>
          <div className="w-full">
            <form action="" className="py-4">
              <div className="mb-4">
                <Label htmlFor="fullname" className="mb-2">
                  Nama Lengkap
                </Label>
                <Input
                  id="fullname"
                  name="fullname"
                  placeholder="Nama Lengkap"
                  defaultValue={session?.user.fullname}
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="email" className="mb-2">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="email@example.com"
                  disabled
                  defaultValue={session?.user.email as string}
                />
              </div>
              <div className="mb-4 ">
                <Label htmlFor="about" className="mb-2">
                  About
                </Label>
                <Textarea
                  id="about"
                  name="about"
                  placeholder="Tentang dirimu..."
                  className="resize-none h-40"
                />
              </div>
              <div
                className="justify-end flex
              "
              >
                <Button className="bg-[#5271FF] text-white">
                  Simpan Perubahan
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
