import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ProductCard } from "@/components/web/product-card";
import { ChatWidget } from "@/components/web/chat-widget";

const ALL_PRODUCTS = [
  { id: "1", name: "Cuadro Árbol de la Vida", slug: "arbol-de-la-vida", price: 149, category: "Decoración", downloads: 48, isFeatured: true },
  { id: "2", name: "Logo Industrial CNC", slug: "logo-industrial", price: 99, category: "Industrial", downloads: 32 },
  { id: "3", name: "Colgante Mandala", slug: "mandala-colgante", price: 79, category: "Joyería", downloads: 61 },
  { id: "4", name: "Soporte para Lámpara Retro", slug: "soporte-lampara-retro", price: 199, category: "Muebles", downloads: 19 },
  { id: "5", name: "Marco Decorativo Azteca", slug: "marco-azteca", price: 129, category: "Decoración", downloads: 37 },
  { id: "6", name: "Placa Personalizada para Empresa", slug: "placa-empresa", price: 249, category: "Empresarial", downloads: 14 },
  { id: "7", name: "Rosa Metálica 3D", slug: "rosa-metalica-3d", price: 89, category: "Decoración", downloads: 55 },
  { id: "8", name: "Mapa de México Artístico", slug: "mapa-mexico-artistico", price: 159, category: "Arte", downloads: 28 },
];

const CATEGORIES = ["Todos", "Decoración", "Industrial", "Joyería", "Muebles", "Arte", "Empresarial"];

export const metadata = { title: "Catálogo" };

export default function CatalogoPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-zinc-950 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-white">Catálogo DXF</h1>
            <p className="mt-2 text-zinc-400">
              {ALL_PRODUCTS.length} archivos disponibles listos para descarga
            </p>
          </div>

          {/* filtros */}
          <div className="mb-8 flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-1.5 text-sm text-zinc-300 hover:border-orange-500 hover:text-orange-400 transition-colors"
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
