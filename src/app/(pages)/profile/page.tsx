"use client";
import Navbar from "@/components/public/navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CardHeader,
  Card,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { useSingleApply } from "@/hooks/useSingleApply";
import { useSingleSchedule } from "@/hooks/useSingleSchedule";
import { Clock, EllipsisVertical, UserCircle } from "lucide-react";
import { useSession } from "next-auth/react";

export default function ProfilPage() {
  const { data: session } = useSession();
  const { data: apply, isPending: pendingApply } = useSingleApply(
    session?.user.id ?? ""
  );
  const { data: schedule, isPending: pendingSchedule } = useSingleSchedule(
    session?.user.id ?? ""
  );
  return (
    <main className="w-full flex flex-col">
      <Navbar />
      <section className="grid grid-cols-1 md:grid-cols-3 h-full">
        {/* Kartu Pekerjaan */}

        <div className="p-4 md:p-10 flex items-center justify-center">
          <Card className="w-full h-full md:h-72">
            <CardHeader>
              <CardTitle>Pekerjaan yang dilamar</CardTitle>
            </CardHeader>
            <CardContent>
              {pendingApply ? (
                <Skeleton />
              ) : (
                apply?.map((job_apply, i) => {
                  const status = job_apply.status;
                  let badgeClass = "";
                  let text = "";

                  switch (status) {
                    case "PENDING":
                      badgeClass =
                        "bg-yellow-100 border-yellow-400 text-yellow-800";
                      text = "Pending";
                      break;
                    case "REVIEWED":
                      badgeClass = "bg-blue-100 border-blue-400 text-blue-800";
                      text = "Reviewed";
                      break;
                    case "ACCEPTED":
                      badgeClass =
                        "bg-green-100 border-green-400 text-green-800";
                      text = "Accepted";
                      break;
                    case "REJECTED":
                      badgeClass = "bg-red-100 border-red-400 text-red-800";
                      text = "Rejected";
                      break;
                    default:
                      badgeClass = "bg-gray-100 border-gray-400 text-gray-800";
                      text = status;
                  }

                  return (
                    <div
                      key={i}
                      className="flex justify-between items-center gap-3 mb-2"
                    >
                      <Label>{job_apply?.job.position}</Label>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className={badgeClass}>
                          <Clock className="w-4 h-4 mr-1" />
                          {text}
                        </Badge>
                        <Button variant="ghost" className="cursor-pointer">
                          <EllipsisVertical />
                        </Button>
                      </div>
                    </div>
                  );
                })
              )}
            </CardContent>
          </Card>
        </div>
        <div className="p-4 md:p-10 flex items-center justify-center">
          <Card className="w-full h-full md:h-72">
            <CardHeader>
              <CardTitle>Tanggal Interview Dan Tempat</CardTitle>
              <CardDescription>
                Silahkan cek email anda untuk link meeting atau info lebih
                lanjutnya
              </CardDescription>
            </CardHeader>
            <CardContent>
              {pendingSchedule ? (
                <Skeleton />
              ) : (
                schedule?.map((schedule_apply, i) => {
                  const date = new Date(schedule_apply.scheduleDate);
                  const time = new Date(schedule_apply.scheduleTime);

                  const hari = date.toLocaleDateString("id-ID", {
                    weekday: "long",
                  });
                  const tanggal = date.toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  });
                  const jam = time.toLocaleTimeString("id-ID", {
                    hour: "2-digit",
                    minute: "2-digit",
                  });

                  const labels = [
                    { label: "Hari", value: hari },
                    { label: "Tanggal", value: tanggal },
                    { label: "Jam", value: jam },
                    { label: "Lokasi", value: schedule_apply.location || "-" },
                    { label: "Mode", value: schedule_apply.mode },
                    { label: "Status", value: schedule_apply.status },
                  ];
                  return (
                    <div
                      key={i}
                      className="flex flex-wrap md:flex-nowrap justify-between bg-muted p-2 rounded-xl gap-4"
                    >
                      {labels.map((item) => (
                        <div key={item.label} className="flex flex-col">
                          <span className="text-muted-foreground">
                            {item.label}
                          </span>
                          <span className="font-medium">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  );
                })
              )}
            </CardContent>
          </Card>
        </div>

        {/* Form Profil */}
        <div className="p-4 md:p-10 flex w-full h-full flex-col justify-center">
          <div className="flex flex-col md:flex-row gap-3 items-center border-white border-b py-6">
            <UserCircle className="w-[72px] h-[72px]" />
            <section className="text-center md:text-left">
              <span className="text-2xl">{session?.user.fullname}</span>
              <p>Applicant</p>
            </section>
          </div>
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
            <div className="mb-4">
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
            <div className="justify-end flex">
              <Button className="bg-[#5271FF] text-white">
                Simpan Perubahan
              </Button>
            </div>
          </form>
        </div>

        {/* Jadwal Interview */}
      </section>
    </main>
  );
}
