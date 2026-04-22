"use client";
import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Loader2, Minimize2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "SISTEMA LISTO. Soy el asistente de Custom Works. ¿En qué te puedo ayudar? Puedo orientarte con archivos DXF, precios o pedidos personalizados.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function send() {
    if (!input.trim() || loading) return;
    const userMsg: Message = { role: "user", content: input.trim() };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });
      const data = await res.json();
      setMessages((m) => [...m, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages((m) => [...m, { role: "assistant", content: "ERROR_CONN: Intenta de nuevo o contáctanos directamente." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* botón flotante */}
      <button
        onClick={() => setOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center border border-orange-500/50 bg-[#0e0e11] text-orange-500 shadow-lg transition-all hover:bg-orange-500 hover:text-black group",
          "clip-corner-sm",
          open && "hidden"
        )}
        aria-label="Abrir chat"
      >
        <MessageSquare className="h-5 w-5" />
        <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse border border-[#08080a]" />
      </button>

      {/* panel */}
      <div className={cn(
        "fixed bottom-6 right-6 z-50 flex flex-col w-80 h-[460px] border border-[#2a2a34] bg-[#08080a] shadow-2xl transition-all duration-200 clip-corner",
        open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
      )}>
        {/* header */}
        <div className="flex items-center justify-between border-b border-[#1e1e24] bg-[#0e0e11] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="font-mono text-xs font-bold text-white tracking-widest uppercase">CW · ASISTENTE IA</span>
          </div>
          <button onClick={() => setOpen(false)} className="text-[#3a3a50] hover:text-white transition-colors">
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* mensajes */}
        <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-grid-sm">
          {messages.map((msg, i) => (
            <div key={i} className={cn("flex gap-2", msg.role === "user" ? "flex-row-reverse" : "flex-row")}>
              {msg.role === "assistant" && (
                <div className="flex h-6 w-6 shrink-0 items-center justify-center border border-orange-500/30 bg-orange-500/5">
                  <span className="font-mono text-[8px] text-orange-500">CW</span>
                </div>
              )}
              <div className={cn(
                "max-w-[78%] px-3 py-2 text-xs leading-relaxed font-mono",
                msg.role === "user"
                  ? "bg-orange-500 text-black font-medium clip-corner-sm"
                  : "border border-[#2a2a34] bg-[#0e0e11] text-[#e8e8f0]"
              )}>
                {msg.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex gap-2">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center border border-orange-500/30 bg-orange-500/5">
                <span className="font-mono text-[8px] text-orange-500">CW</span>
              </div>
              <div className="border border-[#2a2a34] bg-[#0e0e11] px-3 py-2">
                <Loader2 className="h-3 w-3 animate-spin text-orange-500" />
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* input */}
        <div className="flex gap-2 border-t border-[#1e1e24] bg-[#0e0e11] p-3">
          <input
            placeholder="Escribe un mensaje..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            className="flex-1 bg-transparent font-mono text-xs text-[#e8e8f0] placeholder:text-[#3a3a50] outline-none border-b border-[#2a2a34] pb-1 focus:border-orange-500/50 transition-colors"
          />
          <button
            onClick={send}
            disabled={loading}
            className="flex h-7 w-7 items-center justify-center bg-orange-500 text-black transition-all hover:bg-orange-400 disabled:opacity-50"
          >
            <Send className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* status bar */}
        <div className="border-t border-[#1e1e24] bg-[#08080a] px-3 py-1">
          <span className="font-mono text-[9px] text-[#3a3a50]">
            POWERED BY CLAUDE · CUSTOM WORKS IA
          </span>
        </div>
      </div>
    </>
  );
}
