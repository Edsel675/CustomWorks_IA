import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Custom Works — Archivos DXF para Corte Láser", template: "%s | Custom Works" },
  description:
    "Archivos DXF vectoriales de alta calidad para corte láser y plasma. Diseños metálicos decorativos y funcionales desde Monterrey, México.",
  keywords: ["DXF", "corte láser", "archivos CNC", "diseño metálico", "Monterrey", "Mexico"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <body className="min-h-full bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
