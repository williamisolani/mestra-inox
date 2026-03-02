import { useState } from "react";
import { Menu, X } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

const NAV_ITEMS = [
  { label: "Por que Mestra", href: "#porque" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Sob Medida", href: "#sobmedida" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/10">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#topo" className="text-primary-foreground font-extrabold text-xl md:text-2xl tracking-tight">
          MESTRA<span className="text-accent-yellow">INOX</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Menu principal">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-primary-foreground/80 hover:text-primary-foreground text-sm font-semibold transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-accent-foreground px-5 py-2.5 rounded-md text-sm font-bold hover:brightness-110 transition"
            aria-label="Pedir orçamento no WhatsApp"
          >
            Pedir orçamento
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden bg-primary pb-6 px-6 space-y-4" aria-label="Menu mobile">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block text-primary-foreground/80 hover:text-primary-foreground font-semibold"
            >
              {item.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="block bg-accent text-accent-foreground px-5 py-2.5 rounded-md text-sm font-bold text-center"
          >
            Pedir orçamento
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
