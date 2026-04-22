import { AdminSidebar } from "@/components/admin/sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = { title: { default: "Admin | Custom Works", template: "%s — Admin | Custom Works" } };

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-zinc-950 overflow-hidden">
      <AdminSidebar />
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
