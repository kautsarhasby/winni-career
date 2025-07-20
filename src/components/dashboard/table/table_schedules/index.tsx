"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IScheduleTable } from "@/types";
import ScheduleCell from "../schedule_status_cell";
import { Button } from "@/components/ui/button";

interface Props {
  data: IScheduleTable[];
  search: string;
}

const columns: ColumnDef<IScheduleTable>[] = [
  {
    accessorKey: "applicant.fullname",
    header: "Fullname ",
    cell: ({ row }) => row.original.applicant.fullname,
    id: "fullname",
    enableColumnFilter: true,
  },
  {
    accessorKey: "job.position",
    header: "Position",
    cell: ({ row }) => row.original.job.position,
  },
  {
    accessorKey: "scheduleDate",
    header: "Date",
    cell: ({ row }) =>
      new Date(row.original.scheduleDate).toLocaleDateString("id-ID"),
  },
  {
    accessorKey: "scheduleTime",
    header: "Time",
    cell: ({ row }) =>
      new Date(row.original.scheduleTime).toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
      }),
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "mode",
    header: "Mode",
  },
  {
    accessorKey: "linkMeet",
    header: "Link Meeting",
    cell: ({ row }) => {
      const url = row.getValue("linkMeet") as string;

      return (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline block max-w-[200px] truncate"
        >
          {url}
        </a>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return <ScheduleCell scheduleId={row.original.id} />;
    },
  },
];

export function SchedulesTable({ data, search }: Props) {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnFiltersChange: setColumnFilters,
    state: {
      columnFilters,
    },
  });
  React.useEffect(() => {
    table.getColumn("fullname")?.setFilterValue(search);
  }, [search, table]);

  return (
    <div className="w-full">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
