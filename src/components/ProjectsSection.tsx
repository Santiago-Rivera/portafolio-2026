import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { projects, type Project } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Filter = "Todos" | "Web" | "Móvil";

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
    className="group overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30"
  >
    <div className="relative aspect-video overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <Badge className="absolute top-3 right-3 transition-transform duration-300 group-hover:scale-110" variant={project.type === "Web" ? "default" : "secondary"}>
        {project.type}
      </Badge>
      <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        {project.liveUrl && (
          <Button size="sm" className="bg-background/90 text-foreground hover:bg-background" asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"><ExternalLink size={14} /> Demo</a>
          </Button>
        )}
        {project.repoUrl && (
          <Button size="sm" variant="ghost" className="bg-background/90 text-foreground hover:bg-background" asChild>
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer"><Github size={14} /> Código</a>
          </Button>
        )}
      </div>
    </div>
    <div className="p-5">
      <h4 className="mb-1 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">{project.title}</h4>
      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
      <div className="flex flex-wrap gap-1.5">
        {project.technologies.map((t) => (
          <span key={t} className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary">{t}</span>
        ))}
      </div>
    </div>
  </motion.div>
);

const ProjectsSection = () => {
  const [filter, setFilter] = useState<Filter>("Todos");
  const filtered = filter === "Todos" ? projects : projects.filter((p) => p.type === filter);

  return (
    <AnimatedSection id="proyectos" className="bg-muted/30 py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-2 text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">Proyectos</h2>
        <h3 className="mb-8 text-center text-3xl font-bold text-foreground sm:text-4xl">Lo que he construido</h3>

        <div className="mb-10 flex justify-center gap-2">
          {(["Todos", "Web", "Móvil"] as Filter[]).map((f) => (
            <Button key={f} size="sm" variant={filter === f ? "default" : "outline"} onClick={() => setFilter(f)} className="transition-all duration-200">
              {f}
            </Button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default ProjectsSection;
