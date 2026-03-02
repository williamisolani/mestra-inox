import AnimatedSection from "./AnimatedSection";
import { WHATSAPP_LINK } from "@/lib/constants";
import bancadaImg from "@/assets/bancada-inox.jpg";
import coccaoImg from "@/assets/coccao-industrial.jpg";
import estantesImg from "@/assets/estantes-inox.jpg";
import lavagemImg from "@/assets/lavagem-inox.jpg";
import projetoImg from "@/assets/projeto-completo.jpg";
import { ArrowRight } from "lucide-react";

const solutions = [
  { title: "Bancadas e Mesas", text: "Uso intenso, fácil higienização e longa vida útil para cozinhas profissionais.", img: bancadaImg },
  { title: "Cocção Industrial", text: "Potência, segurança e robustez para operações que exigem performance.", img: coccaoImg },
  { title: "Estantes e Prateleiras", text: "Resistência, modularidade, higiene e excelente custo-benefício.", img: estantesImg },
  { title: "Lavagem Profissional", text: "Facilidade de limpeza, fluxo eficiente e durabilidade para uso intenso.", img: lavagemImg },
  { title: "Projetos Completos", text: "Cada cozinha, uma solução sob medida. Da concepção à instalação.", img: projetoImg, featured: true },
];

const SolutionsSection = () => (
  <section id="solucoes" className="py-20 md:py-28 bg-muted">
    <div className="container">
      <AnimatedSection className="text-center mb-14">
        <p className="text-accent font-bold text-sm tracking-widest uppercase mb-3">Linha de Produtos</p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
          Equipamentos para{" "}
          <span className="text-primary">Cozinha Industrial</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Linhas completas em aço inox para cozinhas profissionais de todos os portes.
        </p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {solutions.map((s, i) => (
          <AnimatedSection
            key={s.title}
            delay={i * 0.08}
            className={`group rounded-xl overflow-hidden bg-card border border-border hover:shadow-xl transition-all ${s.featured ? "sm:col-span-2 lg:col-span-1 ring-2 ring-accent" : ""}`}
          >
            <div className="overflow-hidden h-52 relative">
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {s.featured && (
                <div className="absolute top-3 left-3 bg-accent text-accent-foreground px-3 py-1 rounded text-xs font-bold">
                  DESTAQUE
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{s.text}</p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all"
              >
                Solicitar orçamento
                <ArrowRight size={16} />
              </a>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionsSection;
