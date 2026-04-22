"use client";
import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ChatWidget } from "@/components/web/chat-widget";
import { Loader2, CheckCircle, ArrowRight } from "lucide-react";

export default function PersonalizadoPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", description: "", budget: "", material: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSent(true);
    setLoading(false);
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#08080a]">
        {/* header */}
        <div className="relative border-b border-[#1e1e24] bg-[#0e0e11] py-12 overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-60" />
          <div className="relative z-10 mx-auto max-w-4xl px-4">
            <div className="font-mono text-[10px] tracking-widest text-orange-500 uppercase mb-2">
              // SOLICITUD DE DISEÑO
            </div>
            <h1 className="text-4xl font-bold text-white tracking-tight">Diseño personalizado</h1>
            <p className="mt-2 font-mono text-sm text-[#7a7a92]">
              Entrega en 24–48 horas · Revisiones incluidas · Formato DXF garantizado
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-4 py-16">
          {sent ? (
            <div className="relative border border-green-500/30 bg-green-500/5 p-12 text-center">
              <div className="absolute top-0 left-0 w-6 h-6 border-l border-t border-green-500/30" />
              <div className="absolute top-0 right-0 w-6 h-6 border-r border-t border-green-500/30" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-l border-b border-green-500/30" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-r border-b border-green-500/30" />
              <CheckCircle className="mx-auto h-12 w-12 text-green-400 mb-4" />
              <div className="font-mono text-[10px] tracking-widest text-green-500 uppercase mb-2">REQUEST_RECEIVED</div>
              <h2 className="text-2xl font-bold text-white">Solicitud enviada</h2>
              <p className="mt-3 text-[#7a7a92] font-light">
                Te contactaremos en menos de 24 horas para confirmar detalles y precio.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-3">
              {/* info lateral */}
              <div className="space-y-4 lg:col-span-1">
                <div className="font-mono text-[9px] text-[#3a3a50] tracking-widest uppercase mb-4">
                  // PROCESO
                </div>
                {[
                  { step: "01", title: "Envía tu solicitud", desc: "Describe tu pieza con la mayor precisión posible." },
                  { step: "02", title: "Cotización en 24h", desc: "Te enviamos precio y tiempo de entrega." },
                  { step: "03", title: "Diseño y revisión", desc: "Trabajamos hasta que el archivo sea perfecto." },
                  { step: "04", title: "Entrega DXF", desc: "Archivo listo para tu máquina de corte." },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-3">
                    <div className="font-mono text-xs text-orange-500 shrink-0 mt-0.5">{step}</div>
                    <div>
                      <div className="text-sm font-semibold text-white">{title}</div>
                      <div className="text-xs text-[#7a7a92] mt-0.5 font-light">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* formulario */}
              <form onSubmit={handleSubmit} className="space-y-5 border border-[#1e1e24] bg-[#0e0e11] p-6 lg:col-span-2">
                <div className="font-mono text-[9px] text-[#3a3a50] tracking-widest uppercase">
                  // DATOS DE CONTACTO
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="font-mono text-[10px] tracking-widest text-[#7a7a92] uppercase mb-2 block">Nombre *</label>
                    <input name="name" required value={form.name} onChange={handleChange} placeholder="Tu nombre"
                      className="w-full bg-[#08080a] border border-[#1e1e24] px-3 py-2.5 font-mono text-sm text-[#e8e8f0] placeholder:text-[#3a3a50] outline-none focus:border-orange-500/50 transition-colors" />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] tracking-widest text-[#7a7a92] uppercase mb-2 block">Email *</label>
                    <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="correo@email.com"
                      className="w-full bg-[#08080a] border border-[#1e1e24] px-3 py-2.5 font-mono text-sm text-[#e8e8f0] placeholder:text-[#3a3a50] outline-none focus:border-orange-500/50 transition-colors" />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="font-mono text-[10px] tracking-widest text-[#7a7a92] uppercase mb-2 block">WhatsApp</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="+52 81 0000 0000"
                      className="w-full bg-[#08080a] border border-[#1e1e24] px-3 py-2.5 font-mono text-sm text-[#e8e8f0] placeholder:text-[#3a3a50] outline-none focus:border-orange-500/50 transition-colors" />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] tracking-widest text-[#7a7a92] uppercase mb-2 block">Material</label>
                    <select name="material" value={form.material} onChange={handleChange}
                      className="w-full bg-[#08080a] border border-[#1e1e24] px-3 py-2.5 font-mono text-sm text-[#e8e8f0] outline-none focus:border-orange-500/50 transition-colors">
                      <option value="">Seleccionar...</option>
                      <option value="acero">Acero al carbono</option>
                      <option value="inox">Acero inoxidable</option>
                      <option value="aluminio">Aluminio</option>
                      <option value="laton">Latón</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>

                <div className="border-t border-[#1e1e24] pt-4">
                  <div className="font-mono text-[9px] text-[#3a3a50] tracking-widest uppercase mb-3">
                    // DESCRIPCIÓN DE LA PIEZA
                  </div>
                  <textarea name="description" required rows={5} value={form.description} onChange={handleChange}
                    placeholder="Describe la pieza: dimensiones, geometría, cantidad de agujeros, grosor de material, uso final, referencias visuales, etc."
                    className="w-full bg-[#08080a] border border-[#1e1e24] px-3 py-2.5 font-mono text-sm text-[#e8e8f0] placeholder:text-[#3a3a50] outline-none focus:border-orange-500/50 transition-colors resize-none" />
                </div>

                <div>
                  <label className="font-mono text-[10px] tracking-widest text-[#7a7a92] uppercase mb-2 block">Presupuesto estimado</label>
                  <select name="budget" value={form.budget} onChange={handleChange}
                    className="w-full bg-[#08080a] border border-[#1e1e24] px-3 py-2.5 font-mono text-sm text-[#e8e8f0] outline-none focus:border-orange-500/50 transition-colors">
                    <option value="">Seleccionar rango...</option>
                    <option value="menos-500">Menos de $500 MXN</option>
                    <option value="500-1000">$500 – $1,000 MXN</option>
                    <option value="1000-2500">$1,000 – $2,500 MXN</option>
                    <option value="mas-2500">Más de $2,500 MXN</option>
                  </select>
                </div>

                <button type="submit" disabled={loading}
                  className="btn-industrial w-full flex items-center justify-center gap-2 bg-orange-500 py-3.5 font-mono text-xs font-bold tracking-widest text-black uppercase transition-all hover:bg-orange-400 disabled:opacity-60">
                  {loading ? (
                    <><Loader2 className="h-4 w-4 animate-spin" /> PROCESANDO...</>
                  ) : (
                    <>ENVIAR SOLICITUD <ArrowRight className="h-4 w-4" /></>
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
