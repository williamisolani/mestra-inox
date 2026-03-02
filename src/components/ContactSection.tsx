import { useState, FormEvent } from "react";
import { MessageCircle, CheckCircle, Phone, Mail, MapPin } from "lucide-react";
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
    <section id="contato" className="py-20 md:py-28 bg-primary relative overflow-hidden">
      <div className="container relative z-10">
        <AnimatedSection className="text-center mb-14 max-w-3xl mx-auto">
          <p className="text-accent font-bold text-sm tracking-widest uppercase mb-3">Contato</p>
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
              <MessageCircle size={32} className="text-accent mb-3" />
              <h3 className="text-xl font-bold text-primary-foreground mb-1">WhatsApp</h3>
              <p className="text-primary-foreground/50 text-sm mb-4">Resposta rápida</p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-accent-foreground px-6 py-3 rounded-md font-bold hover:brightness-110 transition w-full text-center block"
                aria-label="Conversar no WhatsApp"
              >
                {CONTACT.whatsappDisplay}
              </a>
            </div>

            <div className="space-y-4 p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-accent" />
                <span className="text-primary-foreground/80 text-sm">{CONTACT.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-accent" />
                <span className="text-primary-foreground/80 text-sm">{CONTACT.email}</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">{CONTACT.address}</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection delay={0.1} className="lg:col-span-3 p-8 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
            {submitted ? (
              <div className="text-center py-10">
                <CheckCircle size={48} className="text-accent mx-auto mb-4" />
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
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Nome" required className="w-full px-4 py-3 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent" />
                  <input type="text" placeholder="Empresa" className="w-full px-4 py-3 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Cidade / UF" className="w-full px-4 py-3 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent" />
                  <input type="tel" placeholder="WhatsApp" required className="w-full px-4 py-3 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent" />
                </div>
                <select required defaultValue="" className="w-full px-4 py-3 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground focus:outline-none focus:ring-2 focus:ring-accent">
                  <option value="" disabled className="text-foreground">O que precisa?</option>
                  {NEEDS_OPTIONS.map((opt) => (
                    <option key={opt} value={opt} className="text-foreground">{opt}</option>
                  ))}
                </select>
                <textarea placeholder="Descreva sua necessidade (opcional)" rows={3} className="w-full px-4 py-3 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent resize-none" />
                <button type="submit" className="w-full bg-accent text-accent-foreground px-6 py-4 rounded-md font-bold text-lg hover:brightness-110 transition">
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
