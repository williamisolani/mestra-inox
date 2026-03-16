import AnimatedSection from "./AnimatedSection";
import { WHATSAPP_LINK } from "@/lib/constants";
import heroImg from "@/assets/hero-kitchen.jpg";
import { Award, ShieldCheck, Factory } from "lucide-react";

const HeroSection = () => (
  <section
    id="topo"
    className="relative min-h-screen flex items-center overflow-hidden"
  >
    {/* Background image */}
    <div className="absolute inset-0">
      <img
        src={heroImg}
        alt="Cozinha industrial em aço inox fabricada pela Mestra Inox"
        className="w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/50" />
    </div>

    {/* Accent stripe */}
    <div className="absolute top-0 left-0 w-2 h-full bg-accent hidden lg:block" />

    <div className="container relative z-10 pt-28 pb-56 sm:pb-32 md:pt-36 md:pb-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <AnimatedSection className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 rounded-full px-4 py-1.5 mb-6">
            <Award size={16} className="text-accent" />
            <span className="text-accent font-bold text-sm">30 ANOS</span>
            <span className="text-primary-foreground/70 text-sm">
              de experiência
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-[1.1] mb-6">
            Cozinhas industriais e{" "}
            <span className="text-accent">profissionais</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mb-3">
            Equipamentos em aço inox com padrão profissional, precisão técnica e
            durabilidade comprovada.
          </p>
          <p className="text-primary-foreground/50 font-semibold italic mb-8">
            "Quando a experiência vem de fábrica."
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-accent-foreground px-8 py-4 rounded-md font-bold text-center hover:brightness-110 text-lg text-white hover:bg-[#128C7E] transition-colors inline-flex"
              aria-label="Fale com um consultor no WhatsApp"
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
              Fale com um Consultor
            </a>
            <a
              href="#solucoes"
              className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-md font-bold text-center hover:bg-primary-foreground/10 transition text-lg"
            >
              Linha de Produtos
            </a>
          </div>
        </AnimatedSection>
      </div>
    </div>

    {/* Benefits strip */}
    <div className="absolute bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t border-border">
      <div className="container py-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              icon: Factory,
              title: "Fabricação própria",
              desc: "Direto da fábrica para sua operação",
            },
            {
              icon: ShieldCheck,
              title: "Inox de alto padrão",
              desc: "Composição controlada e certificada",
            },
            {
              icon: Award,
              title: "30 anos no mercado",
              desc: "Experiência comprovada em projetos",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 justify-center py-2"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon size={20} className="text-primary" />
              </div>
              <div>
                <span className="font-bold text-foreground text-sm">
                  {item.title}
                </span>
                <p className="text-muted-foreground text-xs">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
