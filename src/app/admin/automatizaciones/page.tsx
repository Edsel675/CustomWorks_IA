"use client";
import { useState } from "react";
import { Zap, Play, Pause, Plus, Clock, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";

const AUTOMATIONS = [
  {
    id: "1", name: "Sincronización Etsy → BD",
    description: "Importa nuevas órdenes de Etsy cada hora y las guarda en la base de datos.",
    trigger: "Cron: cada 1 hora", action: "sync_etsy_orders",
    isActive: true, lastRun: "2026-04-21", runs: 284, successRate: 99,
  },
  {
    id: "2", name: "Notificación nueva orden",
    description: "Envía un email cuando llega una nueva orden de cualquier canal.",
    trigger: "Evento: nueva orden", action: "send_email_notification",
    isActive: true, lastRun: "2026-04-21", runs: 34, successRate: 100,
  },
  {
    id: "3", name: "Reporte diario de ventas",
    description: "Genera y envía un resumen de ventas del día anterior cada mañana.",
    trigger: "Cron: 8:00 AM diario", action: "daily_sales_report",
    isActive: true, lastRun: "2026-04-21", runs: 45, successRate: 97,
  },
  {
    id: "4", name: "Publicar en Facebook",
    description: "Publica automáticamente nuevos productos en el perfil de Facebook.",
    trigger: "Evento: producto nuevo", action: "facebook_post",
    isActive: false, lastRun: "2026-04-10", runs: 8, successRate: 75,
  },
  {
    id: "5", name: "Actualizar precio en Etsy",
    description: "Sincroniza cambios de precio desde el admin hacia el listing de Etsy.",
    trigger: "Evento: precio actualizado", action: "sync_etsy_price",
    isActive: true, lastRun: "2026-04-19", runs: 12, successRate: 100,
  },
];

export default function AutomatizacionesPage() {
  const [automations, setAutomations] = useState(AUTOMATIONS);

  function toggle(id: string) {
    setAutomations((prev) => prev.map((a) => a.id === id ? { ...a, isActive: !a.isActive } : a));
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Automatizaciones</h1>
          <p className="text-sm text-zinc-400">
            {automations.filter((a) => a.isActive).length} activas de {automations.length} configuradas
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4" /> Nueva automatización
        </Button>
      </div>

      {/* stats rápidas */}
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { label: "Ejecuciones totales", value: automations.reduce((s, a) => s + a.runs, 0).toString() },
          { label: "Tasa de éxito promedio", value: `${Math.round(automations.reduce((s, a) => s + a.successRate, 0) / automations.length)}%` },
          { label: "Activas ahora", value: automations.filter((a) => a.isActive).length.toString() },
        ].map(({ label, value }) => (
          <Card key={label}>
            <CardContent className="p-5">
              <p className="text-xs text-zinc-500">{label}</p>
              <p className="mt-1 text-2xl font-bold text-white">{value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* lista de automatizaciones */}
      <div className="space-y-4">
        {automations.map((a) => (
          <Card key={a.id} className={a.isActive ? "" : "opacity-60"}>
            <CardContent className="p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${a.isActive ? "bg-orange-500/15" : "bg-zinc-800"}`}>
                    <Zap className={`h-4 w-4 ${a.isActive ? "text-orange-500" : "text-zinc-600"}`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-zinc-100">{a.name}</h3>
                      <Badge variant={a.isActive ? "success" : "secondary"}>
                        {a.isActive ? "Activa" : "Pausada"}
                      </Badge>
                    </div>
                    <p className="mt-1 text-sm text-zinc-400">{a.description}</p>
                    <div className="mt-2 flex flex-wrap gap-3 text-xs text-zinc-500">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {a.trigger}
                      </span>
                      <span className="flex items-center gap-1">
                        <CheckCircle className="h-3 w-3 text-green-500" /> {a.runs} ejecuciones
                      </span>
                      <span className="flex items-center gap-1">
                        {a.successRate >= 95
                          ? <CheckCircle className="h-3 w-3 text-green-400" />
                          : <XCircle className="h-3 w-3 text-yellow-400" />}
                        {a.successRate}% éxito
                      </span>
                      <span>Última: {formatDate(a.lastRun)}</span>
                    </div>
                  </div>
                </div>
                <Button
                  variant={a.isActive ? "outline" : "default"}
                  size="sm"
                  onClick={() => toggle(a.id)}
                >
                  {a.isActive ? <><Pause className="h-4 w-4" /> Pausar</> : <><Play className="h-4 w-4" /> Activar</>}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
