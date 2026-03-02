import AnimatedSection from "./AnimatedSection";
import { WHATSAPP_LINK } from "@/lib/constants";
import heroImg from "@/assets/hero-kitchen.jpg";

const HeroSection = () => (
  <section id="topo" className="relative min-h-screen flex items-center bg-primary overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img
        src={heroImg}
        alt="Cozinha industrial em aço inox fabricada pela Mestra Inox"
        className="w-full h-full object-cover opacity-25"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />
    </div>

    {/* Geometric accents */}
    <div className="absolute top-0 left-0 w-24 h-24 bg-accent-yellow clip-path-triangle opacity-50" style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }} />
    <div className="absolute bottom-0 right-0 w-20 h-20 bg-accent-red opacity-40" style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }} />
    <div className="absolute top-1/4 right-10 w-12 h-12 bg-accent-purple rounded-full opacity-30 hidden lg:block" />

    <div className="container relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
      <AnimatedSection className="max-w-3xl">
        {/* Badge 30 anos */}
        <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 rounded-full px-4 py-1.5 mb-6">
          <span className="text-accent font-bold text-sm">30 ANOS</span>
          <span className="text-primary-foreground/70 text-sm">de experiência aplicados em cada projeto</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-[1.1] mb-6">
          Sua próxima cozinha será{" "}
          <span className="text-accent-yellow">Mestra.</span>
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mb-3">
          Cozinhas industriais em aço inox com padrão profissional, precisão técnica e durabilidade real.
        </p>
        <p className="text-primary-foreground/60 font-semibold italic mb-8">
          "Quando a experiência vem de fábrica."
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-accent-foreground px-8 py-4 rounded-md font-bold text-center hover:brightness-110 transition text-lg"
            aria-label="Pedir orçamento no WhatsApp"
          >
            Pedir orçamento no WhatsApp
          </a>
          <a
            href="#solucoes"
            className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-md font-bold text-center hover:bg-primary-foreground/10 transition text-lg"
          >
            Ver soluções
          </a>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default HeroSection;
