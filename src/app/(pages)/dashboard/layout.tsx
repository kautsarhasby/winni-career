import Sidebar from "@/components/dashboard/sidebar";
import TopBar from "@/components/dashboard/topbar/page";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-screen w-full flex">
      <Sidebar />
      <section className="w-full">
        <TopBar />
        {children}
      </section>
    </main>
  );
}
