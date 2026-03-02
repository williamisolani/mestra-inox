import { Droplets, Sparkles, Shield } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const bullets = [
  { icon: Droplets, label: "Resistência à oxidação", desc: "Proteção contra corrosão em ambientes úmidos." },
  { icon: Sparkles, label: "Facilidade de higienização", desc: "Superfície lisa, fácil de limpar e sanitizar." },
  { icon: Shield, label: "Estabilidade estrutural", desc: "Suporta uso intenso sem deformação." },
];

const InoxSection = () => (
  <section id="inox" className="py-20 md:py-28 section-dark relative overflow-hidden">
    {/* Accent line */}
    <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />

    <div className="container relative z-10">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <p className="text-accent font-bold text-sm tracking-widest uppercase mb-3">Qualidade do Material</p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Inox não é tudo <span className="text-accent">igual.</span>
          </h2>
          <div className="space-y-4 text-section-dark-foreground/70 text-lg leading-relaxed max-w-2xl mx-auto">
            <p>
              A diferença está na composição química e no processo de fabricação. Inox de baixa qualidade compromete a resistência à corrosão e reduz a vida útil do equipamento.
            </p>
            <p>
              O inox utilizado pela Mestra é de alto padrão, com composição controlada e acabamento técnico superior, garantindo durabilidade mesmo em ambientes úmidos ou de uso intenso.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-3 gap-6">
          {bullets.map((b, i) => (
            <AnimatedSection key={b.label} delay={i * 0.1} className="text-center p-6 rounded-xl bg-section-dark-foreground/5 border border-section-dark-foreground/10 hover:border-accent/30 transition-colors">
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <b.icon size={28} className="text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2">{b.label}</h3>
              <p className="text-section-dark-foreground/60 text-sm">{b.desc}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default InoxSection;
