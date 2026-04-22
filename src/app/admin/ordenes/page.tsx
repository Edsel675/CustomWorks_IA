"use client";
import { useState } from "react";
import { Search, RefreshCw, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { formatCurrency, formatDate } from "@/lib/utils";

const ORDERS = [
  { id: "ORD-001", number: "E-1001", customer: "María López", email: "maria@email.com", product: "Árbol de la Vida", amount: 149, status: "completed", source: "Etsy", date: "2026-04-20" },
  { id: "ORD-002", number: "F-2001", customer: "Carlos Ramírez", email: "carlos@email.com", product: "Logo Industrial", amount: 99, status: "processing", source: "Facebook", date: "2026-04-21" },
  { id: "ORD-003", number: "E-1002", customer: "Ana Torres", email: "ana@email.com", product: "Mandala Colgante", amount: 79, status: "completed", source: "Etsy", date: "2026-04-19" },
  { id: "ORD-004", number: "E-1003", customer: "John Smith", email: "john@email.com", product: "Rosa Metálica 3D", amount: 89, status: "pending", source: "Etsy", date: "2026-04-21" },
  { id: "ORD-005", number: "D-3001", customer: "Luis Martínez", email: "luis@email.com", product: "Mapa de México", amount: 159, status: "completed", source: "Direct", date: "2026-04-18" },
];

type Status = "all" | "pending" | "processing" | "completed" | "cancelled";

const STATUS_LABELS: Record<string, string> = { pending: "Pendiente", processing: "En proceso", completed: "Completado", cancelled: "Cancelado" };
const STATUS_VARIANT: Record<string, "default" | "warning" | "success" | "destructive"> = {
  pending: "default", processing: "warning", completed: "success", cancelled: "destructive"
};

export default function OrdenesPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<Status>("all");

  const filtered = ORDERS.filter((o) => {
    const matchSearch = o.customer.toLowerCase().includes(search.toLowerCase()) || o.number.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "all" || o.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Órdenes</h1>
          <p className="text-sm text-zinc-400">{ORDERS.length} órdenes totales</p>
        </div>
        <Button variant="outline">
          <RefreshCw className="h-4 w-4" /> Sincronizar Etsy
        </Button>
      </div>

      <div className="flex flex-wrap gap-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
          <Input placeholder="Buscar orden..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9 w-64" />
        </div>
        <div className="flex gap-2">
          {(["all", "pending", "processing", "completed", "cancelled"] as Status[]).map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${statusFilter === s ? "bg-orange-500 text-white" : "border border-zinc-700 text-zinc-400 hover:border-orange-500 hover:text-orange-400"}`}
            >
              {s === "all" ? "Todas" : STATUS_LABELS[s]}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-zinc-800">
        <table className="w-full text-sm">
          <thead className="border-b border-zinc-800 bg-zinc-900">
            <tr className="text-xs text-zinc-500">
              <th className="px-4 py-3 text-left">#</th>
              <th className="px-4 py-3 text-left">Cliente</th>
              <th className="px-4 py-3 text-left">Producto</th>
              <th className="px-4 py-3 text-left">Canal</th>
              <th className="px-4 py-3 text-left">Fecha</th>
              <th className="px-4 py-3 text-right">Monto</th>
              <th className="px-4 py-3 text-center">Estado</th>
              <th className="px-4 py-3 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800 bg-zinc-950">
            {filtered.map((o) => (
              <tr key={o.id} className="text-zinc-300 hover:bg-zinc-900/50 transition-colors">
                <td className="px-4 py-3 font-mono text-xs text-zinc-500">{o.number}</td>
                <td className="px-4 py-3">
                  <div className="font-medium text-zinc-100">{o.customer}</div>
                  <div className="text-xs text-zinc-500">{o.email}</div>
                </td>
                <td className="px-4 py-3 text-zinc-400 max-w-[140px] truncate">{o.product}</td>
                <td className="px-4 py-3"><Badge variant="secondary">{o.source}</Badge></td>
                <td className="px-4 py-3 text-zinc-400 text-xs">{formatDate(o.date)}</td>
                <td className="px-4 py-3 text-right font-bold text-orange-400">{formatCurrency(o.amount)}</td>
                <td className="px-4 py-3 text-center">
                  <Badge variant={STATUS_VARIANT[o.status]}>{STATUS_LABELS[o.status]}</Badge>
                </td>
                <td className="px-4 py-3 text-center">
                  <button className="rounded p-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors">
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
