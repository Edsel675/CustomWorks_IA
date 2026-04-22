import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { formatCurrency, formatDate } from "@/lib/utils";

export const metadata = { title: "Clientes" };

const CUSTOMERS = [
  { id: "1", name: "María López", email: "maria@email.com", country: "México", source: "Etsy", orders: 3, spent: 427, lastOrder: "2026-04-20" },
  { id: "2", name: "Carlos Ramírez", email: "carlos@email.com", country: "México", source: "Facebook", orders: 1, spent: 99, lastOrder: "2026-04-21" },
  { id: "3", name: "Ana Torres", email: "ana@email.com", country: "México", source: "Etsy", orders: 2, spent: 228, lastOrder: "2026-04-19" },
  { id: "4", name: "John Smith", email: "john@email.com", country: "Estados Unidos", source: "Etsy", orders: 1, spent: 89, lastOrder: "2026-04-21" },
  { id: "5", name: "Luis Martínez", email: "luis@email.com", country: "México", source: "Direct", orders: 2, spent: 308, lastOrder: "2026-04-18" },
  { id: "6", name: "Sarah Johnson", email: "sarah@email.com", country: "Canadá", source: "Etsy", orders: 4, spent: 576, lastOrder: "2026-04-15" },
];

export default function ClientesPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Clientes</h1>
        <p className="text-sm text-zinc-400">{CUSTOMERS.length} clientes registrados</p>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
        <Input placeholder="Buscar clientes..." className="pl-9" />
      </div>

      <div className="overflow-x-auto rounded-xl border border-zinc-800">
        <table className="w-full text-sm">
          <thead className="border-b border-zinc-800 bg-zinc-900">
            <tr className="text-xs text-zinc-500">
              <th className="px-4 py-3 text-left">Cliente</th>
              <th className="px-4 py-3 text-left">País</th>
              <th className="px-4 py-3 text-left">Canal</th>
              <th className="px-4 py-3 text-center">Órdenes</th>
              <th className="px-4 py-3 text-right">Total gastado</th>
              <th className="px-4 py-3 text-right">Última compra</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800 bg-zinc-950">
            {CUSTOMERS.map((c) => (
              <tr key={c.id} className="text-zinc-300 hover:bg-zinc-900/50 transition-colors">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/20 text-xs font-bold text-orange-400">
                      {c.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-zinc-100">{c.name}</div>
                      <div className="text-xs text-zinc-500">{c.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-zinc-400">{c.country}</td>
                <td className="px-4 py-3"><Badge variant="secondary">{c.source}</Badge></td>
                <td className="px-4 py-3 text-center font-medium">{c.orders}</td>
                <td className="px-4 py-3 text-right font-bold text-orange-400">{formatCurrency(c.spent)}</td>
                <td className="px-4 py-3 text-right text-xs text-zinc-500">{formatDate(c.lastOrder)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
