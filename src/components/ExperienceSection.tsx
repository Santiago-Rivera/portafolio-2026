import AnimatedSection from "./AnimatedSection";
import { experiences } from "@/data/portfolio";
import { motion } from "framer-motion";

const ExperienceSection = () => (
  <AnimatedSection id="experiencia" className="py-28 px-6">
    <div className="mx-auto max-w-5xl">
      {/* Section header */}
      <div className="mb-16 flex items-center gap-4">
        <span className="section-label">Experiencia</span>
        <div className="h-px flex-1 bg-border" />
        <span className="tag-number text-muted-foreground/50">03</span>
      </div>

      <div className="mb-12">
        <h2 className="text-4xl font-bold text-foreground sm:text-5xl">
          Mi trayectoria
        </h2>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-3 bottom-3 w-px bg-border" />

        <div className="space-y-10 pl-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative"
            >
              {/* Dot */}
              <div className="absolute -left-[41px] top-1.5 flex h-4 w-4 items-center justify-center">
                <div className="h-2.5 w-2.5 rounded-full bg-primary ring-2 ring-background ring-offset-1 ring-offset-primary/20 transition-transform duration-200 group-hover:scale-125" />
              </div>

              {/* Card */}
              <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
                <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                    <p className="text-sm font-medium text-primary">{exp.company}</p>
                  </div>
                  <span className="tag-number shrink-0 rounded-full border border-border px-3 py-1 text-muted-foreground">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </AnimatedSection>
);

export default ExperienceSection;
