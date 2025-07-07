import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function DateComponent({
  onChange,
}: {
  onChange: (date: string) => void;
}) {
  const [day, setDay] = useState("01");
  const [month, setMonth] = useState("01");
  const [year, setYear] = useState("2000");

  const days = Array.from({ length: 31 }, (_, i) =>
    String(i + 1).padStart(2, "0")
  );
  const months = Array.from({ length: 12 }, (_, i) =>
    String(i + 1).padStart(2, "0")
  );
  const years = Array.from({ length: 100 }, (_, i) =>
    String(new Date().getFullYear() - i)
  );

  useEffect(() => {
    const date = `${year}-${month}-${day}`;

    onChange(date);
  }, [day, month, onChange, year]);

  return (
    <div className="flex">
      <div className="grid grid-rows-2 w-full">
        <Select defaultValue={day} onValueChange={(val) => setDay(val)}>
          <SelectTrigger className="w-full rounded-r-none">
            <SelectValue placeholder="Hari" />
          </SelectTrigger>
          <SelectContent>
            {days.map((d) => (
              <SelectItem key={d} value={d}>
                {d}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <span className="text-center">Hari</span>
      </div>

      <div className="grid grid-rows-2 w-full">
        <Select defaultValue={month} onValueChange={(val) => setMonth(val)}>
          <SelectTrigger className="w-full rounded-none">
            <SelectValue placeholder="Bulan" />
          </SelectTrigger>
          <SelectContent>
            {months.map((m) => (
              <SelectItem key={m} value={m}>
                {m}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <span className="text-center">Bulan</span>
      </div>

      <div className="grid grid-rows-2 w-full">
        <Select defaultValue={year} onValueChange={(val) => setYear(val)}>
          <SelectTrigger className="w-full rounded-l-none">
            <SelectValue placeholder="Tahun" />
          </SelectTrigger>
          <SelectContent>
            {years.map((y) => (
              <SelectItem key={y} value={y}>
                {y}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <span className="text-center">Tahun</span>
      </div>
    </div>
  );
}
