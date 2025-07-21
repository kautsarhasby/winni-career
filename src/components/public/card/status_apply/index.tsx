import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { CheckCircle, Hourglass, Mail, XCircle } from "lucide-react";
import { JobStatus } from "@/types"; // pastikan dari .ts file, bukan .d.ts
import Link from "next/link";
import { Button } from "@/components/ui/button";

type JobStatusType = JobStatus;

export default function ApplicationStatusCard({
  status,
}: {
  status: JobStatusType;
}) {
  const steps = [
    {
      id: JobStatus.PENDING,
      label: "Pending",
      icon: Hourglass,
    },
    {
      id: JobStatus.REVIEWED,
      label: "Dibaca oleh HRD",
      icon: Mail,
    },
    {
      id: JobStatus.ACCEPTED,
      label: "Diterima",
      icon: CheckCircle,
    },
    {
      id: JobStatus.REJECTED,
      label: "Ditolak",
      icon: XCircle,
    },
  ];

  const statusOrder: JobStatus[] = [JobStatus.PENDING, JobStatus.REVIEWED];

  // Fungsi untuk cek apakah step aktif
  const isStepActive = (stepId: JobStatus) => {
    const currentIndex = [...statusOrder, status].indexOf(status);
    console.log(currentIndex);
    const stepIndex = [...statusOrder, stepId].indexOf(stepId);
    return stepIndex <= currentIndex;
  };

  return (
    <Card className="w-full max-w-xl mx-auto p-6 rounded-none">
      <CardHeader>
        <CardTitle>Terimakasih sudah mendaftar</CardTitle>
        <CardDescription>
          Lamaranmu telah dikirim ke HRD. Silakan menunggu 1–2 hari untuk
          informasi selanjutnya. Kamu bisa melihat status lamaranmu di halaman
          profilmu.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative pl-6">
          <div className="absolute top-2 left-3 bottom-2 w-0.5 bg-muted rounded-full" />
          <div className="space-y-6">
            {/* Step: Pending + Reviewed */}
            {statusOrder.map((step, i) => {
              const stepData = steps.find((s) => s.id === step)!;
              const Icon = stepData.icon;
              const active = isStepActive(step);
              const color =
                step === status
                  ? "text-primary"
                  : active
                    ? "text-green-600"
                    : "text-gray-400";

              return (
                <div key={i} className="flex items-start gap-3 relative">
                  <Icon className={`w-5 h-5 ${color} z-10`} />
                  <span className="text-sm font-medium">{stepData.label}</span>
                </div>
              );
            })}

            {status === JobStatus.ACCEPTED || status === JobStatus.REJECTED ? (
              <div className="flex items-start gap-3 relative">
                {status === JobStatus.ACCEPTED ? (
                  <>
                    <CheckCircle className="w-5 h-5 text-green-600 z-10" />
                    <span className="text-sm font-medium">Diterima</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-red-600 z-10" />
                    <span className="text-sm font-medium">Ditolak</span>
                  </>
                )}
              </div>
            ) : (
              <div className="flex items-start gap-3 relative opacity-60 italic">
                <Mail className="w-5 h-5 text-gray-400 z-10" />
                <div className="text-sm">
                  <div className="font-medium">Status Penerimaan</div>
                  <div className="text-xs text-muted-foreground">
                    Menunggu keputusan dari HRD
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="mt-4 text-center">
            <Button asChild>
              <Link href="/">Halaman Beranda</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
