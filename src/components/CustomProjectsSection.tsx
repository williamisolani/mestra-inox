import AnimatedSection from "./AnimatedSection";
import { WHATSAPP_LINK } from "@/lib/constants";

const steps = [
  { num: "01", title: "Entendimento da operação" },
  { num: "02", title: "Projeto e detalhamento" },
  { num: "03", title: "Fabricação" },
  { num: "04", title: "Entrega" },
];

const CustomProjectsSection = () => (
  <section id="sobmedida" className="py-20 md:py-28 bg-background">
    <div className="container">
      <AnimatedSection className="max-w-3xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">
          Cada operação tem uma necessidade.{" "}
          <span className="text-primary">Cada cozinha, uma solução.</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Desenvolvemos projetos sob medida para restaurantes, hotéis, indústrias e operações de todos os portes.
        </p>
      </AnimatedSection>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="grid sm:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <AnimatedSection key={step.num} delay={i * 0.1} className="relative text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground font-extrabold text-xl mb-4">
                {step.num}
              </div>
              {i < 3 && (
                <div className="hidden sm:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
              )}
              <p className="font-bold text-foreground">{step.title}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <AnimatedSection className="text-center">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-md font-bold hover:brightness-110 transition text-lg"
        >
          Falar com um especialista
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default CustomProjectsSection;
