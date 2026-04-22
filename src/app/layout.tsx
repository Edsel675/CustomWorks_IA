import type { Metadata } from "next";
import { spaceGrotesk, spaceMono } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Custom Works — Archivos DXF para Corte Láser",
    template: "%s | Custom Works",
  },
  description:
    "Archivos DXF vectoriales de precisión para corte láser y plasma CNC. Diseños metálicos industriales desde Monterrey, México.",
  keywords: ["DXF", "corte láser", "CNC", "plasma", "archivos metálicos", "Monterrey"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${spaceMono.variable} dark`}
    >
      <body className="min-h-screen bg-[#08080a] text-[#e8e8f0] antialiased">
        {children}
      </body>
    </html>
  );
}
