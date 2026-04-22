import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ChatWidget } from "@/components/web/chat-widget";
import { Mail, Phone, MapPin, Share2, ExternalLink } from "lucide-react";

export const metadata = { title: "Contacto" };

const CONTACTS = [
  { icon: Mail, label: "EMAIL", value: "customworks@gmail.com", href: "mailto:customworks@gmail.com", tag: "RESP_24H" },
  { icon: Phone, label: "WHATSAPP", value: "+52 81 0000 0000", href: "https://wa.me/528100000000", tag: "INMEDIATO" },
  { icon: MapPin, label: "UBICACIÓN", value: "Monterrey, Nuevo León, México", href: null, tag: "MX" },
  { icon: Share2, label: "FACEBOOK", value: "Custom Works MX", href: "https://facebook.com", tag: "SOCIAL" },
];

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#08080a]">
        {/* header */}
        <div className="relative border-b border-[#1e1e24] bg-[#0e0e11] py-12 overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-60" />
          <div className="relative z-10 mx-auto max-w-4xl px-4">
            <div className="font-mono text-[10px] tracking-widest text-orange-500 uppercase mb-2">// CONTACTO</div>
            <h1 className="text-4xl font-bold text-white tracking-tight">Hablemos</h1>
            <p className="mt-2 font-mono text-sm text-[#7a7a92]">
              Monterrey, NL · México · Tiempo de respuesta: menos de 24h
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-4 py-16">
          <div className="grid gap-px bg-[#1e1e24] sm:grid-cols-2">
            {CONTACTS.map(({ icon: Icon, label, value, href, tag }) => (
              <div key={label} className="group bg-[#08080a] p-6 hover:bg-[#0e0e11] transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center border border-[#1e1e24] bg-[#0e0e11] group-hover:border-orange-500/30 transition-colors">
                    <Icon className="h-4 w-4 text-orange-500" />
                  </div>
                  <span className="font-mono text-[9px] text-[#3a3a50] border border-[#1e1e24] px-1.5 py-0.5">{tag}</span>
                </div>
                <div className="font-mono text-[9px] text-[#3a3a50] tracking-widest uppercase mb-1">{label}</div>
                {href ? (
                  <a href={href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-[#e8e8f0] hover:text-orange-400 transition-colors group-hover:text-orange-400">
                    {value}
                    <ExternalLink className="h-3 w-3 opacity-50" />
                  </a>
                ) : (
                  <span className="text-sm font-semibold text-[#7a7a92]">{value}</span>
                )}
              </div>
            ))}
          </div>

          {/* bloque adicional */}
          <div className="mt-6 relative border border-[#1e1e24] bg-[#0e0e11] p-8">
            <div className="absolute top-0 left-0 w-5 h-5 border-l border-t border-orange-500/20" />
            <div className="absolute top-0 right-0 w-5 h-5 border-r border-t border-orange-500/20" />
            <div className="font-mono text-[9px] text-[#3a3a50] tracking-widest uppercase mb-4">// HORARIO DE ATENCIÓN</div>
            <div className="grid gap-2 sm:grid-cols-3">
              {[
                { day: "LUN – VIE", hours: "9:00 – 18:00" },
                { day: "SÁBADO", hours: "10:00 – 14:00" },
                { day: "DOMINGO", hours: "CERRADO" },
              ].map(({ day, hours }) => (
                <div key={day} className="border border-[#1e1e24] bg-[#08080a] px-4 py-3">
                  <div className="font-mono text-[9px] text-[#3a3a50] uppercase">{day}</div>
                  <div className="font-mono text-sm text-orange-400 font-bold mt-0.5">{hours}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
