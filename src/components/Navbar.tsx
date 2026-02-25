import { useState } from "react";
import { Menu, X } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre Mí", href: "#sobre-mi" },
  { label: "Skills", href: "#skills" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#inicio" onClick={() => scrollTo("#inicio")} className="text-lg font-bold tracking-tight text-foreground">
          {personalInfo.name}
        </a>

        {/* Desktop */}
        <ul className="hidden gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <button onClick={() => scrollTo(l.href)} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <ul className="flex flex-col gap-1 p-4">
            {links.map((l) => (
              <li key={l.href}>
                <button onClick={() => scrollTo(l.href)} className="w-full rounded-md px-3 py-2 text-left text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
