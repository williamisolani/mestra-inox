import { Droplets, Sparkles, Shield } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const bullets = [
  { icon: Droplets, label: "Resistência à oxidação" },
  { icon: Sparkles, label: "Facilidade de higienização" },
  { icon: Shield, label: "Estabilidade estrutural" },
];

const InoxSection = () => (
  <section id="inox" className="py-20 md:py-28 section-dark relative overflow-hidden">
    {/* Geometric accents */}
    <div className="absolute top-0 right-0 w-16 h-16 bg-accent-yellow opacity-40" style={{ clipPath: "polygon(100% 0, 100% 100%, 0 0)" }} />
    <div className="absolute bottom-0 left-0 w-12 h-12 bg-accent-purple opacity-30" style={{ clipPath: "polygon(0 0, 100% 100%, 0 100%)" }} />

    <div className="container relative z-10">
      <AnimatedSection className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-center">
          Inox não é tudo <span className="text-accent-yellow">igual.</span>
        </h2>

        <div className="space-y-4 text-section-dark-foreground/80 text-lg leading-relaxed mb-10 text-center max-w-2xl mx-auto">
          <p>
            A diferença está na composição química e no processo de fabricação. Inox de baixa qualidade compromete a resistência à corrosão e reduz a vida útil.
          </p>
          <p>
            O inox utilizado pela Mestra é de alto padrão, com composição controlada e acabamento técnico superior, garantindo durabilidade mesmo em ambientes úmidos ou de uso intenso.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {bullets.map((b, i) => (
            <AnimatedSection key={b.label} delay={i * 0.1} className="flex flex-col items-center gap-3 p-6 rounded-lg bg-section-dark-foreground/5 border border-section-dark-foreground/10">
              <b.icon size={32} className="text-accent-yellow" />
              <span className="font-bold text-lg">{b.label}</span>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default InoxSection;
