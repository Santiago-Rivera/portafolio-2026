import AnimatedSection from "./AnimatedSection";
import { testimonials } from "@/data/testimonials";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const TestimonialsSection = () => (
  <AnimatedSection id="testimonios" className="py-24 px-4">
    <div className="container mx-auto max-w-5xl">
      <h2 className="mb-2 text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">Testimonios</h2>
      <h3 className="mb-12 text-center text-3xl font-bold text-foreground sm:text-4xl">Lo que dicen de mí</h3>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="group relative rounded-xl border border-border bg-card p-6 transition-shadow duration-300 hover:shadow-xl hover:border-primary/30"
          >
            <Quote size={28} className="mb-4 text-primary/20 transition-colors duration-300 group-hover:text-primary/40" />
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground italic">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 border-2 border-primary/20 transition-colors duration-300 group-hover:border-primary/50">
                <AvatarFallback className="bg-primary/10 text-xs font-semibold text-primary">{t.avatar}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role} · {t.company}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default TestimonialsSection;
