import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ProductCard } from "@/components/web/product-card";
import { ChatWidget } from "@/components/web/chat-widget";

const ALL_PRODUCTS = [
  { id: "1", name: "Cuadro Árbol de la Vida", slug: "arbol-de-la-vida", price: 149, category: "Decoración", downloads: 48, isFeatured: true },
  { id: "2", name: "Logo Industrial CNC", slug: "logo-industrial", price: 99, category: "Industrial", downloads: 32 },
  { id: "3", name: "Colgante Mandala", slug: "mandala-colgante", price: 79, category: "Joyería", downloads: 61 },
  { id: "4", name: "Soporte para Lámpara Retro", slug: "soporte-lampara-retro", price: 199, category: "Mobiliario", downloads: 19 },
  { id: "5", name: "Marco Decorativo Azteca", slug: "marco-azteca", price: 129, category: "Decoración", downloads: 37 },
  { id: "6", name: "Placa Personalizada para Empresa", slug: "placa-empresa", price: 249, category: "Empresarial", downloads: 14 },
  { id: "7", name: "Rosa Metálica 3D", slug: "rosa-metalica-3d", price: 89, category: "Decoración", downloads: 55 },
  { id: "8", name: "Mapa de México Artístico", slug: "mapa-mexico-artistico", price: 159, category: "Arte", downloads: 28 },
];

const CATEGORIES = ["TODOS", "DECORACIÓN", "INDUSTRIAL", "JOYERÍA", "MOBILIARIO", "ARTE", "EMPRESARIAL"];

export const metadata = { title: "Catálogo" };

export default function CatalogoPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#08080a]">
        {/* header */}
        <div className="relative border-b border-[#1e1e24] bg-[#0e0e11] py-12 overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-60" />
          <div className="absolute top-4 left-4 w-5 h-5 border-l border-t border-orange-500/30" />
          <div className="absolute top-4 right-4 w-5 h-5 border-r border-t border-orange-500/30" />
          <div className="relative z-10 mx-auto max-w-7xl px-4">
            <div className="font-mono text-[10px] tracking-widest text-orange-500 uppercase mb-2">
              // CATÁLOGO DXF
            </div>
            <h1 className="text-4xl font-bold text-white tracking-tight">
              Archivos disponibles
            </h1>
            <p className="mt-2 font-mono text-sm text-[#7a7a92]">
              {ALL_PRODUCTS.length} archivos · Formato DXF R14–2025 · Escala 1:1
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-10">
          {/* filtros */}
          <div className="mb-8 flex flex-wrap gap-1.5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className="border border-[#1e1e24] bg-[#0e0e11] px-3 py-1.5 font-mono text-[10px] tracking-widest text-[#7a7a92] uppercase transition-all hover:border-orange-500/40 hover:text-orange-400 first:border-orange-500/60 first:text-orange-400"
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ALL_PRODUCTS.map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
