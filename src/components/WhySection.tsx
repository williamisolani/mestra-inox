import { Factory, Ruler, ShieldCheck } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const bullets = [
  { icon: Factory, label: "Cozinhas industriais" },
  { icon: Ruler, label: "Projetos sob medida" },
  { icon: ShieldCheck, label: "Padrão profissional em inox" },
];

const WhySection = () => (
  <section id="porque" className="py-20 md:py-28 bg-background">
    <div className="container">
      <AnimatedSection className="max-w-3xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">
          Quando a experiência vem{" "}
          <span className="text-primary">de fábrica.</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Há 30 anos, a Mestra Inox faz parte da história de quem leva a cozinha profissional a sério.
          Entregamos soluções, confiança e resultado para operações que exigem performance todos os dias.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {bullets.map((item, i) => (
          <AnimatedSection key={item.label} delay={i * 0.1} className="relative text-center p-8 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow group">
            {/* Small geometric accent */}
            <div className="absolute top-0 right-0 w-8 h-8 opacity-60" style={{
              clipPath: "polygon(100% 0, 100% 100%, 0 0)",
              backgroundColor: i === 0 ? "hsl(var(--accent))" : i === 1 ? "hsl(var(--accent-red))" : "hsl(var(--accent-purple))"
            }} />
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <item.icon size={28} />
            </div>
            <h3 className="font-bold text-foreground text-lg">{item.label}</h3>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default WhySection;
