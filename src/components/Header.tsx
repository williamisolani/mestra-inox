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
      <div className="bg-primary text-primary-foreground/80 text-xs py-2 hidden md:fixed md:top-0 md:left-0 md:right-0 md:z-50 md:block">
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

      <header className="fixed top-0 md:top-8 left-0 right-0 z-40 bg-card/95 backdrop-blur-md shadow-sm border-b border-border">
        <div className="container flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center md:basis-1/3">
            <a href="#topo" className="flex items-center">
              <img src={logoImg} alt="Mestra Inox" className="w-1/2" />
            </a>
          </div>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center justify-end gap-8 md:basis-2/3"
            aria-label="Menu principal"
          >
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
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-1.5 rounded-md text-sm font-bold hover:bg-[#128C7E] transition-colors"
              aria-label="Solicitar orçamento no WhatsApp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                className="w-8 h-8"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  fill="currentColor"
                  d="M16.01 6.002c-4.402 0-7.98 3.532-7.98 7.882 0 1.389.377 2.742 1.094 3.933L8 23.002l5.315-1.385a8.06 8.06 0 0 0 2.695.45h.003c4.402 0 7.987-3.532 7.987-7.882 0-2.108-.837-4.09-2.356-5.582-1.52-1.494-3.545-2.301-5.644-2.301Zm0 1.867c3.33 0 6.047 2.676 6.047 5.97 0 3.285-2.717 5.962-6.047 5.962h-.003a6.2 6.2 0 0 1-2.25-.42l-.16-.06-3.152.82.842-3.025-.103-.156a5.94 5.94 0 0 1-.98-3.12c0-3.293 2.72-5.971 6.053-5.971Zm-2.93 2.64c-.153-.34-.314-.348-.46-.354-.12-.005-.258-.005-.397-.005-.14 0-.366.052-.558.26-.192.208-.734.716-.734 1.746 0 1.03.752 2.025.857 2.164.106.138 1.445 2.29 3.57 3.118 1.764.696 2.12.557 2.503.522.383-.035 1.236-.505 1.41-.994.175-.49.175-.91.123-.994-.052-.086-.192-.138-.401-.242-.21-.104-1.236-.61-1.427-.68-.192-.07-.332-.104-.46.104-.128.208-.528.68-.647.822-.119.14-.238.157-.447.052-.21-.104-.885-.322-1.685-1.026-.623-.552-1.044-1.233-1.168-1.44-.123-.208-.013-.32.092-.423.095-.093.21-.242.314-.364.105-.121.14-.208.21-.347.07-.138.035-.26-.017-.364-.052-.104-.46-1.115-.648-1.525Z"
                />
              </svg>
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
          <nav
            className="md:hidden bg-card pb-6 px-6 space-y-4 border-t border-border"
            aria-label="Menu mobile"
          >
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
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-md text-sm font-bold text-center hover:bg-[#128C7E] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                className="w-8 h-8"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  fill="currentColor"
                  d="M16.01 6.002c-4.402 0-7.98 3.532-7.98 7.882 0 1.389.377 2.742 1.094 3.933L8 23.002l5.315-1.385a8.06 8.06 0 0 0 2.695.45h.003c4.402 0 7.987-3.532 7.987-7.882 0-2.108-.837-4.09-2.356-5.582-1.52-1.494-3.545-2.301-5.644-2.301Zm0 1.867c3.33 0 6.047 2.676 6.047 5.97 0 3.285-2.717 5.962-6.047 5.962h-.003a6.2 6.2 0 0 1-2.25-.42l-.16-.06-3.152.82.842-3.025-.103-.156a5.94 5.94 0 0 1-.98-3.12c0-3.293 2.72-5.971 6.053-5.971Zm-2.93 2.64c-.153-.34-.314-.348-.46-.354-.12-.005-.258-.005-.397-.005-.14 0-.366.052-.558.26-.192.208-.734.716-.734 1.746 0 1.03.752 2.025.857 2.164.106.138 1.445 2.29 3.57 3.118 1.764.696 2.12.557 2.503.522.383-.035 1.236-.505 1.41-.994.175-.49.175-.91.123-.994-.052-.086-.192-.138-.401-.242-.21-.104-1.236-.61-1.427-.68-.192-.07-.332-.104-.46.104-.128.208-.528.68-.647.822-.119.14-.238.157-.447.052-.21-.104-.885-.322-1.685-1.026-.623-.552-1.044-1.233-1.168-1.44-.123-.208-.013-.32.092-.423.095-.093.21-.242.314-.364.105-.121.14-.208.21-.347.07-.138.035-.26-.017-.364-.052-.104-.46-1.115-.648-1.525Z"
                />
              </svg>
              Solicitar orçamento
            </a>
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;
