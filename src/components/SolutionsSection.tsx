import AnimatedSection from "./AnimatedSection";
import { WHATSAPP_LINK } from "@/lib/constants";
import bancadaImg from "@/assets/bancada-inox.jpg";
import coccaoImg from "@/assets/coccao-industrial.jpg";
import estantesImg from "@/assets/estantes-inox.jpg";
import lavagemImg from "@/assets/lavagem-inox.jpg";
import projetoImg from "@/assets/projeto-completo.jpg";

const solutions = [
  { title: "Bancadas em aço inox", text: "Uso intenso, fácil higienização, longa vida útil.", img: bancadaImg },
  { title: "Cocção industrial", text: "Potência, segurança e robustez para quem não pode errar.", img: coccaoImg },
  { title: "Estantes e prateleiras", text: "Resistência, modularidade, higiene e custo-benefício.", img: estantesImg },
  { title: "Lavagem profissional", text: "Facilidade de limpeza, fluxo eficiente e uso intenso.", img: lavagemImg },
  { title: "Projetos completos", text: "Cada cozinha, uma solução sob medida.", img: projetoImg, featured: true },
];

const SolutionsSection = () => (
  <section id="solucoes" className="py-20 md:py-28 bg-muted">
    <div className="container">
      <AnimatedSection className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
          Nossas <span className="text-primary">soluções</span>
        </h2>
        <p className="text-muted-foreground text-lg">Linhas completas para cozinhas profissionais.</p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {solutions.map((s, i) => (
          <AnimatedSection
            key={s.title}
            delay={i * 0.08}
            className={`group rounded-lg overflow-hidden bg-card border border-border hover:shadow-xl transition-all ${s.featured ? "sm:col-span-2 lg:col-span-1 ring-2 ring-accent" : ""}`}
          >
            <div className="overflow-hidden h-48">
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{s.text}</p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground px-5 py-2 rounded-md text-sm font-semibold hover:brightness-110 transition"
              >
                Orçar
              </a>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionsSection;
