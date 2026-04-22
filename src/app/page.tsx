import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/web/hero";
import { ChatWidget } from "@/components/web/chat-widget";
import { ProductCard } from "@/components/web/product-card";
import { ArrowRight, CheckCircle, Download, Settings, Zap } from "lucide-react";
import Link from "next/link";

const FEATURED_PRODUCTS = [
  { id: "1", name: "Cuadro Árbol de la Vida – Corte Láser Metálico", slug: "arbol-de-la-vida", price: 149, category: "Decoración", downloads: 48, isFeatured: true },
  { id: "2", name: "Logo Industrial CNC – Plantilla DXF Profesional", slug: "logo-industrial", price: 99, category: "Industrial", downloads: 32 },
  { id: "3", name: "Colgante Mandala – Diseño Vectorial para Láser", slug: "mandala-colgante", price: 79, category: "Joyería", downloads: 61 },
  { id: "4", name: "Soporte para Lámpara Retro – Archivos DXF Completos", slug: "soporte-lampara-retro", price: 199, category: "Mobiliario", downloads: 19 },
];

const STEPS = [
  { num: "01", icon: Download, title: "Descarga el archivo", desc: "Compra en Etsy o Facebook. El DXF llega a tu correo en segundos." },
  { num: "02", icon: Settings, title: "Carga en tu software", desc: "Compatible con LightBurn, RDWorks, LaserGRBL, AutoCAD, Inkscape." },
  { num: "03", icon: Zap, title: "Corta y produce", desc: "Resultado de precisión industrial. Tolerancia garantizada ±0.1mm." },
];

const SOFTWARE = ["LightBurn", "LaserGRBL", "RDWorks", "AutoCAD", "CorelDRAW", "Inkscape", "SheetCAM", "Fusion 360"];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* ─── productos destacados ─────────────────────────────── */}
        <section className="bg-[#08080a] py-20 relative">
          <div className="absolute inset-0 bg-dots opacity-40" />
          <div className="relative z-10 mx-auto max-w-7xl px-4">
            <div className="mb-10 flex items-end justify-between">
              <div>
                <div className="font-mono text-[10px] tracking-widest text-orange-500 uppercase mb-2">
                  // CATÁLOGO
                </div>
                <h2 className="text-3xl font-bold text-white tracking-tight">
                  Diseños <span className="text-orange-500">destacados</span>
                </h2>
              </div>
              <Link
                href="/catalogo"
                className="flex items-center gap-2 font-mono text-xs text-[#7a7a92] uppercase tracking-widest hover:text-orange-400 transition-colors"
              >
                Ver todo <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURED_PRODUCTS.map((p) => (
                <ProductCard key={p.id} {...p} />
              ))}
            </div>
          </div>
        </section>

        {/* ─── cómo funciona ────────────────────────────────────── */}
        <section id="como-funciona" className="border-y border-[#1e1e24] bg-[#0e0e11] py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <div className="font-mono text-[10px] tracking-widest text-orange-500 uppercase mb-2">
                // PROCESO
              </div>
              <h2 className="text-3xl font-bold text-white tracking-tight">
                De la compra al corte
              </h2>
            </div>
            <div className="grid gap-0 md:grid-cols-3 relative">
              {/* línea conectora */}
              <div className="absolute top-8 left-1/3 right-1/3 h-px bg-gradient-to-r from-[#1e1e24] via-orange-500/40 to-[#1e1e24] hidden md:block" />

              {STEPS.map(({ num, icon: Icon, title, desc }) => (
                <div key={num} className="relative border border-[#1e1e24] bg-[#08080a] p-8 hover:border-orange-500/30 transition-colors group">
                  <div className="absolute top-0 left-0 font-mono text-[10px] text-[#3a3a50] px-2 py-1">
                    STEP_{num}
                  </div>
                  <div className="mb-6 mt-4 flex h-12 w-12 items-center justify-center border border-orange-500/30 bg-orange-500/5 group-hover:bg-orange-500/10 group-hover:border-orange-500/50 transition-all">
                    <Icon className="h-5 w-5 text-orange-500" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{title}</h3>
                  <p className="text-sm text-[#7a7a92] leading-relaxed font-light">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── compatibilidad ───────────────────────────────────── */}
        <section className="bg-[#08080a] py-20">
          <div className="mx-auto max-w-5xl px-4">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <div className="font-mono text-[10px] tracking-widest text-orange-500 uppercase mb-2">
                  // COMPATIBILIDAD
                </div>
                <h2 className="text-3xl font-bold text-white tracking-tight mb-4">
                  Funciona con tu herramienta
                </h2>
                <p className="text-[#7a7a92] font-light leading-relaxed">
                  Nuestros archivos DXF están optimizados según el estándar AutoCAD R14–2025.
                  Sin capas corruptas, sin geometrías abiertas. Listo para producción.
                </p>
                <div className="mt-6 flex items-center gap-3 font-mono text-sm">
                  <span className="text-orange-500">►</span>
                  <span className="text-[#7a7a92]">Capas separadas por tipo de operación</span>
                </div>
                <div className="mt-2 flex items-center gap-3 font-mono text-sm">
                  <span className="text-orange-500">►</span>
                  <span className="text-[#7a7a92]">Geometría cerrada y limpia</span>
                </div>
                <div className="mt-2 flex items-center gap-3 font-mono text-sm">
                  <span className="text-orange-500">►</span>
                  <span className="text-[#7a7a92]">Unidades en milímetros, escala 1:1</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-px bg-[#1e1e24]">
                {SOFTWARE.map((sw) => (
                  <div key={sw} className="flex items-center gap-2 bg-[#08080a] px-4 py-3 hover:bg-[#0e0e11] transition-colors group">
                    <CheckCircle className="h-3.5 w-3.5 text-green-500/60 group-hover:text-green-400 shrink-0 transition-colors" />
                    <span className="font-mono text-xs text-[#7a7a92] group-hover:text-[#e8e8f0] transition-colors">{sw}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA industrial ───────────────────────────────────── */}
        <section className="relative overflow-hidden border-y border-[#1e1e24] py-24">
          <div className="absolute inset-0 bg-grid opacity-60" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 100% at 50% 50%, rgba(249,115,22,0.08) 0%, transparent 70%)" }}
          />
          {/* corner marks */}
          <div className="absolute top-6 left-6 w-6 h-6 border-l border-t border-orange-500/30" />
          <div className="absolute top-6 right-6 w-6 h-6 border-r border-t border-orange-500/30" />
          <div className="absolute bottom-6 left-6 w-6 h-6 border-l border-b border-orange-500/30" />
          <div className="absolute bottom-6 right-6 w-6 h-6 border-r border-b border-orange-500/30" />

          <div className="relative z-10 mx-auto max-w-2xl px-4 text-center">
            <div className="font-mono text-[10px] tracking-widest text-orange-500 uppercase mb-4">
              // DISEÑO PERSONALIZADO
            </div>
            <h2 className="text-4xl font-bold text-white tracking-tight">
              ¿Tienes una pieza<br />en mente?
            </h2>
            <p className="mt-4 text-[#7a7a92] font-light">
              Desde logos corporativos hasta piezas industriales complejas.
              Entregamos el DXF en menos de 48 horas.
            </p>
            <Link
              href="/personalizado"
              className="btn-industrial mt-8 inline-flex items-center gap-2 border border-orange-500 bg-orange-500/10 px-8 py-3.5 font-mono text-sm font-bold tracking-widest text-orange-400 uppercase transition-all hover:bg-orange-500 hover:text-black"
            >
              SOLICITAR COTIZACIÓN
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
