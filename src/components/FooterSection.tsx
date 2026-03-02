import { CONTACT } from "@/lib/constants";
import logoImg from "@/assets/logo-mestra-inox.png";

const NAV_ITEMS = [
  { label: "A Mestra", href: "#porque" },
  { label: "Produtos", href: "#solucoes" },
  { label: "Sob Medida", href: "#sobmedida" },
  { label: "Portfólio", href: "#galeria" },
  { label: "Contato", href: "#contato" },
];

const FooterSection = () => (
  <footer className="bg-primary text-primary-foreground/60 py-14">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-10 mb-10">
        <div>
          <a href="#topo" className="block mb-4">
            <img src={logoImg} alt="Mestra Inox" className="h-10 brightness-0 invert opacity-90" />
          </a>
          <p className="text-sm leading-relaxed">
            Mestra Inox — Quando a experiência vem de fábrica. Há 30 anos produzindo equipamentos em aço inox para cozinhas profissionais.
          </p>
        </div>

        <nav className="space-y-2" aria-label="Links do rodapé">
          <h4 className="text-primary-foreground font-bold text-sm mb-3">Navegação</h4>
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="block text-sm hover:text-primary-foreground transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="space-y-2 text-sm">
          <h4 className="text-primary-foreground font-bold text-sm mb-3">Contato</h4>
          <p>{CONTACT.address}</p>
          <p>{CONTACT.email}</p>
          <p>{CONTACT.phone}</p>
          <div className="flex gap-4 mt-4">
            <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors" aria-label="Instagram">Instagram</a>
            <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors" aria-label="Facebook">Facebook</a>
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors" aria-label="LinkedIn">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/30">
        © {new Date().getFullYear()} Mestra Inox. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default FooterSection;
