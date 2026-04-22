"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface ProductCardProps {
  id: string;
  name: string;
  slug: string;
  price: number;
  category: string;
  previewUrl?: string;
  downloads?: number;
  isFeatured?: boolean;
}

export function ProductCard({
  id,
  name,
  slug,
  price,
  category,
  previewUrl,
  downloads = 0,
  isFeatured = false,
}: ProductCardProps) {
  const partNum = `CW-${id.padStart(3, "0")}`;

  return (
    <Link href={`/producto/${slug}`} className="group block">
      <div className="relative border border-[#1e1e24] bg-[#0e0e11] transition-all duration-300 hover:border-orange-500/40 hover:bg-[#111115]">
        {/* número de parte */}
        <div className="absolute top-2 left-2 z-10 font-mono text-[9px] text-[#3a3a50] bg-[#08080a]/80 px-1.5 py-0.5">
          {partNum}
        </div>

        {isFeatured && (
          <div className="absolute top-2 right-2 z-10 bg-orange-500 px-2 py-0.5 font-mono text-[9px] font-bold text-black tracking-widest uppercase">
            FEATURED
          </div>
        )}

        {/* preview */}
        <div className="relative h-48 overflow-hidden bg-[#08080a] bg-grid-sm">
          {previewUrl ? (
            <Image
              src={previewUrl}
              alt={name}
              fill
              className="object-cover opacity-80 transition-all group-hover:opacity-100 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <svg viewBox="0 0 120 120" className="h-24 w-24 opacity-20" fill="none" stroke="#f97316" strokeWidth="1">
                <polygon points="60,10 110,35 110,85 60,110 10,85 10,35" />
                <circle cx="60" cy="60" r="20" />
                <circle cx="60" cy="60" r="5" fill="#f97316" opacity="0.5" />
                <line x1="10" y1="60" x2="110" y2="60" strokeDasharray="4 4" />
                <line x1="60" y1="10" x2="60" y2="110" strokeDasharray="4 4" />
              </svg>
            </div>
          )}

          {/* scan line on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <div className="h-full w-full bg-gradient-to-b from-transparent via-orange-500/5 to-transparent" />
          </div>

          {/* esquinas técnicas */}
          <div className="absolute inset-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute top-0 left-0 h-4 w-4 border-l border-t border-orange-500/60" />
            <div className="absolute top-0 right-0 h-4 w-4 border-r border-t border-orange-500/60" />
            <div className="absolute bottom-0 left-0 h-4 w-4 border-l border-b border-orange-500/60" />
            <div className="absolute bottom-0 right-0 h-4 w-4 border-r border-b border-orange-500/60" />
          </div>
        </div>

        {/* info */}
        <div className="p-4">
          <div className="flex items-start justify-between gap-2 mb-2">
            <span className="font-mono text-[9px] text-orange-500/60 uppercase tracking-widest border border-orange-500/20 px-1.5 py-0.5">
              {category}
            </span>
            <ArrowUpRight className="h-3.5 w-3.5 text-[#3a3a50] transition-colors group-hover:text-orange-500 shrink-0 mt-0.5" />
          </div>

          <h3 className="text-sm font-semibold text-[#e8e8f0] leading-snug line-clamp-2 group-hover:text-white transition-colors">
            {name}
          </h3>

          <div className="mt-3 flex items-center justify-between border-t border-[#1e1e24] pt-3">
            <div className="font-mono text-lg font-bold text-orange-400">
              {formatCurrency(price)}
            </div>
            <div className="flex items-center gap-1 font-mono text-[10px] text-[#3a3a50]">
              <Download className="h-3 w-3" />
              {downloads}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
