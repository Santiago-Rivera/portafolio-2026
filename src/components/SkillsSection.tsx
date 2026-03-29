import AnimatedSection from "./AnimatedSection";
import { skills } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Globe, Server, Smartphone, Wrench } from "lucide-react";

const categoryMeta: Record<string, { icon: React.ElementType; color: string }> = {
  Frontend: { icon: Globe, color: "text-sky-400" },
  Backend: { icon: Server, color: "text-emerald-400" },
  Móvil: { icon: Smartphone, color: "text-violet-400" },
  Herramientas: { icon: Wrench, color: "text-amber-400" },
};

// Simulated proficiency levels per skill
const proficiency: Record<string, number> = {
  React: 95, TypeScript: 88, "Tailwind CSS": 92, "Next.js": 82, "HTML/CSS": 96,
  "Node.js": 80, Express: 78, PostgreSQL: 75, Supabase: 85, "REST APIs": 88,
  "React Native": 72, Flutter: 68, Expo: 74,
  Git: 90, Docker: 65, Figma: 70, "VS Code": 95, "GitHub Actions": 68,
};

const SkillsSection = () => (
  <AnimatedSection id="skills" className="py-28 px-6">
    <div className="mx-auto max-w-5xl">
      {/* Section header */}
      <div className="mb-16 flex items-center gap-4">
        <span className="section-label">Tecnologías</span>
        <div className="h-px flex-1 bg-border" />
        <span className="tag-number text-muted-foreground/50">02</span>
      </div>

      <div className="mb-12">
        <h2 className="text-4xl font-bold text-foreground sm:text-5xl">
          Mi stack tecnológico
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {Object.entries(skills).map(([category, items], catIndex) => {
          const meta = categoryMeta[category];
          const Icon = meta?.icon ?? Globe;
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted">
                  <Icon size={18} className={meta?.color ?? "text-primary"} />
                </div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                  {category}
                </h3>
              </div>

              <div className="space-y-3.5">
                {items.map((skill, i) => {
                  const level = proficiency[skill] ?? 70;
                  return (
                    <div key={skill}>
                      <div className="mb-1.5 flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground/90">{skill}</span>
                        <span className="tag-number text-muted-foreground">{level}%</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                        <motion.div
                          className="h-full rounded-full bg-primary"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.8,
                            delay: catIndex * 0.1 + i * 0.07,
                            ease: [0.25, 0.46, 0.45, 0.94],
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </AnimatedSection>
);

export default SkillsSection;
