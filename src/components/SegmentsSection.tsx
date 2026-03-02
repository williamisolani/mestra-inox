import AnimatedSection from "./AnimatedSection";

const segments = [
  "Restaurantes",
  "Hotéis",
  "Indústrias",
  "Cozinhas de produção",
  "Redes e franquias",
  "Escolas / Hospitais",
];

const SegmentsSection = () => (
  <section id="segmentos" className="py-20 md:py-28 bg-muted">
    <div className="container">
      <AnimatedSection className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
          Feito para cozinhas que rodam{" "}
          <span className="text-primary">de verdade.</span>
        </h2>
      </AnimatedSection>

      <AnimatedSection className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
        {segments.map((seg) => (
          <span
            key={seg}
            className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm md:text-base"
          >
            {seg}
          </span>
        ))}
      </AnimatedSection>
    </div>
  </section>
);

export default SegmentsSection;
