"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, Package, ShoppingCart, Users,
  Zap, BarChart3, MessageCircle, Settings, LogOut, Zap as ZapIcon
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Inventario", href: "/admin/inventario", icon: Package },
  { label: "Órdenes", href: "/admin/ordenes", icon: ShoppingCart },
  { label: "Clientes", href: "/admin/clientes", icon: Users },
  { label: "Automatizaciones", href: "/admin/automatizaciones", icon: Zap },
  { label: "Analíticas", href: "/admin/analiticas", icon: BarChart3 },
  { label: "Chat / IA", href: "/admin/chat", icon: MessageCircle },
];

export function AdminSidebar() {
  const path = usePathname();
  return (
    <aside className="flex h-screen w-60 flex-col border-r border-zinc-800 bg-zinc-900">
      <div className="flex h-16 items-center gap-2 border-b border-zinc-800 px-5">
        <ZapIcon className="h-5 w-5 text-orange-500" />
        <span className="font-bold text-white">
          Custom<span className="text-orange-500">Works</span>
        </span>
        <span className="ml-1 rounded bg-orange-500/20 px-1.5 py-0.5 text-xs text-orange-400">Admin</span>
      </div>
      <nav className="flex-1 overflow-y-auto p-3 space-y-0.5">
        {NAV.map(({ label, href, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors",
              path === href
                ? "bg-orange-500/15 text-orange-400 font-medium"
                : "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100"
            )}
          >
            <Icon className="h-4 w-4 shrink-0" />
            {label}
          </Link>
        ))}
      </nav>
      <div className="border-t border-zinc-800 p-3 space-y-0.5">
        <Link
          href="/admin/configuracion"
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100 transition-colors"
        >
          <Settings className="h-4 w-4" />
          Configuración
        </Link>
        <form action="/api/auth/logout" method="POST">
          <button
            type="submit"
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-zinc-400 hover:bg-red-500/10 hover:text-red-400 transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Cerrar sesión
          </button>
        </form>
      </div>
    </aside>
  );
}
