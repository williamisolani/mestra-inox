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
        <p className="text-accent font-bold text-sm tracking-widest uppercase mb-3">
          Nossos Projetos
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
          Portfólio
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-6xl mx-auto mb-10">
        {images.map((img, i) => (
          <AnimatedSection
            key={i}
            delay={i * 0.05}
            className="overflow-hidden rounded-xl aspect-square group"
          >
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
          Quero um orçamento
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default GallerySection;
