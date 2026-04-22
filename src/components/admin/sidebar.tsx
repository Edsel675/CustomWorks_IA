"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, Package, ShoppingCart, Users,
  Zap, BarChart3, MessageCircle, Settings, LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "DASHBOARD", href: "/admin", icon: LayoutDashboard, code: "01" },
  { label: "INVENTARIO", href: "/admin/inventario", icon: Package, code: "02" },
  { label: "ÓRDENES", href: "/admin/ordenes", icon: ShoppingCart, code: "03" },
  { label: "CLIENTES", href: "/admin/clientes", icon: Users, code: "04" },
  { label: "AUTOMATIZAC.", href: "/admin/automatizaciones", icon: Zap, code: "05" },
  { label: "ANALÍTICAS", href: "/admin/analiticas", icon: BarChart3, code: "06" },
  { label: "CHAT / IA", href: "/admin/chat", icon: MessageCircle, code: "07" },
];

export function AdminSidebar() {
  const path = usePathname();
  return (
    <aside className="flex h-screen w-56 shrink-0 flex-col border-r border-[#1e1e24] bg-[#08080a]">
      {/* logo */}
      <div className="flex h-14 items-center gap-2.5 border-b border-[#1e1e24] px-4 bg-[#0e0e11]">
        <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="none">
          <polygon points="12,2 22,7 22,17 12,22 2,17 2,7" stroke="#f97316" strokeWidth="1.5" fill="none" />
          <circle cx="12" cy="12" r="3" fill="#f97316" opacity="0.7" />
          <circle cx="12" cy="12" r="1.5" fill="#f97316" />
        </svg>
        <div>
          <div className="font-bold text-sm tracking-tight text-white leading-none">
            CW<span className="text-orange-500">_ADMIN</span>
          </div>
          <div className="font-mono text-[8px] text-[#3a3a50] tracking-widest">v2.0.1</div>
        </div>
      </div>

      {/* status */}
      <div className="border-b border-[#1e1e24] px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="font-mono text-[9px] text-[#3a3a50] tracking-widest">SISTEMA ACTIVO</span>
        </div>
      </div>

      {/* nav */}
      <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-0.5">
        <div className="font-mono text-[9px] text-[#3a3a50] tracking-widest px-2 mb-2">// MÓDULOS</div>
        {NAV.map(({ label, href, icon: Icon, code }) => {
          const active = path === href;
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-2.5 px-2.5 py-2 transition-all group",
                active
                  ? "bg-orange-500/10 border-l-2 border-orange-500 text-orange-400"
                  : "border-l-2 border-transparent text-[#7a7a92] hover:bg-[#0e0e11] hover:text-[#e8e8f0] hover:border-[#2a2a34]"
              )}
            >
              <span className={cn("font-mono text-[8px] w-4 shrink-0", active ? "text-orange-500/70" : "text-[#3a3a50]")}>
                {code}
              </span>
              <Icon className={cn("h-3.5 w-3.5 shrink-0", active ? "text-orange-500" : "")} />
              <span className="font-mono text-[10px] tracking-widest">{label}</span>
            </Link>
          );
        })}
      </nav>

      {/* footer */}
      <div className="border-t border-[#1e1e24] py-3 px-2 space-y-0.5">
        <Link href="/admin/configuracion"
          className="flex items-center gap-2.5 px-2.5 py-2 border-l-2 border-transparent text-[#7a7a92] hover:bg-[#0e0e11] hover:text-[#e8e8f0] hover:border-[#2a2a34] transition-all">
          <Settings className="h-3.5 w-3.5 shrink-0" />
          <span className="font-mono text-[10px] tracking-widest">CONFIG</span>
        </Link>
        <form action="/api/auth/logout" method="POST">
          <button type="submit"
            className="flex w-full items-center gap-2.5 px-2.5 py-2 border-l-2 border-transparent text-[#7a7a92] hover:bg-red-500/5 hover:text-red-400 hover:border-red-500/30 transition-all">
            <LogOut className="h-3.5 w-3.5 shrink-0" />
            <span className="font-mono text-[10px] tracking-widest">LOGOUT</span>
          </button>
        </form>
        <div className="px-2.5 pt-2">
          <div className="font-mono text-[8px] text-[#3a3a50]">EDSEL · CUSTOM WORKS</div>
        </div>
      </div>
    </aside>
  );
}
