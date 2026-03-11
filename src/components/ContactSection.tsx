import { useState, FormEvent } from "react";
import { CheckCircle, Phone, Mail, MapPin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { CONTACT, WHATSAPP_LINK } from "@/lib/constants";

const NEEDS_OPTIONS = [
  "Bancadas e Mesas",
  "Cocção Industrial",
  "Estantes e Prateleiras",
  "Lavagem Profissional",
  "Projeto Completo",
  "Refrigeração",
  "Outro",
];

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contato"
      className="py-20 md:py-28 bg-primary relative overflow-hidden"
    >
      <div className="container relative z-10">
        <AnimatedSection className="text-center mb-14 max-w-3xl mx-auto">
          <p className="text-accent font-bold text-sm tracking-widest uppercase mb-3">
            Contato
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">
            Sua próxima cozinha não precisa de promessas.{" "}
            <span className="text-accent">Precisa de experiência.</span>
          </h2>
          <p className="text-primary-foreground/60 text-lg">
            Fale com a Mestra Inox e leve sua operação para outro nível.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact info + WhatsApp */}
          <AnimatedSection className="lg:col-span-2 space-y-6">
            <div className="p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#25D366]/15 text-[#25D366] mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  className="w-10 h-10"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    fill="currentColor"
                    d="M16.01 6.002c-4.402 0-7.98 3.532-7.98 7.882 0 1.389.377 2.742 1.094 3.933L8 23.002l5.315-1.385a8.06 8.06 0 0 0 2.695.45h.003c4.402 0 7.987-3.532 7.987-7.882 0-2.108-.837-4.09-2.356-5.582-1.52-1.494-3.545-2.301-5.644-2.301Zm0 1.867c3.33 0 6.047 2.676 6.047 5.97 0 3.285-2.717 5.962-6.047 5.962h-.003a6.2 6.2 0 0 1-2.25-.42l-.16-.06-3.152.82.842-3.025-.103-.156a5.94 5.94 0 0 1-.98-3.12c0-3.293 2.72-5.971 6.053-5.971Zm-2.93 2.64c-.153-.34-.314-.348-.46-.354-.12-.005-.258-.005-.397-.005-.14 0-.366.052-.558.26-.192.208-.734.716-.734 1.746 0 1.03.752 2.025.857 2.164.106.138 1.445 2.29 3.57 3.118 1.764.696 2.12.557 2.503.522.383-.035 1.236-.505 1.41-.994.175-.49.175-.91.123-.994-.052-.086-.192-.138-.401-.242-.21-.104-1.236-.61-1.427-.68-.192-.07-.332-.104-.46.104-.128.208-.528.68-.647.822-.119.14-.238.157-.447.052-.21-.104-.885-.322-1.685-1.026-.623-.552-1.044-1.233-1.168-1.44-.123-.208-.013-.32.092-.423.095-.093.21-.242.314-.364.105-.121.14-.208.21-.347.07-.138.035-.26-.017-.364-.052-.104-.46-1.115-.648-1.525Z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary-foreground mb-1">
                WhatsApp
              </h3>
              <p className="text-primary-foreground/50 text-sm mb-4">
                Resposta rápida
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] text-white px-6 py-3 rounded-md font-bold hover:bg-[#128C7E] transition-colors"
                aria-label="Conversar no WhatsApp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  className="w-10 h-10"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    fill="currentColor"
                    d="M16.01 6.002c-4.402 0-7.98 3.532-7.98 7.882 0 1.389.377 2.742 1.094 3.933L8 23.002l5.315-1.385a8.06 8.06 0 0 0 2.695.45h.003c4.402 0 7.987-3.532 7.987-7.882 0-2.108-.837-4.09-2.356-5.582-1.52-1.494-3.545-2.301-5.644-2.301Zm0 1.867c3.33 0 6.047 2.676 6.047 5.97 0 3.285-2.717 5.962-6.047 5.962h-.003a6.2 6.2 0 0 1-2.25-.42l-.16-.06-3.152.82.842-3.025-.103-.156a5.94 5.94 0 0 1-.98-3.12c0-3.293 2.72-5.971 6.053-5.971Zm-2.93 2.64c-.153-.34-.314-.348-.46-.354-.12-.005-.258-.005-.397-.005-.14 0-.366.052-.558.26-.192.208-.734.716-.734 1.746 0 1.03.752 2.025.857 2.164.106.138 1.445 2.29 3.57 3.118 1.764.696 2.12.557 2.503.522.383-.035 1.236-.505 1.41-.994.175-.49.175-.91.123-.994-.052-.086-.192-.138-.401-.242-.21-.104-1.236-.61-1.427-.68-.192-.07-.332-.104-.46.104-.128.208-.528.68-.647.822-.119.14-.238.157-.447.052-.21-.104-.885-.322-1.685-1.026-.623-.552-1.044-1.233-1.168-1.44-.123-.208-.013-.32.092-.423.095-.093.21-.242.314-.364.105-.121.14-.208.21-.347.07-.138.035-.26-.017-.364-.052-.104-.46-1.115-.648-1.525Z"
                  />
                </svg>
                {CONTACT.whatsappDisplay}
              </a>
            </div>

            <div className="space-y-4 p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-accent" />
                <a
                  href={`tel:${CONTACT.phone.replace(/\D/g, "")}`}
                  className="text-primary-foreground/80 text-sm hover:text-accent transition-colors"
                >
                  {CONTACT.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-accent" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-primary-foreground/80 text-sm hover:text-accent transition-colors"
                >
                  {CONTACT.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="text-accent flex-shrink-0 mt-0.5"
                />
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    CONTACT.address,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 text-sm hover:text-accent transition-colors"
                >
                  {CONTACT.address}
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection
            delay={0.1}
            className="lg:col-span-3 p-8 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10"
          >
            {submitted ? (
              <div className="text-center py-10">
                <CheckCircle size={48} className="text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary-foreground mb-2">
                  Orçamento solicitado!
                </h3>
                <p className="text-primary-foreground/60 mb-6">
                  Entraremos em contato em breve.
                </p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-accent text-accent-foreground px-6 py-3 rounded-md font-bold hover:brightness-110 transition"
                >
                  Falar no WhatsApp agora
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Nome"
                    required
                    className="w-full px-4 py-3 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <input
                    type="text"
                    placeholder="Empresa"
                    className="w-full px-4 py-3 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Cidade / UF"
                    className="w-full px-4 py-3 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <input
                    type="tel"
                    placeholder="WhatsApp"
                    required
                    className="w-full px-4 py-3 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <select
                  required
                  defaultValue=""
                  className="w-full px-4 py-3 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="" disabled className="text-foreground">
                    O que precisa?
                  </option>
                  {NEEDS_OPTIONS.map((opt) => (
                    <option key={opt} value={opt} className="text-foreground">
                      {opt}
                    </option>
                  ))}
                </select>
                <textarea
                  placeholder="Descreva sua necessidade (opcional)"
                  rows={3}
                  className="w-full px-4 py-3 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-amber-400 text-accent-foreground px-6 py-4 rounded-md font-bold text-lg hover:brightness-110 transition"
                >
                  Solicitar orçamento
                </button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
