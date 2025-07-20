import { FormEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ISchedules, InterviewMode, ScheduleStatus } from "@/types";

interface SchedulePopupProps {
  applicantId: string;
  jobId: string;
}

export function SchedulePopup({ applicantId, jobId }: SchedulePopupProps) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [mode, setMode] = useState("");
  const [linkMeet, setLinkMeet] = useState("");
  const [status, setStatus] = useState("");

  const mutation = useMutation({
    mutationFn: async (payload: Omit<ISchedules, "id">) => {
      const res = await fetch("/api/schedules", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Gagal menyimpan jadwal");
      }

      return res.json();
    },
    onSuccess: async () => {
      console.log("Berhasil menyimpan jadwal!");
      await fetch("/api/notifications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          applicantId,
          title: "Jadwal Interview ",
          message: `Selamat anda lolos ke tahap interview, jadwal sudah dikirimkan ke profile kamu dan silahkan cek email anda untuk link dari meetnya, atau gunakan link berikut : ${linkMeet} `,
          isRead: false,
        }),
      });
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutation.mutate({
      applicantId,
      jobId,
      scheduleDate: new Date(`${date}T${time}`),
      scheduleTime: new Date(`${date}T${time}`),
      location,
      mode: mode as InterviewMode,
      linkMeet,
      status: status as ScheduleStatus,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Buat Jadwal Interview</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Isi Jadwal Interview</DialogTitle>
          <DialogDescription>
            Lengkapi informasi untuk menjadwalkan interview.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="date">Tanggal</Label>
            <Input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="time">Waktu</Label>
            <Input
              id="time"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="location">Lokasi</Label>
            <Input
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>

          <div className="grid gap-2">
            <Label>Mode</Label>
            <Select value={mode} onValueChange={setMode} required>
              <SelectTrigger>
                <SelectValue placeholder="Pilih mode" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ONLINE">Online</SelectItem>
                <SelectItem value="OFFLINE">Offline</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="location">Link Meet (Optional)</Label>
            <Input
              id="linkMeet"
              value={linkMeet}
              onChange={(e) => setLinkMeet(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label>Status</Label>
            <Select value={status} onValueChange={setStatus} required>
              <SelectTrigger>
                <SelectValue placeholder="Pilih status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="PENDING">Pending</SelectItem>
                <SelectItem value="CONFIRMED">Confirmed</SelectItem>
                <SelectItem value="CANCELLED">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            type="submit"
            disabled={mutation.isPending}
            className="w-full"
          >
            {mutation.isPending ? "Menyimpan..." : "Simpan Jadwal"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
