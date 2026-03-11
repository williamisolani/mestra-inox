import AnimatedSection from "./AnimatedSection";
import { WHATSAPP_LINK } from "@/lib/constants";
import projetoImg from "@/assets/projeto-completo.jpg";

const steps = [
  {
    num: "01",
    title: "Entendimento",
    desc: "Análise da operação, fluxo e necessidades.",
  },
  {
    num: "02",
    title: "Projeto",
    desc: "Detalhamento técnico e layout personalizado.",
  },
  {
    num: "03",
    title: "Fabricação",
    desc: "Produção em fábrica própria com inox certificado.",
  },
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
            <p className="text-accent font-bold text-sm tracking-widest uppercase mb-3">
              Projetos Sob Medida
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Cada operação tem uma necessidade.{" "}
              <span className="text-primary">Cada cozinha, uma solução.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Desenvolvemos projetos sob medida para restaurantes, hotéis,
              indústrias e operações de todos os portes.
            </p>
          </AnimatedSection>

          {/* Steps */}
          <div className="space-y-6 mb-8">
            {steps.map((step, i) => (
              <AnimatedSection
                key={step.num}
                delay={i * 0.1}
                className="flex gap-4 items-start"
              >
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
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-md font-bold hover:bg-[#128C7E] transition-colors text-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                className="w-8 h-8"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  fill="currentColor"
                  d="M16.01 6.002c-4.402 0-7.98 3.532-7.98 7.882 0 1.389.377 2.742 1.094 3.933L8 23.002l5.315-1.385a8.06 8.06 0 0 0 2.695.45h.003c4.402 0 7.987-3.532 7.987-7.882 0-2.108-.837-4.09-2.356-5.582-1.52-1.494-3.545-2.301-5.644-2.301Zm0 1.867c3.33 0 6.047 2.676 6.047 5.97 0 3.285-2.717 5.962-6.047 5.962h-.003a6.2 6.2 0 0 1-2.25-.42l-.16-.06-3.152.82.842-3.025-.103-.156a5.94 5.94 0 0 1-.98-3.12c0-3.293 2.72-5.971 6.053-5.971Zm-2.93 2.64c-.153-.34-.314-.348-.46-.354-.12-.005-.258-.005-.397-.005-.14 0-.366.052-.558.26-.192.208-.734.716-.734 1.746 0 1.03.752 2.025.857 2.164.106.138 1.445 2.29 3.57 3.118 1.764.696 2.12.557 2.503.522.383-.035 1.236-.505 1.41-.994.175-.49.175-.91.123-.994-.052-.086-.192-.138-.401-.242-.21-.104-1.236-.61-1.427-.68-.192-.07-.332-.104-.46.104-.128.208-.528.68-.647.822-.119.14-.238.157-.447.052-.21-.104-.885-.322-1.685-1.026-.623-.552-1.044-1.233-1.168-1.44-.123-.208-.013-.32.092-.423.095-.093.21-.242.314-.364.105-.121.14-.208.21-.347.07-.138.035-.26-.017-.364-.052-.104-.46-1.115-.648-1.525Z"
                />
              </svg>
              Falar com um especialista
            </a>
          </AnimatedSection>
        </div>
      </div>
    </div>
  </section>
);

export default CustomProjectsSection;
