import AnimatedSection from "./AnimatedSection";
import { experiences } from "@/data/portfolio";

const ExperienceSection = () => (
  <AnimatedSection id="experiencia" className="py-24 px-4">
    <div className="container mx-auto max-w-3xl">
      <h2 className="mb-2 text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">Experiencia</h2>
      <h3 className="mb-12 text-center text-3xl font-bold text-foreground sm:text-4xl">Mi trayectoria</h3>

      <div className="relative border-l-2 border-border pl-8">
        {experiences.map((exp, i) => (
          <div key={i} className="relative mb-10 last:mb-0">
            {/* Dot */}
            <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-primary bg-background" />
            <span className="mb-1 inline-block text-xs font-medium text-muted-foreground">{exp.period}</span>
            <h4 className="text-lg font-semibold text-foreground">{exp.title}</h4>
            <p className="mb-2 text-sm font-medium text-primary">{exp.company}</p>
            <p className="text-sm leading-relaxed text-muted-foreground">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default ExperienceSection;
