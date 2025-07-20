"use client";
import { useEffect, useState } from "react";
import { File } from "lucide-react";
import { downloadPDF } from "@/lib/supabase/download";
import supabase from "@/lib/supabase/client";

interface DownloadCellProps {
  resumeUrl: string;
  resumeName: string;
  applyId: string;
}

export default function DownloadCell({
  resumeUrl,
  resumeName,
  applyId,
}: DownloadCellProps) {
  const [signedUrl, setSignedUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchSignedUrl = async () => {
      try {
        const url = await downloadPDF(resumeUrl);
        setSignedUrl(url);
      } catch (err) {
        console.error("Failed to generate signed URL", err);
        setSignedUrl(null);
      }
    };

    if (resumeUrl) fetchSignedUrl();
  }, [resumeUrl]);

  const handleDownload = async () => {
    try {
      const { error } = await supabase
        .from("applicant_jobs")
        .update({ status: "REVIEWED" })
        .eq("id", applyId);

      if (error) {
        console.error("Gagal update status:", error.message);
      }
    } catch (error) {
      console.error("Gagal mengubah status:", error);
    }
  };

  if (!signedUrl) return <span className="text-gray-400">Tidak ada CV</span>;

  return (
    <a
      href={signedUrl}
      target="_blank"
      rel="noopener noreferrer"
      download
      onClick={handleDownload}
      className="hover:underline flex items-center gap-2"
    >
      <File className="w-4 h-4" />
      {resumeName}
    </a>
  );
}
