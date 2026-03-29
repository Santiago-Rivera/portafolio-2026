import { useEffect, useRef } from "react";
import { ArrowDown, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { motion } from "framer-motion";

const words = ["Interfaces", "Experiencias", "Productos", "Soluciones"];

const HeroSection = () => {
  const wordRef = useRef<HTMLSpanElement>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const el = wordRef.current;
    if (!el) return;
    el.textContent = words[0];

    const interval = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % words.length;
      el.style.opacity = "0";
      el.style.transform = "translateY(12px)";
      setTimeout(() => {
        el.textContent = words[indexRef.current];
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
        {/* Accent blob */}
        <div className="absolute right-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[15%] left-[-5%] h-[300px] w-[300px] rounded-full bg-primary/4 blur-[80px]" />
      </div>

      {/* Top tag */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 flex items-center gap-3"
      >
        <div className="h-px w-8 bg-primary/60" />
        <span className="section-label">Portafolio {new Date().getFullYear()}</span>
        <div className="h-px w-8 bg-primary/60" />
      </motion.div>

      {/* Main content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-5xl text-center"
      >
        {/* Big headline */}
        <motion.div variants={item} className="mb-6">
          <h1 className="text-[clamp(3rem,10vw,7rem)] font-extrabold leading-[1] tracking-tight text-foreground">
            Creo{" "}
            <span
              ref={wordRef}
              className="text-gradient inline-block"
              style={{
                transition: "opacity 0.3s ease, transform 0.3s ease",
              }}
            >
              Interfaces
            </span>
          </h1>
          <h1 className="text-[clamp(3rem,10vw,7rem)] font-extrabold leading-[1] tracking-tight text-foreground">
            Digitales
          </h1>
        </motion.div>

        {/* Name & role */}
        <motion.div variants={item} className="mb-8 flex flex-col items-center gap-1">
          <p className="text-lg font-medium text-foreground/80">
            {personalInfo.name}
          </p>
          <p className="tag-number text-muted-foreground">
            {personalInfo.title}
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={item}
          className="mx-auto mb-10 max-w-lg text-base font-light leading-relaxed text-muted-foreground"
        >
          {personalInfo.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <button
            onClick={() => scrollTo("#proyectos")}
            className="group flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
          >
            Ver proyectos
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
          <button
            onClick={() => scrollTo("#contacto")}
            className="group flex items-center gap-2 rounded-full border border-border bg-card/50 px-7 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card"
          >
            Hablemos
          </button>
        </motion.div>

        {/* Social + stat row */}
        <motion.div
          variants={item}
          className="mt-14 flex items-center justify-center gap-8"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground hover-underline"
          >
            <Github size={16} />
            GitHub
          </a>
          <div className="h-4 w-px bg-border" />
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground hover-underline"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <div className="h-4 w-px bg-border" />
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground hover-underline"
          >
            Email
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo("#sobre-mi")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/60 transition-colors hover:text-muted-foreground"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ArrowDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
