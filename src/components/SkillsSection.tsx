import AnimatedSection from "./AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/portfolio";

const SkillsSection = () => (
  <AnimatedSection id="skills" className="bg-muted/30 py-24 px-4">
    <div className="container mx-auto max-w-4xl">
      <h2 className="mb-2 text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">Skills</h2>
      <h3 className="mb-12 text-center text-3xl font-bold text-foreground sm:text-4xl">Tecnologías que manejo</h3>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="rounded-xl border border-border bg-card p-6">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">{category}</h4>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <Badge key={skill} variant="secondary" className="px-3 py-1 text-xs">{skill}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default SkillsSection;
