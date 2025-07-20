import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import supabase from "@/lib/supabase/client";

export default function ActionCell({ applyId }: { applyId: string }) {
  const handleChange = async (newStatus: string) => {
    const { error } = await supabase
      .from("applicants_jobs")
      .update({ status: newStatus })
      .eq("id", applyId);

    if (error) {
      console.error("Gagal update status:", error.message);
    } else {
      console.log(`Status berhasil diubah ke ${newStatus}`);
    }
  };
  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger className="w-[140px] text-sm">
        <SelectValue placeholder="Pilih aksi" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="REVIEWED">Terima</SelectItem>
        <SelectItem value="REJECTED">Tolak</SelectItem>
      </SelectContent>
    </Select>
  );
}
