"use client";
import Image from "next/image";
import Link from "next/link";
import { Download, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  name,
  slug,
  price,
  category,
  previewUrl,
  downloads = 0,
  isFeatured = false,
}: ProductCardProps) {
  return (
    <div className="group flex flex-col rounded-xl border border-zinc-800 bg-zinc-900 overflow-hidden transition-all hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/5">
      <Link href={`/producto/${slug}`} className="block overflow-hidden">
        <div className="relative h-48 w-full bg-zinc-800">
          {previewUrl ? (
            <Image
              src={previewUrl}
              alt={name}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-zinc-600">
              <svg viewBox="0 0 100 100" className="h-20 w-20 opacity-30" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="10" y="10" width="80" height="80" />
                <line x1="10" y1="50" x2="90" y2="50" />
                <line x1="50" y1="10" x2="50" y2="90" />
                <circle cx="50" cy="50" r="20" />
              </svg>
            </div>
          )}
          {isFeatured && (
            <div className="absolute top-2 left-2">
              <Badge variant="default">
                <Star className="mr-1 h-3 w-3" /> Destacado
              </Badge>
            </div>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <Badge variant="secondary" className="mb-2">{category}</Badge>
          <Link href={`/producto/${slug}`}>
            <h3 className="font-semibold text-zinc-100 line-clamp-2 hover:text-orange-400 transition-colors">
              {name}
            </h3>
          </Link>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-orange-400">
              {formatCurrency(price)}
            </span>
            <div className="flex items-center gap-1 text-xs text-zinc-500 mt-0.5">
              <Download className="h-3 w-3" />
              {downloads} descargas
            </div>
          </div>
          <Button size="sm" asChild>
            <Link href={`/producto/${slug}`}>Ver</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
