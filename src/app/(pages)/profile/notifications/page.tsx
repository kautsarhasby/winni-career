"use client";

import { useMutation } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import useNotification from "@/hooks/useNotifications";

export default function NotificationsPage() {
  const { data: session, status } = useSession();

  const applicantId = session?.user?.id ?? "";
  const shouldFetch = status === "authenticated" && !!applicantId;
  const {
    data: notifications = [],
    refetch,
    isPending,
  } = useNotification({ applicantId, shouldFetch });

  const markAsRead = useMutation({
    mutationFn: async (id: string) => {
      await fetch(`/api/notifications?applicantId=${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isRead: true }),
      });
    },
    onSuccess: () => refetch(),
  });

  return (
    <div className="max-w-2xl mx-auto  py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Notifikasi</h1>
        <div className="space-x-2">
          <Link href="/" passHref>
            <Button variant="outline">Beranda</Button>
          </Link>
          <Link href="/profile" passHref>
            <Button variant="outline">Profil</Button>
          </Link>
        </div>
      </div>

      {isPending ? (
        <p>Memuat notifikasi...</p>
      ) : notifications.length === 0 ? (
        <div className="text-gray-500 text-center py-10">
          Tidak ada notifikasi saat ini.
        </div>
      ) : (
        <section className="space-y-4 w-full">
          {notifications.map((notif) => (
            <div
              key={notif.id}
              className={`flex gap-4 w-full rounded-xl relative border shadow-sm transition-all p-4  duration-200 bg-[#111111]`}
            >
              <div className="px-2">
                <h2 className="text-base font-semibold text-wwhite">
                  {notif.title}
                </h2>
                <p className="text-sm text-white mt-1">{notif.message}</p>

                <div className="flex justify-end">
                  <Button
                    size="sm"
                    className="mt-3 cursor-pointer"
                    variant={"default"}
                    onClick={() => markAsRead.mutate(notif.id)}
                  >
                    Tandai sebagai dibaca
                  </Button>
                </div>
              </div>
              {!notif.isRead && (
                <span className="absolute h-3 w-3 -top-1 right-0 rounded-full bg-blue-500" />
              )}
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
