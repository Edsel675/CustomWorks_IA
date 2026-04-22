import Link from "next/link";
import { Share2, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#1e1e24] bg-[#0e0e11]">
      {/* barra superior técnica */}
      <div className="border-b border-[#1e1e24] bg-[#08080a] px-4 py-2">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <span className="font-mono text-[10px] text-[#3a3a50] tracking-widest uppercase">
            // CUSTOM WORKS · NL · MÉXICO
          </span>
          <span className="font-mono text-[10px] text-[#3a3a50] tracking-widest uppercase">
            © {new Date().getFullYear()} · ALL RIGHTS RESERVED
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          {/* brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none">
                <polygon points="16,2 30,10 30,22 16,30 2,22 2,10" stroke="#f97316" strokeWidth="1.5" fill="none" />
                <circle cx="16" cy="16" r="5" fill="#f97316" opacity="0.6" />
                <circle cx="16" cy="16" r="2" fill="#f97316" />
              </svg>
              <div>
                <div className="font-bold tracking-tight text-white">
                  CUSTOM<span className="text-orange-500">WORKS</span>
                </div>
                <div className="font-mono text-[9px] text-[#3a3a50] tracking-widest uppercase">
                  DXF · LASER · CNC
                </div>
              </div>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-[#7a7a92] font-light leading-relaxed">
              Archivos vectoriales de ingeniería para corte láser y plasma.
              Precisión industrial, precio accesible.
            </p>
            <div className="mt-5 flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center border border-[#1e1e24] text-[#3a3a50] hover:border-orange-500/40 hover:text-orange-400 transition-all">
                <Share2 className="h-3.5 w-3.5" />
              </a>
              <a href="mailto:customworks@gmail.com"
                className="flex h-8 w-8 items-center justify-center border border-[#1e1e24] text-[#3a3a50] hover:border-orange-500/40 hover:text-orange-400 transition-all">
                <Mail className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* nav */}
          <div>
            <div className="font-mono text-[9px] text-[#3a3a50] tracking-widest uppercase mb-4">
              // TIENDA
            </div>
            <ul className="space-y-2.5">
              {[
                { label: "Catálogo", href: "/catalogo" },
                { label: "Decoración", href: "/catalogo?cat=decoracion" },
                { label: "Industrial", href: "/catalogo?cat=industrial" },
                { label: "Personalizado", href: "/personalizado" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-mono text-xs text-[#7a7a92] hover:text-orange-400 transition-colors uppercase tracking-wide flex items-center gap-2">
                    <span className="text-[#3a3a50]">›</span> {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-mono text-[9px] text-[#3a3a50] tracking-widest uppercase mb-4">
              // INFO
            </div>
            <ul className="space-y-2.5">
              {[
                { label: "Cómo funciona", href: "/#como-funciona" },
                { label: "Contacto", href: "/contacto" },
                { label: "Etsy Store", href: "https://etsy.com", ext: true },
                { label: "Facebook", href: "https://facebook.com", ext: true },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.ext ? "_blank" : undefined}
                    rel={l.ext ? "noopener noreferrer" : undefined}
                    className="font-mono text-xs text-[#7a7a92] hover:text-orange-400 transition-colors uppercase tracking-wide flex items-center gap-2"
                  >
                    <span className="text-[#3a3a50]">›</span> {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* barra inferior */}
      <div className="border-t border-[#1e1e24] px-4 py-3">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <span className="font-mono text-[10px] text-[#3a3a50]">
            MADE IN MONTERREY, NL. FILE_FORMAT: DXF·SVG·PDF·AI
          </span>
          <span className="font-mono text-[10px] text-[#3a3a50]">
            SYS_VER: 2.0.1_STABLE
          </span>
        </div>
      </div>
    </footer>
  );
}
