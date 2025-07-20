import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import supabase from "@/lib/supabase/client";

export default function ScheduleCell({ scheduleId }: { scheduleId: string }) {
  const handleChange = async (newStatus: string) => {
    const { error } = await supabase
      .from("interview_schedules ")
      .update({ status: newStatus })
      .eq("id", scheduleId);

    if (error) {
      console.error("Gagal update status:", error.message);
    } else {
      console.log(`Status berhasil diubah ke ${newStatus}`);
    }
  };

  return (
    <Select value={status} onValueChange={handleChange}>
      <SelectTrigger className="w-[140px]">
        <SelectValue placeholder="Status" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="PENDING">Pending</SelectItem>
        <SelectItem value="CONFIRMED">Confirmed</SelectItem>
        <SelectItem value="CANCELLED">Cancelled</SelectItem>
      </SelectContent>
    </Select>
  );
}
