import Link from "next/link";
import { Zap, Share2, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-orange-500" />
              <span className="font-bold text-white">
                Custom<span className="text-orange-500">Works</span>
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-zinc-400">
              Archivos DXF profesionales para corte láser. Diseños metálicos
              decorativos y funcionales desde Monterrey, México.
            </p>
            <div className="mt-4 flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-orange-400 transition-colors"
              >
                <Share2 className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-orange-400 transition-colors"
              >
                <Share2 className="h-5 w-5" />
              </a>
              <a
                href="mailto:customworks@gmail.com"
                className="text-zinc-500 hover:text-orange-400 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-zinc-100">Tienda</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><Link href="/catalogo" className="hover:text-white transition-colors">Catálogo</Link></li>
              <li><Link href="/catalogo?cat=decoracion" className="hover:text-white transition-colors">Decoración</Link></li>
              <li><Link href="/catalogo?cat=industrial" className="hover:text-white transition-colors">Industrial</Link></li>
              <li><Link href="/personalizado" className="hover:text-white transition-colors">Diseño personalizado</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-zinc-100">Info</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><Link href="/#como-funciona" className="hover:text-white transition-colors">Cómo funciona</Link></li>
              <li><Link href="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
              <li>
                <a
                  href="https://www.etsy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Etsy Store
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-800 pt-6 text-center text-xs text-zinc-600">
          © {new Date().getFullYear()} Custom Works — Monterrey, México. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
