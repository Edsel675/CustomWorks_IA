import { TrendingUp, ShoppingCart, Users, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export const metadata = { title: "Analíticas" };

const MONTHLY_DATA = [
  { month: "Nov", revenue: 2100, orders: 18 },
  { month: "Dic", revenue: 3200, orders: 26 },
  { month: "Ene", revenue: 2800, orders: 22 },
  { month: "Feb", revenue: 3600, orders: 29 },
  { month: "Mar", revenue: 4200, orders: 31 },
  { month: "Abr", revenue: 4850, orders: 34 },
];

const TOP_COUNTRIES = [
  { country: "México", orders: 18, pct: 53 },
  { country: "Estados Unidos", orders: 9, pct: 26 },
  { country: "Canadá", orders: 4, pct: 12 },
  { country: "Otros", orders: 3, pct: 9 },
];

const CHANNELS = [
  { name: "Etsy", orders: 24, revenue: 3200, pct: 66 },
  { name: "Facebook", orders: 7, revenue: 950, pct: 20 },
  { name: "Directo", orders: 3, revenue: 700, pct: 14 },
];

const maxRevenue = Math.max(...MONTHLY_DATA.map((d) => d.revenue));

export default function AnaliticasPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Analíticas</h1>
        <p className="text-sm text-zinc-400">Rendimiento de Custom Works — últimos 6 meses</p>
      </div>

      {/* métricas clave */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "Ingresos totales", value: formatCurrency(20750), icon: TrendingUp },
          { label: "Órdenes totales", value: "160", icon: ShoppingCart },
          { label: "Clientes únicos", value: "134", icon: Users },
          { label: "Descargas totales", value: "1,243", icon: Download },
        ].map(({ label, value, icon: Icon }) => (
          <Card key={label}>
            <CardContent className="p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-zinc-500">{label}</p>
                  <p className="mt-1 text-2xl font-bold text-white">{value}</p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10">
                  <Icon className="h-5 w-5 text-orange-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* gráfica de ingresos (barras CSS) */}
        <Card>
          <CardHeader>
            <CardTitle>Ingresos por mes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between gap-2 h-40">
              {MONTHLY_DATA.map((d) => (
                <div key={d.month} className="flex flex-1 flex-col items-center gap-1">
                  <span className="text-xs text-orange-400">{formatCurrency(d.revenue, "MXN").replace("MX$", "$")}</span>
                  <div
                    className="w-full rounded-t-sm bg-orange-500/70 transition-all hover:bg-orange-500"
                    style={{ height: `${(d.revenue / maxRevenue) * 100}%` }}
                  />
                  <span className="text-xs text-zinc-500">{d.month}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* canales de venta */}
        <Card>
          <CardHeader>
            <CardTitle>Canales de venta</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {CHANNELS.map((c) => (
                <div key={c.name}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="font-medium text-zinc-200">{c.name}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-zinc-500">{c.orders} órdenes</span>
                      <span className="font-bold text-orange-400">{formatCurrency(c.revenue)}</span>
                    </div>
                  </div>
                  <div className="h-2 w-full rounded-full bg-zinc-800">
                    <div
                      className="h-2 rounded-full bg-orange-500 transition-all"
                      style={{ width: `${c.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* países */}
        <Card>
          <CardHeader>
            <CardTitle>Clientes por país</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {TOP_COUNTRIES.map((c) => (
                <div key={c.country} className="flex items-center justify-between">
                  <span className="text-sm text-zinc-300">{c.country}</span>
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-24 rounded-full bg-zinc-800">
                      <div className="h-1.5 rounded-full bg-orange-400" style={{ width: `${c.pct}%` }} />
                    </div>
                    <Badge variant="secondary">{c.orders}</Badge>
                    <span className="w-8 text-right text-xs text-zinc-500">{c.pct}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* resumen de productos */}
        <Card>
          <CardHeader>
            <CardTitle>Productos más rentables</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: "Árbol de la Vida", revenue: 7152, units: 48 },
                { name: "Rosa Metálica 3D", revenue: 4895, units: 55 },
                { name: "Mandala Colgante", revenue: 4819, units: 61 },
                { name: "Marco Azteca", revenue: 4773, units: 37 },
              ].map((p, i) => (
                <div key={p.name} className="flex items-center gap-3">
                  <span className="text-xs font-bold text-zinc-600">#{i + 1}</span>
                  <div className="flex-1 min-w-0">
                    <p className="truncate text-sm text-zinc-200">{p.name}</p>
                    <p className="text-xs text-zinc-500">{p.units} unidades</p>
                  </div>
                  <span className="font-bold text-orange-400">{formatCurrency(p.revenue)}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
