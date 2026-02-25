import { ArrowDown, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio";
import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="inicio" className="relative flex min-h-screen items-center justify-center px-4 pt-16">
      <div className="container mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">Bienvenido a mi portafolio</p>
          <h1 className="mb-4 text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            {personalInfo.name}
          </h1>
          <p className="mb-2 text-xl font-medium text-primary sm:text-2xl">{personalInfo.title}</p>
          <p className="mx-auto mb-10 max-w-lg text-base text-muted-foreground">{personalInfo.subtitle}</p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" onClick={() => scrollTo("#proyectos")}>
              Ver Proyectos
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollTo("#contacto")}>
              Contáctame
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="https://www.linkedin.com/in/santiago-rivera-rivera" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
              <Github size={20} />
            </a>
            <a href="https://github.com/Santiago-Rivera" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown size={20} className="text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
