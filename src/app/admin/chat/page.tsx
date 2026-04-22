"use client";
import { useState } from "react";
import { MessageCircle, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { cn, formatDate } from "@/lib/utils";

const SESSIONS = [
  { id: "s1", customer: "María López", lastMessage: "¿Tienen el archivo en formato SVG también?", time: "2026-04-21", status: "open", unread: 2 },
  { id: "s2", customer: "Visitante #482", lastMessage: "Hola, ¿cuánto cuesta un diseño personalizado?", time: "2026-04-21", status: "open", unread: 1 },
  { id: "s3", customer: "John Smith", lastMessage: "Thank you! The file works great.", time: "2026-04-20", status: "closed", unread: 0 },
  { id: "s4", customer: "Carlos Ramírez", lastMessage: "Necesito el diseño para mañana, ¿es posible?", time: "2026-04-20", status: "escalated", unread: 0 },
];

const MESSAGES_S1 = [
  { role: "user", content: "Hola! Me interesa el archivo del Árbol de la Vida" },
  { role: "assistant", content: "¡Hola María! Claro, el Árbol de la Vida es uno de nuestros diseños más populares. El archivo incluye formato DXF listo para corte láser. ¿Tienes alguna duda sobre las dimensiones o compatibilidad?" },
  { role: "user", content: "¿Tienen el archivo en formato SVG también?" },
];

const STATUS_VARIANT: Record<string, "success" | "warning" | "destructive" | "secondary"> = {
  open: "success", escalated: "destructive", closed: "secondary"
};
const STATUS_LABEL: Record<string, string> = { open: "Abierto", closed: "Cerrado", escalated: "Escalado" };

export default function AdminChatPage() {
  const [selected, setSelected] = useState(SESSIONS[0].id);
  const session = SESSIONS.find((s) => s.id === selected)!;

  return (
    <div className="flex h-full">
      {/* lista de sesiones */}
      <div className="w-72 shrink-0 border-r border-zinc-800 bg-zinc-900 flex flex-col">
        <div className="p-4 border-b border-zinc-800">
          <h2 className="font-semibold text-white mb-3">Conversaciones</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
            <Input placeholder="Buscar..." className="pl-9 h-8 text-xs" />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {SESSIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => setSelected(s.id)}
              className={cn(
                "w-full p-4 text-left border-b border-zinc-800 transition-colors",
                selected === s.id ? "bg-zinc-800" : "hover:bg-zinc-800/50"
              )}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500/20 text-xs font-bold text-orange-400">
                    {s.customer.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-zinc-100">{s.customer}</p>
                    <p className="truncate text-xs text-zinc-500">{s.lastMessage}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1 shrink-0">
                  <span className="text-xs text-zinc-600">{formatDate(s.time)}</span>
                  {s.unread > 0 && (
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 text-xs text-white">{s.unread}</span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* panel de mensajes */}
      <div className="flex flex-1 flex-col">
        <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500/20 text-sm font-bold text-orange-400">
              {session.customer.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-white">{session.customer}</p>
              <Badge variant={STATUS_VARIANT[session.status]}>{STATUS_LABEL[session.status]}</Badge>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {MESSAGES_S1.map((m, i) => (
            <div key={i} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}>
              {m.role === "assistant" && (
                <div className="mr-2 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500/20">
                  <MessageCircle className="h-3.5 w-3.5 text-orange-400" />
                </div>
              )}
              <div
                className={cn(
                  "max-w-md rounded-xl px-4 py-2.5 text-sm",
                  m.role === "user" ? "bg-orange-500 text-white" : "bg-zinc-800 text-zinc-200"
                )}
              >
                {m.content}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-zinc-800 p-4">
          <p className="text-center text-xs text-zinc-600">Vista de solo lectura — las respuestas son gestionadas por el chatbot IA</p>
        </div>
      </div>
    </div>
  );
}
