import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { projects, type Project } from "@/data/portfolio";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Filter = "Todos" | "Web" | "Móvil";

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.96 }}
    transition={{ duration: 0.4, delay: index * 0.07 }}
    className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
  >
    {/* Image */}
    <div className="relative aspect-[16/9] overflow-hidden bg-muted">
      <img
        src={project.image}
        alt={project.title}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      {/* Overlay on hover */}
      <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-black/70 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="flex gap-2">
          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-black backdrop-blur-sm transition-colors hover:bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={12} /> Demo
            </a>
          )}
          {project.repoUrl && project.repoUrl !== "#" && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm transition-colors hover:bg-black/90"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={12} /> Código
            </a>
          )}
        </div>
        <span className="rounded-full bg-primary px-2.5 py-1 text-xs font-medium text-primary-foreground">
          {project.type}
        </span>
      </div>
    </div>

    {/* Content */}
    <div className="p-5">
      <div className="mb-2 flex items-start justify-between gap-2">
        <h4 className="font-semibold text-foreground transition-colors group-hover:text-primary">
          {project.title}
        </h4>
        <ArrowUpRight
          size={16}
          className="mt-0.5 shrink-0 text-muted-foreground/40 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
        />
      </div>
      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
      <div className="flex flex-wrap gap-1.5">
        {project.technologies.map((t) => (
          <span
            key={t}
            className="rounded-md bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const ProjectsSection = () => {
  const [filter, setFilter] = useState<Filter>("Todos");
  const filtered = filter === "Todos" ? projects : projects.filter((p) => p.type === filter);

  return (
    <AnimatedSection id="proyectos" className="py-28 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <div className="mb-16 flex items-center gap-4">
          <span className="section-label">Proyectos</span>
          <div className="h-px flex-1 bg-border" />
          <span className="tag-number text-muted-foreground/50">04</span>
        </div>

        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl">
            Lo que he construido
          </h2>

          {/* Filters */}
          <div className="flex gap-1.5 self-start rounded-xl border border-border bg-muted/40 p-1">
            {(["Todos", "Web", "Móvil"] as Filter[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-lg px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                  filter === f
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
