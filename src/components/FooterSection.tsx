import { CONTACT } from "@/lib/constants";

const NAV_ITEMS = [
  { label: "Por que Mestra", href: "#porque" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Sob Medida", href: "#sobmedida" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contato", href: "#contato" },
];

const FooterSection = () => (
  <footer className="bg-foreground text-background/70 py-14">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-10 mb-10">
        <div>
          <a href="#topo" className="text-background font-extrabold text-xl mb-3 block">
            MESTRA<span className="text-accent-yellow">INOX</span>
          </a>
          <p className="text-sm leading-relaxed">
            Mestra Inox. Quando a experiência vem de fábrica.
          </p>
        </div>

        <nav className="space-y-2" aria-label="Links do rodapé">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="block text-sm hover:text-background transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="space-y-2 text-sm">
          <p>{CONTACT.address}</p>
          <p>{CONTACT.email}</p>
          <p>{CONTACT.phone}</p>
          <div className="flex gap-4 mt-4">
            <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors" aria-label="Instagram">Instagram</a>
            <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors" aria-label="Facebook">Facebook</a>
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors" aria-label="LinkedIn">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10 pt-6 text-center text-xs text-background/40">
        © {new Date().getFullYear()} Mestra Inox. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default FooterSection;
