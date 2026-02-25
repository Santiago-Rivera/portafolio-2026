export const personalInfo = {
  name: "Tu Nombre",
  title: "Desarrollador Web & Móvil",
  subtitle: "Creo experiencias digitales que combinan diseño elegante con código limpio.",
  email: "tu@email.com",
  github: "https://github.com/tuusuario",
  linkedin: "https://linkedin.com/in/tuusuario",
  twitter: "https://twitter.com/tuusuario",
};

export const aboutText = `Soy un desarrollador apasionado por crear aplicaciones web y móviles que resuelvan problemas reales. 
Me encanta aprender nuevas tecnologías y compartir conocimiento con la comunidad. 
Cuando no estoy programando, me gusta explorar nuevas herramientas y contribuir a proyectos open source.`;

export const skills = {
  Frontend: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML/CSS"],
  Backend: ["Node.js", "Express", "PostgreSQL", "Firebase", "REST APIs"],
  Móvil: ["React Native", "Flutter", "Expo"],
  Herramientas: ["Git", "Docker", "Figma", "VS Code", "GitHub Actions"],
};

export const experiences = [
  {
    title: "Desarrollador Full Stack",
    company: "Empresa Ejemplo",
    period: "2023 — Presente",
    description: "Desarrollo de aplicaciones web con React y Node.js. Implementación de APIs RESTful y bases de datos PostgreSQL.",
  },
  {
    title: "Desarrollador Frontend",
    company: "Startup Tech",
    period: "2021 — 2023",
    description: "Creación de interfaces de usuario responsivas con React y TypeScript. Integración con servicios backend.",
  },
  {
    title: "Ingeniería en Sistemas",
    company: "Universidad",
    period: "2017 — 2021",
    description: "Formación en ciencias de la computación, algoritmos, estructuras de datos y desarrollo de software.",
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
    title: "App de Tareas",
    description: "Aplicación web para gestionar tareas con drag & drop, categorías y modo oscuro.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    technologies: ["React", "TypeScript", "Tailwind"],
    type: "Web",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "E-Commerce App",
    description: "Tienda en línea con carrito de compras, pagos y panel de administración.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    technologies: ["Next.js", "Stripe", "PostgreSQL"],
    type: "Web",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Fitness Tracker",
    description: "App móvil para registrar rutinas de ejercicio, progreso y estadísticas.",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop",
    technologies: ["React Native", "Firebase", "Expo"],
    type: "Móvil",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Chat en Tiempo Real",
    description: "Aplicación de mensajería con WebSockets, salas y notificaciones push.",
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=600&h=400&fit=crop",
    technologies: ["React", "Socket.io", "Node.js"],
    type: "Web",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Weather App",
    description: "App móvil que muestra el clima en tiempo real con geolocalización y pronósticos.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    technologies: ["Flutter", "Dart", "OpenWeather API"],
    type: "Móvil",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Portfolio Dashboard",
    description: "Panel de control con gráficas interactivas para visualizar datos financieros.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["React", "Recharts", "Tailwind"],
    type: "Web",
    liveUrl: "#",
    repoUrl: "#",
  },
];
