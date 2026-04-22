"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const SPECS = [
  { label: "TOLERANCIA", value: "±0.1mm" },
  { label: "FORMATO", value: "DXF/SVG" },
  { label: "COMPAT.", value: "R14–2025" },
  { label: "MATERIALES", value: "ACERO·AL·INOX" },
];

function Counter({ to, duration = 1800 }: { to: number; duration?: number }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = to / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= to) { setCount(to); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [to, duration]);
  return <>{count.toLocaleString()}</>;
}

export function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[#08080a] flex items-center">
      {/* cuadrícula técnica */}
      <div className="absolute inset-0 bg-grid opacity-100" />

      {/* viñeta radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, #08080a 100%)" }}
      />

      {/* scan line animada */}
      <div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent animate-scan pointer-events-none"
        style={{ top: "0" }}
      />

      {/* acento naranja diagonal */}
      <div className="absolute -right-32 top-0 bottom-0 w-64 opacity-5"
        style={{ background: "linear-gradient(135deg, transparent 40%, #f97316 100%)" }}
      />

      {/* marcas de esquina técnicas */}
      <div className="absolute top-8 left-8 w-8 h-8 border-l-2 border-t-2 border-orange-500/40 hidden md:block" />
      <div className="absolute top-8 right-8 w-8 h-8 border-r-2 border-t-2 border-orange-500/40 hidden md:block" />
      <div className="absolute bottom-8 left-8 w-8 h-8 border-l-2 border-b-2 border-orange-500/40 hidden md:block" />
      <div className="absolute bottom-8 right-8 w-8 h-8 border-r-2 border-b-2 border-orange-500/40 hidden md:block" />

      {/* número de parte */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 font-mono text-[10px] text-[#3a3a50] tracking-widest hidden md:block">
        PART#CW-001 · ESCALA 1:1
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 md:py-32">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          {/* columna izquierda */}
          <div>
            {/* etiqueta */}
            <div className="mb-6 inline-flex items-center gap-3 border border-orange-500/30 bg-orange-500/5 px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
              <span className="font-mono text-[10px] tracking-[0.2em] text-orange-400 uppercase">
                Archivos DXF · Precision CNC
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl">
              CORTE
              <br />
              <span className="text-orange-500 text-glow">LÁSER</span>
              <br />
              <span className="text-[#7a7a92] font-light">PROFESIONAL</span>
            </h1>

            <p className="mt-6 max-w-md text-base text-[#7a7a92] leading-relaxed font-light">
              Archivos vectoriales de ingeniería listos para producción.
              Compatibles con cualquier máquina CNC, láser o plasma del mercado.
            </p>

            {/* specs inline */}
            <div className="mt-8 grid grid-cols-2 gap-2 max-w-sm">
              {SPECS.map(({ label, value }) => (
                <div key={label} className="border border-[#1e1e24] bg-[#0e0e11] px-3 py-2">
                  <div className="font-mono text-[9px] text-[#3a3a50] tracking-widest uppercase">{label}</div>
                  <div className="font-mono text-xs text-orange-400 mt-0.5 font-bold">{value}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/catalogo"
                className="btn-industrial flex items-center gap-2 bg-orange-500 px-6 py-3 font-mono text-xs font-bold tracking-widest text-black uppercase transition-all hover:bg-orange-400 hover:gap-3"
              >
                VER CATÁLOGO
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/personalizado"
                className="flex items-center gap-2 border border-[#2a2a34] bg-transparent px-6 py-3 font-mono text-xs font-bold tracking-widest text-[#7a7a92] uppercase transition-all hover:border-orange-500/50 hover:text-orange-400"
              >
                <span className="text-[#3a3a50]">//</span>
                DISEÑO CUSTOM
              </Link>
            </div>
          </div>

          {/* columna derecha — diagrama técnico SVG */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* fondo del diagrama */}
              <div className="absolute inset-0 bg-grid-sm opacity-60 rounded" />
              <div className="absolute inset-0 rounded border border-[#1e1e24]" />

              {/* SVG técnico */}
              <svg viewBox="0 0 400 400" className="relative z-10 w-full h-full p-8" fill="none">
                {/* líneas de referencia */}
                <line x1="200" y1="0" x2="200" y2="400" stroke="#1e1e24" strokeWidth="1" strokeDasharray="4 4"/>
                <line x1="0" y1="200" x2="400" y2="200" stroke="#1e1e24" strokeWidth="1" strokeDasharray="4 4"/>

                {/* círculos de referencia */}
                <circle cx="200" cy="200" r="160" stroke="#2a2a34" strokeWidth="0.75" />
                <circle cx="200" cy="200" r="120" stroke="#2a2a34" strokeWidth="0.75" />
                <circle cx="200" cy="200" r="80" stroke="#1e1e24" strokeWidth="0.75" />

                {/* pieza principal (hexágono) */}
                <polygon
                  points="200,60 320,130 320,270 200,340 80,270 80,130"
                  stroke="#f97316"
                  strokeWidth="2"
                  fill="rgba(249,115,22,0.04)"
                  className="animate-laser"
                />

                {/* detalles interiores */}
                <polygon
                  points="200,110 280,155 280,245 200,290 120,245 120,155"
                  stroke="#f97316"
                  strokeWidth="1"
                  fill="none"
                  opacity="0.4"
                />
                <circle cx="200" cy="200" r="30" stroke="#f97316" strokeWidth="1.5" fill="rgba(249,115,22,0.08)" />
                <circle cx="200" cy="200" r="6" fill="#f97316" />

                {/* agujeros de montaje */}
                {[[140,140],[260,140],[260,260],[140,260]].map(([cx,cy], i) => (
                  <g key={i}>
                    <circle cx={cx} cy={cy} r="10" stroke="#f97316" strokeWidth="1" fill="none" opacity="0.5" />
                    <circle cx={cx} cy={cy} r="3" fill="#f97316" opacity="0.3" />
                    <line x1={cx-16} y1={cy} x2={cx+16} y2={cy} stroke="#f97316" strokeWidth="0.5" opacity="0.3" />
                    <line x1={cx} y1={cy-16} x2={cx} y2={cy+16} stroke="#f97316" strokeWidth="0.5" opacity="0.3" />
                  </g>
                ))}

                {/* cotas */}
                <line x1="80" y1="360" x2="320" y2="360" stroke="#3a3a50" strokeWidth="0.75" />
                <line x1="80" y1="355" x2="80" y2="365" stroke="#3a3a50" strokeWidth="0.75" />
                <line x1="320" y1="355" x2="320" y2="365" stroke="#3a3a50" strokeWidth="0.75" />
                <text x="200" y="375" textAnchor="middle" fill="#3a3a50" fontSize="9" fontFamily="monospace">240.00mm</text>

                <line x1="340" y1="60" x2="340" y2="340" stroke="#3a3a50" strokeWidth="0.75" />
                <line x1="335" y1="60" x2="345" y2="60" stroke="#3a3a50" strokeWidth="0.75" />
                <line x1="335" y1="340" x2="345" y2="340" stroke="#3a3a50" strokeWidth="0.75" />
                <text x="360" y="204" textAnchor="middle" fill="#3a3a50" fontSize="9" fontFamily="monospace" transform="rotate(90, 360, 200)">280.00mm</text>

                {/* etiquetas */}
                <text x="10" y="16" fill="#3a3a50" fontSize="8" fontFamily="monospace">DWG: CW-HEX-001</text>
                <text x="10" y="28" fill="#3a3a50" fontSize="8" fontFamily="monospace">MAT: ACERO 1.5mm</text>
                <text x="310" y="16" fill="#f97316" fontSize="8" fontFamily="monospace" textAnchor="end">CUT PATH</text>
              </svg>

              {/* corner labels */}
              <div className="absolute top-2 right-2 font-mono text-[9px] text-[#3a3a50]">A3 · 1:5</div>
              <div className="absolute bottom-2 left-2 font-mono text-[9px] text-orange-500/50 animate-blink">▶ LASER ON</div>
            </div>
          </div>
        </div>

        {/* stats en la parte inferior */}
        <div className="mt-20 grid grid-cols-2 gap-px border border-[#1e1e24] bg-[#1e1e24] md:grid-cols-4">
          {[
            { n: 120, suffix: "+", label: "Diseños disponibles" },
            { n: 850, suffix: "+", label: "Archivos entregados" },
            { n: 100, suffix: "%", label: "Listos para producción" },
            { n: 5, suffix: " formatos", label: "Por archivo" },
          ].map(({ n, suffix, label }) => (
            <div key={label} className="bg-[#08080a] px-6 py-5 group hover:bg-[#0e0e11] transition-colors">
              <div className="font-mono text-2xl font-bold text-white">
                <Counter to={n} />{suffix}
              </div>
              <div className="mt-1 font-mono text-[10px] text-[#3a3a50] uppercase tracking-widest">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
