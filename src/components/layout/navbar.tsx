"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Catálogo", href: "/catalogo" },
  { label: "Cómo funciona", href: "/#como-funciona" },
  { label: "Personalizado", href: "/personalizado" },
  { label: "Contacto", href: "/contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Zap className="h-6 w-6 text-orange-500" />
          <span className="text-lg font-bold text-white">
            Custom<span className="text-orange-500">Works</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button size="sm" asChild>
            <a
              href="https://www.etsy.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Comprar en Etsy
            </a>
          </Button>
        </div>

        <button
          className="text-zinc-400 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-zinc-800 bg-zinc-950 px-4 py-4 md:hidden">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block py-2 text-sm text-zinc-300"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Button className="mt-3 w-full" size="sm" asChild>
            <a href="https://www.etsy.com" target="_blank" rel="noopener noreferrer">
              Comprar en Etsy
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
