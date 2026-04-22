"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Catálogo", href: "/catalogo" },
  { label: "Cómo funciona", href: "/#como-funciona" },
  { label: "Personalizado", href: "/personalizado" },
  { label: "Contacto", href: "/contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#1e1e24] bg-[#08080a]/95 backdrop-blur-sm">
      {/* barra de estado técnica */}
      <div className="border-b border-[#1e1e24] bg-[#0e0e11] px-4 py-1 hidden md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <span className="font-mono text-[10px] text-[#3a3a50] tracking-widest uppercase">
            // CUSTOM WORKS MFG · MONTERREY NL · MX
          </span>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[10px] text-[#3a3a50]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500 mr-1.5 animate-pulse" />
              SISTEMA OPERATIVO
            </span>
            <span className="font-mono text-[10px] text-[#3a3a50] tracking-widest">
              REV_2.0.1
            </span>
          </div>
        </div>
      </div>

      {/* navbar principal */}
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
        {/* logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex h-8 w-8 items-center justify-center">
            <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none">
              <polygon
                points="16,2 30,10 30,22 16,30 2,22 2,10"
                stroke="#f97316"
                strokeWidth="1.5"
                fill="none"
                className="transition-all group-hover:stroke-orange-400"
              />
              <line x1="16" y1="2" x2="16" y2="30" stroke="#f97316" strokeWidth="0.75" opacity="0.4" />
              <line x1="2" y1="10" x2="30" y2="22" stroke="#f97316" strokeWidth="0.75" opacity="0.4" />
              <line x1="2" y1="22" x2="30" y2="10" stroke="#f97316" strokeWidth="0.75" opacity="0.4" />
              <circle cx="16" cy="16" r="3" fill="#f97316" className="transition-all group-hover:r-4" />
            </svg>
          </div>
          <div>
            <div className="text-base font-bold tracking-tight text-white leading-none">
              CUSTOM<span className="text-orange-500">WORKS</span>
            </div>
            <div className="font-mono text-[9px] text-[#3a3a50] tracking-widest uppercase leading-none mt-0.5">
              DXF · LASER · CNC
            </div>
          </div>
        </Link>

        {/* links desktop */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative px-4 py-2 font-mono text-xs tracking-widest text-[#7a7a92] uppercase transition-colors hover:text-orange-400 group"
            >
              <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[#3a3a50] group-hover:text-orange-500/50 transition-colors">/</span>
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA desktop */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://www.etsy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-industrial flex items-center gap-2 bg-orange-500 px-4 py-2 font-mono text-xs font-bold tracking-widest text-black uppercase transition-all hover:bg-orange-400"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-black/50 animate-pulse" />
            TIENDA ETSY
          </a>
        </div>

        {/* mobile toggle */}
        <button
          className="text-[#7a7a92] hover:text-white md:hidden transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* mobile menu */}
      <div className={cn(
        "overflow-hidden transition-all duration-300 md:hidden border-t border-[#1e1e24]",
        open ? "max-h-80" : "max-h-0"
      )}>
        <div className="bg-[#0e0e11] px-4 py-4 space-y-1">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 py-2.5 font-mono text-xs text-[#7a7a92] uppercase tracking-widest hover:text-orange-400 transition-colors border-b border-[#1e1e24] last:border-0"
            >
              <span className="text-[#3a3a50]">//</span>
              {l.label}
            </Link>
          ))}
          <a
            href="https://www.etsy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 btn-industrial flex items-center justify-center gap-2 bg-orange-500 px-4 py-2.5 font-mono text-xs font-bold tracking-widest text-black uppercase"
          >
            TIENDA ETSY
          </a>
        </div>
      </div>
    </header>
  );
}
