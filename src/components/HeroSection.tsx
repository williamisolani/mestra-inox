import AnimatedSection from "./AnimatedSection";
import { WHATSAPP_LINK } from "@/lib/constants";
import heroImg from "@/assets/hero-kitchen.jpg";
import { Award, ShieldCheck, Factory } from "lucide-react";

const HeroSection = () => (
  <section id="topo" className="relative min-h-screen flex items-center overflow-hidden">
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

    <div className="container relative z-10 pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <AnimatedSection className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 rounded-full px-4 py-1.5 mb-6">
            <Award size={16} className="text-accent" />
            <span className="text-accent font-bold text-sm">30 ANOS</span>
            <span className="text-primary-foreground/70 text-sm">de experiência</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-[1.1] mb-6">
            Cozinhas Industriais e{" "}
            <span className="text-accent">Profissionais</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mb-3">
            Equipamentos em aço inox com padrão profissional, precisão técnica e durabilidade comprovada.
          </p>
          <p className="text-primary-foreground/50 font-semibold italic mb-8">
            "Quando a experiência vem de fábrica."
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-accent-foreground px-8 py-4 rounded-md font-bold text-center hover:brightness-110 transition text-lg"
              aria-label="Fale com um consultor no WhatsApp"
            >
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
            { icon: Factory, title: "Fabricação Própria", desc: "Direto da fábrica para sua operação" },
            { icon: ShieldCheck, title: "Inox de Alto Padrão", desc: "Composição controlada e certificada" },
            { icon: Award, title: "30 Anos no Mercado", desc: "Experiência comprovada em projetos" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 justify-center py-2">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon size={20} className="text-primary" />
              </div>
              <div>
                <span className="font-bold text-foreground text-sm">{item.title}</span>
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
