import AnimatedSection from "./AnimatedSection";
import { UtensilsCrossed, Building2, Factory, ChefHat, Store, GraduationCap } from "lucide-react";

const segments = [
  { icon: UtensilsCrossed, label: "Restaurantes" },
  { icon: Building2, label: "Hotéis" },
  { icon: Factory, label: "Indústrias" },
  { icon: ChefHat, label: "Cozinhas de produção" },
  { icon: Store, label: "Redes e franquias" },
  { icon: GraduationCap, label: "Escolas e Hospitais" },
];

const SegmentsSection = () => (
  <section id="segmentos" className="py-20 md:py-28 bg-muted">
    <div className="container">
      <AnimatedSection className="text-center mb-14">
        <p className="text-accent font-bold text-sm tracking-widest uppercase mb-3">Segmentos Atendidos</p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
          Feito para cozinhas que rodam{" "}
          <span className="text-primary">de verdade.</span>
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {segments.map((seg, i) => (
          <AnimatedSection key={seg.label} delay={i * 0.05} className="flex items-center gap-3 p-5 rounded-xl bg-card border border-border hover:shadow-md hover:border-primary/20 transition-all">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <seg.icon size={20} className="text-primary" />
            </div>
            <span className="font-semibold text-foreground text-sm md:text-base">{seg.label}</span>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SegmentsSection;
