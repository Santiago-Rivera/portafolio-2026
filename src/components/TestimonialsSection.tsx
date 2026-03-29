import AnimatedSection from "./AnimatedSection";
import { testimonials } from "@/data/testimonials";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const TestimonialsSection = () => (
  <AnimatedSection id="testimonios" className="py-28 px-6">
    <div className="mx-auto max-w-5xl">
      {/* Section header */}
      <div className="mb-16 flex items-center gap-4">
        <span className="section-label">Testimonios</span>
        <div className="h-px flex-1 bg-border" />
      </div>

      <div className="mb-12">
        <h2 className="text-4xl font-bold text-foreground sm:text-5xl">
          Lo que dicen
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
          >
            {/* Quote mark */}
            <div
              className="mb-4 text-4xl font-black leading-none text-primary/20 transition-colors duration-300 group-hover:text-primary/30"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              "
            </div>

            <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
              {t.text}
            </p>

            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9 ring-2 ring-border">
                <AvatarImage src={t.image} alt={t.name} />
                <AvatarFallback className="bg-primary/10 text-xs font-semibold text-primary">
                  {t.avatar}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">
                  {t.role} · {t.company}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default TestimonialsSection;
