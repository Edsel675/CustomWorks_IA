"use client";
import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ChatWidget } from "@/components/web/chat-widget";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Loader2 } from "lucide-react";

export default function PersonalizadoPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", description: "", budget: "" });

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
      <main className="min-h-screen bg-zinc-950 py-20">
        <div className="mx-auto max-w-2xl px-4">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold text-white">Diseño personalizado</h1>
            <p className="mt-3 text-zinc-400">
              ¿Tienes una idea en mente? Cuéntanos y te entregamos el archivo DXF listo para cortar.
            </p>
          </div>

          {sent ? (
            <div className="flex flex-col items-center gap-4 rounded-xl border border-green-500/30 bg-green-500/10 p-10 text-center">
              <CheckCircle className="h-12 w-12 text-green-400" />
              <h2 className="text-xl font-semibold text-white">¡Solicitud recibida!</h2>
              <p className="text-zinc-400">Te contactaremos en menos de 24 horas para confirmar los detalles y precio.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 rounded-xl border border-zinc-800 bg-zinc-900 p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm text-zinc-300">Nombre *</label>
                  <Input name="name" required value={form.name} onChange={handleChange} placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm text-zinc-300">Email *</label>
                  <Input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="correo@email.com" />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm text-zinc-300">Teléfono / WhatsApp</label>
                <Input name="phone" value={form.phone} onChange={handleChange} placeholder="+52 81 0000 0000" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm text-zinc-300">Describe tu diseño *</label>
                <Textarea
                  name="description"
                  required
                  rows={5}
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Describe el diseño, dimensiones aproximadas, material en el que lo vas a cortar, cantidad de piezas, etc."
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm text-zinc-300">Presupuesto estimado</label>
                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  className="flex h-10 w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-zinc-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">Selecciona un rango</option>
                  <option value="menos-500">Menos de $500 MXN</option>
                  <option value="500-1000">$500 – $1,000 MXN</option>
                  <option value="1000-2500">$1,000 – $2,500 MXN</option>
                  <option value="mas-2500">Más de $2,500 MXN</option>
                </select>
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Enviando...</> : "Enviar solicitud"}
              </Button>
            </form>
          )}
        </div>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
