import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { personalInfo } from "@/data/portfolio";
import { Github, Linkedin, Mail, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Save to database
      const { error } = await supabase.from("contact_messages").insert({
        name: form.name,
        email: form.email,
        message: form.message,
      });
      if (error) throw error;

      // Send email notification
      const { error: emailError } = await supabase.functions.invoke("send-contact-email", {
        body: { name: form.name, email: form.email, message: form.message },
      });
      if (emailError) console.error("Email error:", emailError);

      toast({ title: "¡Mensaje enviado!", description: "Gracias por contactarme. Te responderé pronto." });
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast({ title: "Error", description: "No se pudo enviar el mensaje. Intenta de nuevo.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatedSection id="contacto" className="py-24 px-4">
      <div className="container mx-auto max-w-2xl">
        <h2 className="mb-2 text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">Contacto</h2>
        <h3 className="mb-4 text-center text-3xl font-bold text-foreground sm:text-4xl">Hablemos</h3>
        <p className="mx-auto mb-10 max-w-md text-center text-sm text-muted-foreground">
          ¿Tienes un proyecto en mente o simplemente quieres saludar? No dudes en escribirme.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Input placeholder="Tu nombre" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
            <Input type="email" placeholder="Tu email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
          </div>
          <Textarea placeholder="Tu mensaje..." rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
          <Button type="submit" className="w-full sm:w-auto" disabled={loading}>
            {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
            {loading ? "Enviando..." : "Enviar Mensaje"}
          </Button>
        </form>

        <div className="mt-10 flex items-center justify-center gap-6">
          <a href={`mailto:${personalInfo.email}`} className="text-muted-foreground transition-colors hover:text-foreground"><Mail size={20} /></a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground"><Github size={20} /></a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground"><Linkedin size={20} /></a>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactSection;
