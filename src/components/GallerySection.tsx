import AnimatedSection from "./AnimatedSection";
import { WHATSAPP_LINK } from "@/lib/constants";
import heroImg from "@/assets/hero-kitchen.jpg";
import bancadaImg from "@/assets/bancada-inox.jpg";
import coccaoImg from "@/assets/coccao-industrial.jpg";
import estantesImg from "@/assets/estantes-inox.jpg";
import lavagemImg from "@/assets/lavagem-inox.jpg";
import projetoImg from "@/assets/projeto-completo.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";

const images = [
  { src: heroImg, alt: "Cozinha industrial completa em aço inox" },
  { src: bancadaImg, alt: "Bancada em aço inox para cozinha profissional" },
  { src: coccaoImg, alt: "Equipamento de cocção industrial" },
  { src: gallery1, alt: "Projeto de cozinha industrial" },
  { src: estantesImg, alt: "Estantes modulares em inox" },
  { src: lavagemImg, alt: "Estação de lavagem profissional" },
  { src: projetoImg, alt: "Projeto completo de cozinha" },
  { src: gallery2, alt: "Cozinha industrial de grande porte" },
];

const GallerySection = () => (
  <section id="galeria" className="py-20 md:py-28 bg-background">
    <div className="container">
      <AnimatedSection className="text-center mb-12">
        <p className="text-accent font-bold text-sm tracking-widest uppercase mb-3">Nossos Projetos</p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
          Portfólio
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-6xl mx-auto mb-10">
        {images.map((img, i) => (
          <AnimatedSection key={i} delay={i * 0.05} className="overflow-hidden rounded-xl aspect-square group">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="text-center">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-md font-bold hover:brightness-110 transition text-lg"
        >
          Quero um orçamento
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default GallerySection;
