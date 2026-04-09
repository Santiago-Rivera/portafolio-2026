export const personalInfo = {
  name: "Santiago Rivera",
  title: "Desarrollador Web & Móvil",
  subtitle: "Construyo aplicaciones que resuelven problemas reales — desde el diseño hasta el despliegue.",
  email: "santiagodeveloperfullstack@outlook.com",
  github: "https://github.com/Santiago-Rivera",
  linkedin: "https://linkedin.com/in/santiago-rivera-rivera",
};

export const aboutText = `Soy desarrollador full stack con enfoque en React, TypeScript y Flutter.
Me apasiona crear productos digitales que combinen una interfaz cuidada con una arquitectura
backend sólida. Trabajo tanto en aplicaciones web como móviles, siempre buscando soluciones
limpias y escalables para problemas reales.`;

export const skills = {
  Frontend: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Framer Motion"],
  Backend: ["Node.js", "PostgreSQL", "Supabase", "Firebase", "REST APIs"],
  Móvil: ["Flutter", "React Native", "Dart", "Expo"],
  Herramientas: ["Git", "GitHub Actions", "Figma", "Docker", "VS Code"],
};

export const experiences = [
  {
    title: "Desarrollador Full Stack Freelance",
    company: "Independiente",
    period: "2022 — Presente",
    description:
      "Desarrollo de aplicaciones web y móviles para clientes de distintos sectores. Gestión completa del ciclo de vida: diseño, desarrollo, despliegue y mantenimiento.",
  },
  {
    title: "Desarrollador Frontend",
    company: "Proyecto Interno",
    period: "2021 — 2022",
    description:
      "Construcción de interfaces de usuario con React y TypeScript. Integración con APIs REST y servicios de autenticación. Colaboración en equipos ágiles con revisiones de código semanales.",
  },
  {
    title: "Ingeniería en Sistemas / Computación",
    company: "Universidad",
    period: "2017 — 2021",
    description:
      "Formación en fundamentos de ciencias de la computación, desarrollo de software, bases de datos y redes. Proyectos finales con enfoque en aplicaciones web y mobile.",
  },
];

export type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  type: "Web" | "Móvil";
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Panadería Delicias",
    description:
      "Sistema web para gestión de una panadería: catálogo de productos, pedidos, clientes y panel de administración. Backend con Supabase y Row Level Security.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop",
    technologies: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    type: "Web",
    repoUrl: "https://github.com/Santiago-Rivera",
  },
  {
    title: "Kanban Task Manager",
    description:
      "App de gestión de tareas con tablero Kanban, drag & drop entre columnas, categorías por color y sincronización en tiempo real con Cloud Firestore.",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=600&h=400&fit=crop",
    technologies: ["Flutter", "Dart", "Firebase", "Firestore"],
    type: "Móvil",
    repoUrl: "https://github.com/Santiago-Rivera",
  },
  {
    title: "Generador de Recibos",
    description:
      "Herramienta para cobradores que permite generar recibos digitales con login multi-usuario, historial de clientes y exportación a PDF.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    technologies: ["React", "Supabase", "TypeScript", "PDF.js"],
    type: "Web",
    repoUrl: "https://github.com/Santiago-Rivera",
  },
  {
    title: "Portafolio Personal",
    description:
      "Este mismo portafolio — single-page app con animaciones, dark mode, formulario de contacto conectado a Supabase y notificación de emails vía Resend.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    technologies: ["React", "TypeScript", "Supabase", "Framer Motion"],
    type: "Web",
    repoUrl: "https://github.com/Santiago-Rivera",
  },
  {
    title: "App de Clima",
    description:
      "Aplicación móvil con geolocalización, pronóstico de 7 días, alertas por condiciones extremas y soporte offline con caché local.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    technologies: ["Flutter", "Dart", "OpenWeather API", "Hive"],
    type: "Móvil",
    repoUrl: "https://github.com/Santiago-Rivera",
  },
  {
    title: "Dashboard de Analytics",
    description:
      "Panel de control con gráficas interactivas para visualizar métricas de negocio: ventas, usuarios activos, conversiones y KPIs personalizables.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["React", "Recharts", "TypeScript", "Tailwind CSS"],
    type: "Web",
    repoUrl: "https://github.com/Santiago-Rivera",
  },
];