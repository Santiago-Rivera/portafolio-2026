import AnimatedSection from "./AnimatedSection";
import { aboutText } from "@/data/portfolio";
import { motion } from "framer-motion";

const stats = [
  { value: "3+", label: "Años de experiencia" },
  { value: "20+", label: "Proyectos entregados" },
  { value: "100%", label: "Código limpio" },
];

const AboutSection = () => (
  <AnimatedSection id="sobre-mi" className="py-28 px-6">
    <div className="mx-auto max-w-5xl">
      {/* Section header */}
      <div className="mb-16 flex items-center gap-4">
        <span className="section-label">Sobre mí</span>
        <div className="h-px flex-1 bg-border" />
        <span className="tag-number text-muted-foreground/50">01</span>
      </div>

      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
        {/* Left: text */}
        <div>
          <h2 className="mb-6 text-4xl font-bold leading-tight text-foreground sm:text-5xl">
            Desarrollador con{" "}
            <span className="text-gradient">pasión</span> por el detalle
          </h2>
          <p className="mb-6 text-base leading-relaxed text-muted-foreground">
            {aboutText}
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            Me especializo en construir aplicaciones full-stack con foco en la experiencia de usuario,
            rendimiento y código mantenible a largo plazo. Cada proyecto es una oportunidad de
            aprender y crecer.
          </p>
        </div>

        {/* Right: stats + visual */}
        <div className="flex flex-col justify-center gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="group flex items-center gap-6 rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-md"
            >
              <span
                className="text-5xl font-extrabold tracking-tight text-gradient"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {stat.value}
              </span>
              <div className="h-12 w-px bg-border" />
              <p className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </AnimatedSection>
);

export default AboutSection;
