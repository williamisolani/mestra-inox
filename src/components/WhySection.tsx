import { Factory, Ruler, ShieldCheck, Wrench, TrendingUp, Users } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const stats = [
  { value: "30+", label: "Anos de mercado" },
  { value: "5.000+", label: "Projetos entregues" },
  { value: "100%", label: "Fabricação própria" },
];

const differentials = [
  { icon: Factory, title: "Fábrica própria", text: "Produção 100% verticalizada, do projeto à entrega." },
  { icon: Ruler, title: "Projetos sob medida", text: "Cada cozinha é desenhada para sua operação." },
  { icon: ShieldCheck, title: "Inox certificado", text: "Matéria-prima com composição controlada e rastreada." },
  { icon: Wrench, title: "Suporte técnico", text: "Assistência pós-venda e orientação de instalação." },
  { icon: TrendingUp, title: "Alta performance", text: "Equipamentos para operações de grande demanda." },
  { icon: Users, title: "Atendimento consultivo", text: "Equipe especializada do orçamento à entrega." },
];

const WhySection = () => (
  <section id="porque" className="py-20 md:py-28 bg-background">
    <div className="container">
      <AnimatedSection className="text-center mb-16">
        <p className="text-accent font-bold text-sm tracking-widest uppercase mb-3">Por que a Mestra Inox</p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
          Quando a experiência vem{" "}
          <span className="text-primary">de fábrica.</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Há 30 anos, a Mestra Inox entrega soluções para quem leva a cozinha profissional a sério. Confiança, qualidade e resultado em cada projeto.
        </p>
      </AnimatedSection>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
        {stats.map((s, i) => (
          <AnimatedSection key={s.label} delay={i * 0.1} className="text-center">
            <div className="text-3xl md:text-5xl font-extrabold text-primary mb-1">{s.value}</div>
            <p className="text-muted-foreground text-sm font-medium">{s.label}</p>
          </AnimatedSection>
        ))}
      </div>

      {/* Differentials grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {differentials.map((item, i) => (
          <AnimatedSection
            key={item.title}
            delay={i * 0.05}
            className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <item.icon size={24} />
            </div>
            <h3 className="font-bold text-foreground text-lg mb-1">{item.title}</h3>
            <p className="text-muted-foreground text-sm">{item.text}</p>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default WhySection;
