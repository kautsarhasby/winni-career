"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IApply } from "@/types";
import DownloadCell from "../download_cell";
import ActionCell from "../action_cell";
import { SchedulePopup } from "../../schedule/schedule_popup";
import { useEffect, useState } from "react";

type StatusType = "PENDING" | "REVIEWED" | "ACCEPTED" | "REJECTED";
export const columns: ColumnDef<IApply>[] = [
  {
    accessorFn: (row) => row.applicant?.fullname,
    header: "Fullname",
    id: "fullname",
    enableColumnFilter: true,
  },
  {
    accessorFn: (row) => row.applicant?.email,
    header: "Email",
  },
  {
    accessorFn: (row) => row.job?.position,
    header: "Applying Position",
  },
  {
    accessorFn: (row) => row.resume?.resumeUrl,
    header: "CV",
    cell: ({ row }) => {
      const resume = row.original.resume;
      const path = resume.resumeUrl.split("upload-cv/")[1];
      console.log(path);
      if (!resume?.resumeUrl || !resume.resumeName)
        return <span className="text-gray-400">Tidak ada CV</span>;

      return (
        <DownloadCell
          resumeUrl={path}
          resumeName={resume.resumeName}
          applyId={row.original.id}
        />
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status: StatusType = row.getValue("status");

      const statusColor = {
        PENDING: "text-yellow-500",
        REVIEWED: "text-blue-600",
        ACCEPTED: "text-green-600",
        REJECTED: "text-red-600",
      };

      return (
        <span
          className={`font-semibold ${statusColor[status] || "text-gray-600"}`}
        >
          {status}
        </span>
      );
    },
  },
  {
    accessorFn: (row) => row.id,
    header: "Schedule",
    cell: ({ row }) => (
      <div className="flex flex-col gap-2">
        <SchedulePopup
          applicantId={row.original.applicantId}
          jobId={row.original.jobId}
        />
      </div>
    ),
  },
  {
    id: "action",
    header: "Action",
    cell: ({ row }) => {
      const id = row.original.id;
      return <ActionCell applyId={id} />;
    },
  },
];

interface DataTableProps {
  data: IApply[];
  search: string;
}

export function ApplicantsTable({ data, search }: DataTableProps) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    columns,
    data,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  useEffect(() => {
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
