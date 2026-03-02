import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { WHATSAPP_LINK, CONTACT } from "@/lib/constants";
import logoImg from "@/assets/logo-mestra-inox.png";

const NAV_ITEMS = [
  { label: "A Mestra", href: "#porque" },
  { label: "Produtos", href: "#solucoes" },
  { label: "Sob Medida", href: "#sobmedida" },
  { label: "Portfólio", href: "#galeria" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground/80 text-xs py-2 hidden md:block">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Phone size={12} />
              {CONTACT.phone}
            </span>
            <span>{CONTACT.email}</span>
          </div>
          <span>Seg a Sex — 08:00 às 18:00</span>
        </div>
      </div>

      <header className="fixed top-0 md:top-8 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-sm border-b border-border">
        <div className="container flex items-center justify-between h-16 md:h-20">
          <a href="#topo" className="flex items-center">
            <img src={logoImg} alt="Mestra Inox" className="h-10 md:h-12 w-auto" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Menu principal">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground/70 hover:text-primary text-sm font-semibold transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-accent-foreground px-5 py-2.5 rounded-md text-sm font-bold hover:brightness-110 transition"
              aria-label="Solicitar orçamento no WhatsApp"
            >
              Solicitar orçamento
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav */}
        {open && (
          <nav className="md:hidden bg-card pb-6 px-6 space-y-4 border-t border-border" aria-label="Menu mobile">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-foreground/80 hover:text-primary font-semibold py-1"
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
              Solicitar orçamento
            </a>
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;
