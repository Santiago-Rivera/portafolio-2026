import { personalInfo } from "@/data/portfolio";
import { Github, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card py-8 px-4">
    <div className="container mx-auto flex flex-col items-center justify-between gap-4 sm:flex-row">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} {personalInfo.name}. Todos los derechos reservados.
      </p>
      <div className="flex gap-4">
        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground"><Github size={18} /></a>
        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground"><Linkedin size={18} /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
