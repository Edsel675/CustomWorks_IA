"use client";
import { useState } from "react";
import { Plus, Search, Edit, Trash2, Eye, Download, ToggleLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils";

const PRODUCTS = [
  { id: "1", name: "Cuadro Árbol de la Vida", category: "Decoración", price: 149, downloads: 48, isActive: true, isFeatured: true, etsyId: "1234567890" },
  { id: "2", name: "Logo Industrial CNC", category: "Industrial", price: 99, downloads: 32, isActive: true, isFeatured: false, etsyId: "0987654321" },
  { id: "3", name: "Colgante Mandala", category: "Joyería", price: 79, downloads: 61, isActive: true, isFeatured: false, etsyId: null },
  { id: "4", name: "Soporte Lámpara Retro", category: "Muebles", price: 199, downloads: 19, isActive: false, isFeatured: false, etsyId: null },
  { id: "5", name: "Marco Azteca", category: "Decoración", price: 129, downloads: 37, isActive: true, isFeatured: true, etsyId: "1122334455" },
];

export default function InventarioPage() {
  const [search, setSearch] = useState("");

  const filtered = PRODUCTS.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Inventario</h1>
          <p className="text-sm text-zinc-400">{PRODUCTS.length} productos registrados</p>
        </div>
        <Button>
          <Plus className="h-4 w-4" /> Nuevo producto
        </Button>
      </div>

      {/* búsqueda */}
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
        <Input
          placeholder="Buscar productos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
      </div>

      {/* tabla */}
      <div className="overflow-x-auto rounded-xl border border-zinc-800">
        <table className="w-full text-sm">
          <thead className="border-b border-zinc-800 bg-zinc-900">
            <tr className="text-xs text-zinc-500">
              <th className="px-4 py-3 text-left">Producto</th>
              <th className="px-4 py-3 text-left">Categoría</th>
              <th className="px-4 py-3 text-right">Precio</th>
              <th className="px-4 py-3 text-center">Descargas</th>
              <th className="px-4 py-3 text-center">Etsy</th>
              <th className="px-4 py-3 text-center">Estado</th>
              <th className="px-4 py-3 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800 bg-zinc-950">
            {filtered.map((p) => (
              <tr key={p.id} className="text-zinc-300 hover:bg-zinc-900/50 transition-colors">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-zinc-100">{p.name}</span>
                    {p.isFeatured && <Badge variant="default" className="text-xs">Destacado</Badge>}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <Badge variant="secondary">{p.category}</Badge>
                </td>
                <td className="px-4 py-3 text-right font-medium text-orange-400">
                  {formatCurrency(p.price)}
                </td>
                <td className="px-4 py-3 text-center">
                  <div className="flex items-center justify-center gap-1 text-zinc-400">
                    <Download className="h-3 w-3" />
                    {p.downloads}
                  </div>
                </td>
                <td className="px-4 py-3 text-center">
                  {p.etsyId ? (
                    <Badge variant="success">Publicado</Badge>
                  ) : (
                    <Badge variant="secondary">Sin publicar</Badge>
                  )}
                </td>
                <td className="px-4 py-3 text-center">
                  <Badge variant={p.isActive ? "success" : "destructive"}>
                    {p.isActive ? "Activo" : "Inactivo"}
                  </Badge>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-center gap-1">
                    <button className="rounded p-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors" title="Ver">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="rounded p-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors" title="Editar">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="rounded p-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-orange-400 transition-colors" title="Toggle">
                      <ToggleLeft className="h-4 w-4" />
                    </button>
                    <button className="rounded p-1.5 text-zinc-400 hover:bg-red-500/10 hover:text-red-400 transition-colors" title="Eliminar">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
