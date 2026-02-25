import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { projects, type Project } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

type Filter = "Todos" | "Web" | "Móvil";

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="group overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg">
    <div className="relative aspect-video overflow-hidden">
      <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
      <Badge className="absolute top-3 right-3" variant={project.type === "Web" ? "default" : "secondary"}>
        {project.type}
      </Badge>
    </div>
    <div className="p-5">
      <h4 className="mb-1 text-lg font-semibold text-foreground">{project.title}</h4>
      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
      <div className="mb-4 flex flex-wrap gap-1.5">
        {project.technologies.map((t) => (
          <span key={t} className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">{t}</span>
        ))}
      </div>
      <div className="flex gap-2">
        {project.liveUrl && (
          <Button size="sm" variant="outline" asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"><ExternalLink size={14} /> Demo</a>
          </Button>
        )}
        {project.repoUrl && (
          <Button size="sm" variant="ghost" asChild>
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer"><Github size={14} /> Código</a>
          </Button>
        )}
      </div>
    </div>
  </div>
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
            <Button key={f} size="sm" variant={filter === f ? "default" : "outline"} onClick={() => setFilter(f)}>
              {f}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ProjectsSection;
