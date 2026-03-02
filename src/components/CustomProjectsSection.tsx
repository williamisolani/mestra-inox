import AnimatedSection from "./AnimatedSection";
import { WHATSAPP_LINK } from "@/lib/constants";
import projetoImg from "@/assets/projeto-completo.jpg";

const steps = [
  { num: "01", title: "Entendimento", desc: "Análise da operação, fluxo e necessidades." },
  { num: "02", title: "Projeto", desc: "Detalhamento técnico e layout personalizado." },
  { num: "03", title: "Fabricação", desc: "Produção em fábrica própria com inox certificado." },
  { num: "04", title: "Entrega", desc: "Instalação e acompanhamento técnico." },
];

const CustomProjectsSection = () => (
  <section id="sobmedida" className="py-20 md:py-28 bg-background">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Image side */}
        <AnimatedSection className="rounded-xl overflow-hidden">
          <img
            src={projetoImg}
            alt="Projeto completo de cozinha industrial Mestra Inox"
            className="w-full h-[400px] object-cover rounded-xl"
            loading="lazy"
          />
        </AnimatedSection>

        {/* Content side */}
        <div>
          <AnimatedSection>
            <p className="text-accent font-bold text-sm tracking-widest uppercase mb-3">Projetos Sob Medida</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Cada operação tem uma necessidade.{" "}
              <span className="text-primary">Cada cozinha, uma solução.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Desenvolvemos projetos sob medida para restaurantes, hotéis, indústrias e operações de todos os portes.
            </p>
          </AnimatedSection>

          {/* Steps */}
          <div className="space-y-6 mb-8">
            {steps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.1} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary text-primary-foreground font-extrabold text-lg flex items-center justify-center">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
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
      </div>
    </div>
  </section>
);

export default CustomProjectsSection;
