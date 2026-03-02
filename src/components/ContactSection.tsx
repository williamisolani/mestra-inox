import { useState, FormEvent } from "react";
import { MessageCircle, CheckCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { CONTACT, WHATSAPP_LINK } from "@/lib/constants";

const NEEDS_OPTIONS = [
  "Bancadas",
  "Cocção",
  "Estantes",
  "Lavagem",
  "Projeto completo",
];

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-primary relative overflow-hidden">
      {/* Geometric accents */}
      <div className="absolute top-0 left-0 w-20 h-20 bg-accent-yellow opacity-30" style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }} />
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-accent-red opacity-25" style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }} />

      <div className="container relative z-10">
        <AnimatedSection className="text-center mb-14 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">
            Sua próxima cozinha não precisa de promessas.{" "}
            <span className="text-accent-yellow">Precisa de experiência.</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Fale com a Mestra Inox e leve sua operação para outro nível.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* WhatsApp */}
          <AnimatedSection className="flex flex-col items-center justify-center text-center p-10 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10">
            <MessageCircle size={48} className="text-accent-yellow mb-4" />
            <h3 className="text-2xl font-bold text-primary-foreground mb-2">WhatsApp</h3>
            <p className="text-primary-foreground/60 mb-6">Resposta rápida</p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-accent-foreground px-8 py-4 rounded-md font-bold text-lg hover:brightness-110 transition w-full max-w-xs text-center block"
              aria-label="Conversar no WhatsApp"
            >
              {CONTACT.whatsappDisplay}
            </a>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection delay={0.1} className="p-8 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10">
            {submitted ? (
              <div className="text-center py-10">
                <CheckCircle size={48} className="text-accent-yellow mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary-foreground mb-2">Orçamento solicitado!</h3>
                <p className="text-primary-foreground/60 mb-6">Entraremos em contato em breve.</p>
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
                <input
                  type="text"
                  placeholder="Cidade / UF"
                  className="w-full px-4 py-3 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <select
                  required
                  defaultValue=""
                  className="w-full px-4 py-3 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="" disabled className="text-foreground">O que precisa?</option>
                  {NEEDS_OPTIONS.map((opt) => (
                    <option key={opt} value={opt} className="text-foreground">{opt}</option>
                  ))}
                </select>
                <input
                  type="tel"
                  placeholder="WhatsApp"
                  required
                  className="w-full px-4 py-3 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <textarea
                  placeholder="Mensagem (opcional)"
                  rows={3}
                  className="w-full px-4 py-3 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground px-6 py-4 rounded-md font-bold text-lg hover:brightness-110 transition"
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
