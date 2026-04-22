import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ChatWidget } from "@/components/web/chat-widget";
import { Mail, Phone, MapPin, Share2, ExternalLink } from "lucide-react";

export const metadata = { title: "Contacto" };

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-zinc-950 py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-12 text-center">
            <h1 className="text-3xl font-bold text-white">Contacto</h1>
            <p className="mt-3 text-zinc-400">Estamos en Monterrey, México. Escríbenos cuando quieras.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { icon: Mail, label: "Email", value: "customworks@gmail.com", href: "mailto:customworks@gmail.com" },
              { icon: Phone, label: "WhatsApp", value: "+52 81 0000 0000", href: "https://wa.me/528100000000" },
              { icon: MapPin, label: "Ubicación", value: "Monterrey, Nuevo León, México", href: null },
              { icon: Share2, label: "Facebook", value: "Custom Works MX", href: "https://facebook.com" },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/10">
                  <Icon className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500">{label}</p>
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 font-medium text-zinc-100 hover:text-orange-400 transition-colors">
                      {value} <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : (
                    <p className="font-medium text-zinc-100">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
