import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/web/hero";
import { ChatWidget } from "@/components/web/chat-widget";
import { ProductCard } from "@/components/web/product-card";
import { ArrowRight, CheckCircle, Download, Settings, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const FEATURED_PRODUCTS = [
  { id: "1", name: "Cuadro Árbol de la Vida – Corte Láser Metálico", slug: "arbol-de-la-vida", price: 149, category: "Decoración", downloads: 48, isFeatured: true },
  { id: "2", name: "Logo Industrial CNC – Plantilla DXF Profesional", slug: "logo-industrial", price: 99, category: "Industrial", downloads: 32 },
  { id: "3", name: "Colgante Mandala – Diseño Vectorial para Láser", slug: "mandala-colgante", price: 79, category: "Joyería", downloads: 61 },
  { id: "4", name: "Soporte para Lámpara Retro – Archivos DXF Completos", slug: "soporte-lampara-retro", price: 199, category: "Muebles", downloads: 19 },
];

const HOW_IT_WORKS = [
  { icon: Download, title: "1. Compra el archivo", desc: "Elige tu diseño en nuestra tienda Etsy o Facebook. Pago seguro en segundos." },
  { icon: Settings, title: "2. Carga en tu máquina", desc: "Abre el DXF en tu software de corte (LightBurn, LaserGRBL, RDWorks, etc.)." },
  { icon: Zap, title: "3. Corta y listo", desc: "Tu máquina hace el trabajo. Resultado profesional garantizado." },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* productos destacados */}
        <section className="bg-zinc-950 py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-10 flex items-end justify-between">
              <div>
                <p className="text-sm text-orange-500 font-medium">Nuestros diseños</p>
                <h2 className="mt-1 text-3xl font-bold text-white">Productos destacados</h2>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link href="/catalogo">
                  Ver todo <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURED_PRODUCTS.map((p) => (
                <ProductCard key={p.id} {...p} />
              ))}
            </div>
          </div>
        </section>

        {/* cómo funciona */}
        <section id="como-funciona" className="border-y border-zinc-800 bg-zinc-900/50 py-20">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <p className="text-sm text-orange-500 font-medium">Proceso simple</p>
            <h2 className="mt-1 text-3xl font-bold text-white">¿Cómo funciona?</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {HOW_IT_WORKS.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 text-left">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/10">
                    <Icon className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm text-zinc-400">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* compatibilidad */}
        <section className="bg-zinc-950 py-20">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <h2 className="text-3xl font-bold text-white">Compatible con tu máquina</h2>
            <p className="mt-3 text-zinc-400">
              Nuestros archivos funcionan con cualquier software y máquina de corte láser o plasma.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 text-left">
              {["LightBurn", "LaserGRBL", "RDWorks", "Inkscape", "AutoCAD", "CorelDRAW"].map((sw) => (
                <div key={sw} className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-3">
                  <CheckCircle className="h-4 w-4 text-green-400 shrink-0" />
                  <span className="text-sm text-zinc-300">{sw}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-orange-600 to-orange-500 py-20">
          <div className="mx-auto max-w-2xl px-4 text-center">
            <h2 className="text-3xl font-bold text-white">¿Tienes un diseño en mente?</h2>
            <p className="mt-3 text-orange-100">
              Te hacemos el archivo DXF personalizado. Desde logos hasta piezas industriales.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="mt-8 border-white text-white hover:bg-white hover:text-orange-600"
              asChild
            >
              <Link href="/personalizado">Solicitar diseño personalizado</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
