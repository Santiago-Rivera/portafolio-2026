import AnimatedSection from "./AnimatedSection";
import { aboutText } from "@/data/portfolio";
import { Code2, Smartphone, Lightbulb } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Aplicaciones Web" },
  { icon: Smartphone, label: "Apps Móviles" },
  { icon: Lightbulb, label: "Soluciones Creativas" },
];

const AboutSection = () => (
  <AnimatedSection id="sobre-mi" className="py-24 px-4">
    <div className="container mx-auto max-w-4xl">
      <h2 className="mb-2 text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">Sobre Mí</h2>
      <h3 className="mb-10 text-center text-3xl font-bold text-foreground sm:text-4xl">Conóceme un poco más</h3>

      <p className="mx-auto mb-12 max-w-2xl text-center leading-relaxed text-muted-foreground">{aboutText}</p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {highlights.map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Icon size={24} className="text-primary" />
            </div>
            <span className="text-sm font-medium text-foreground">{label}</span>
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default AboutSection;
