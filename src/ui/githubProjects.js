export const LifeOs = "/assets/projects/LifeOs.png";
export const portfolio = "/assets/projects/portfolio.png";
export const VAI = "/assets/projects/VAI.png";

const githubProjects = [
  {
    id: 1,
    name: "LifeOS – AI-Powered Productivity Suite",
    description:
      "A three-tier productivity application combining task management, smart reminders, and AI-assisted workflows. Features a WhatsApp reminder system, Gmail Smart Tasks and Meeting Sync via the Gmail/Google Calendar APIs, and a custom iOS-style scroll-wheel time picker. Built with a React/Vite frontend, a Node/Express/MongoDB backend, and a Python/Flask ML microservice.",
    deploymentLink: "https://life-os-murex-xi.vercel.app/",
    techStack: ["React", "Vite", "Node.js", "Express", "MongoDB", "Python", "Flask", "Gmail API", "Google Calendar API"],
    githubUrl: "https://github.com/Virendra2406087/LifeOS",
    image: LifeOs,
  },
  {
    id: 2,
    name: "VAI – AI-Powered Learning Platform",
    description:
      "An AI-driven learning platform with RAG-based document chat, letting users upload documents and ask questions grounded in their content. Includes a multi-model Gemini fallback chain, quiz/flashcard generation with persistent history, a light/dark theme system synced across components, and a full production deployment pipeline (auth, CORS, OAuth callbacks) across Vercel and Render.",
    deploymentLink: "https://vailearningapp.vercel.app/",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Gemini API", "JWT Auth"],
    githubUrl: "https://github.com/Virendra2406087/VAI",
    image: VAI,
  },
  {
    id: 3,
    name: "Portfolio Website",
    description:
      "A personal portfolio built with React, Vite, and Tailwind CSS v4, featuring a custom canvas-based CrystalNucleus animation with 3D-projected orbital rings, mouse parallax, idle float motion, and a deep-space StarCanvas background.",
    deploymentLink: "https://portfolio-okienmo6i-virendra2406087s-projects.vercel.app",
    techStack: ["React", "Vite", "Tailwind CSS", "Canvas API"],
    githubUrl: "https://github.com/Virendra2406087/Portfolio",
    image: portfolio,
  },
];

export default githubProjects;