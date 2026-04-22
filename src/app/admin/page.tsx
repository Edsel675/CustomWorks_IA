import { formatCurrency } from "@/lib/utils";
import {
  TrendingUp, ShoppingCart, Users, Download,
  ArrowUpRight, ArrowDownRight, Package, Zap
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = { title: "Dashboard" };

const STATS = [
  { label: "Ingresos del mes", value: formatCurrency(4850), delta: "+18%", up: true, icon: TrendingUp },
  { label: "Órdenes totales", value: "34", delta: "+6 esta semana", up: true, icon: ShoppingCart },
  { label: "Clientes nuevos", value: "12", delta: "+3 vs mes anterior", up: true, icon: Users },
  { label: "Descargas", value: "287", delta: "-2% vs mes anterior", up: false, icon: Download },
];

const RECENT_ORDERS = [
  { id: "ORD-001", customer: "María López", product: "Árbol de la Vida", amount: 149, status: "completed", source: "Etsy" },
  { id: "ORD-002", customer: "Carlos Ramírez", product: "Logo Industrial", amount: 99, status: "processing", source: "Facebook" },
  { id: "ORD-003", customer: "Ana Torres", product: "Mandala Colgante", amount: 79, status: "completed", source: "Etsy" },
  { id: "ORD-004", customer: "John Smith", product: "Rosa Metálica 3D", amount: 89, status: "pending", source: "Etsy" },
  { id: "ORD-005", customer: "Luis Martínez", product: "Mapa de México", amount: 159, status: "completed", source: "Direct" },
];

const statusBadge: Record<string, "success" | "warning" | "default"> = {
  completed: "success",
  processing: "warning",
  pending: "default",
};

const TOP_PRODUCTS = [
  { name: "Mandala Colgante", downloads: 61, revenue: formatCurrency(4819) },
  { name: "Árbol de la Vida", downloads: 48, revenue: formatCurrency(7152) },
  { name: "Rosa Metálica 3D", downloads: 55, revenue: formatCurrency(4895) },
  { name: "Marco Azteca", downloads: 37, revenue: formatCurrency(4773) },
];

export default function AdminDashboard() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="text-sm text-zinc-400">Bienvenido de vuelta, Edsel. Aquí está el resumen de Custom Works.</p>
      </div>

      {/* stats */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {STATS.map(({ label, value, delta, up, icon: Icon }) => (
          <Card key={label}>
            <CardContent className="p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-zinc-500">{label}</p>
                  <p className="mt-1 text-2xl font-bold text-white">{value}</p>
                  <div className={`mt-1 flex items-center gap-1 text-xs ${up ? "text-green-400" : "text-red-400"}`}>
                    {up ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                    {delta}
                  </div>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10">
                  <Icon className="h-5 w-5 text-orange-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* órdenes recientes */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingCart className="h-4 w-4 text-orange-500" />
                Órdenes recientes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-zinc-800 text-xs text-zinc-500">
                      <th className="pb-3 text-left">ID</th>
                      <th className="pb-3 text-left">Cliente</th>
                      <th className="pb-3 text-left">Producto</th>
                      <th className="pb-3 text-left">Canal</th>
                      <th className="pb-3 text-right">Monto</th>
                      <th className="pb-3 text-right">Estado</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800">
                    {RECENT_ORDERS.map((o) => (
                      <tr key={o.id} className="text-zinc-300">
                        <td className="py-3 text-xs text-zinc-500">{o.id}</td>
                        <td className="py-3 font-medium">{o.customer}</td>
                        <td className="py-3 text-zinc-400 truncate max-w-[120px]">{o.product}</td>
                        <td className="py-3">
                          <Badge variant="secondary">{o.source}</Badge>
                        </td>
                        <td className="py-3 text-right font-medium text-orange-400">
                          {formatCurrency(o.amount)}
                        </td>
                        <td className="py-3 text-right">
                          <Badge variant={statusBadge[o.status]}>
                            {o.status === "completed" ? "Completado" : o.status === "processing" ? "En proceso" : "Pendiente"}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* top productos */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-4 w-4 text-orange-500" />
                Top productos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {TOP_PRODUCTS.map((p, i) => (
                  <div key={p.name} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-xs font-bold text-zinc-400">
                      {i + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="truncate text-sm font-medium text-zinc-100">{p.name}</p>
                      <p className="text-xs text-zinc-500">{p.downloads} descargas</p>
                    </div>
                    <span className="text-sm font-bold text-orange-400">{p.revenue}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-orange-500" />
                Automatizaciones activas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {["Sync Etsy → DB", "Reportes diarios", "Notif. nuevas órdenes"].map((a) => (
                  <div key={a} className="flex items-center justify-between">
                    <span className="text-sm text-zinc-300">{a}</span>
                    <Badge variant="success">Activa</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
