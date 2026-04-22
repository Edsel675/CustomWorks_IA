"use client";
import Link from "next/link";
import { ArrowRight, Download, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-24 md:py-36">
      {/* fondo decorativo */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,transparent_60%,black)]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      </div>
      <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs text-orange-400">
          <Zap className="h-3 w-3" />
          Archivos DXF listos para corte láser
        </div>

        <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold leading-tight text-white md:text-6xl">
          Diseños metálicos que{" "}
          <span className="text-orange-500">impresionan</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base text-zinc-400 md:text-lg">
          Archivos DXF vectoriales de alta calidad para corte láser y plasma.
          Descarga, corta y vende. Compatible con todas las máquinas del mercado.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="/catalogo">
              Ver catálogo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/personalizado">Pedir diseño personalizado</Link>
          </Button>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-zinc-500">
          <div className="flex items-center gap-2">
            <Download className="h-4 w-4 text-orange-500" />
            Descarga inmediata
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 text-orange-500" />
            +100 diseños disponibles
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-orange-500" />
            Formatos DXF · SVG · PDF
          </div>
        </div>
      </div>
    </section>
  );
}
