import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { personalInfo } from "@/data/portfolio";
import { Github, Linkedin, Mail, ArrowUpRight, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { motion } from "framer-motion";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.from("contact_messages").insert({
        name: form.name,
        email: form.email,
        message: form.message,
      });
      if (error) throw error;

      await supabase.functions.invoke("send-contact-email", {
        body: { name: form.name, email: form.email, message: form.message },
      });

      toast({ title: "¡Mensaje enviado!", description: "Te responderé pronto." });
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast({
        title: "Error",
        description: "No se pudo enviar. Intenta de nuevo.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const socials = [
    { icon: Github, label: "GitHub", href: personalInfo.github },
    { icon: Linkedin, label: "LinkedIn", href: personalInfo.linkedin },
    { icon: Mail, label: personalInfo.email, href: `mailto:${personalInfo.email}` },
  ];

  return (
    <AnimatedSection id="contacto" className="py-28 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <div className="mb-16 flex items-center gap-4">
          <span className="section-label">Contacto</span>
          <div className="h-px flex-1 bg-border" />
          <span className="tag-number text-muted-foreground/50">05</span>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left: text */}
          <div>
            <h2 className="mb-4 text-4xl font-bold leading-tight text-foreground sm:text-5xl">
              Trabajemos{" "}
              <span className="text-gradient">juntos</span>
            </h2>
            <p className="mb-8 text-base leading-relaxed text-muted-foreground">
              Estoy disponible para proyectos freelance, colaboraciones y oportunidades de
              trabajo. Si tienes una idea o un proyecto en mente, me encantaría escucharte.
            </p>

            <div className="space-y-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card transition-colors group-hover:border-primary/40 group-hover:bg-primary/5">
                    <Icon size={16} />
                  </div>
                  <span className="hover-underline">{label}</span>
                  <ArrowUpRight
                    size={14}
                    className="ml-auto opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                { id: "name", label: "Nombre", placeholder: "Tu nombre", type: "text" },
                { id: "email", label: "Email", placeholder: "tu@email.com", type: "email" },
              ].map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={form[field.id as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                    required
                    className="w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/10"
                  />
                </div>
              ))}
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                placeholder="Cuéntame sobre tu proyecto..."
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/10 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 disabled:opacity-60"
            >
              {loading ? (
                <><Loader2 size={16} className="animate-spin" /> Enviando...</>
              ) : (
                <>
                  Enviar mensaje
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactSection;
