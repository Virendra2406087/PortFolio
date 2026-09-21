import {
  SiHtml5,
  SiJavascript,
  SiCss,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiCplusplus,
  SiRedis,
  SiMysql,
  SiDocker,
  SiVercel,
  SiPostman,
  SiFigma,
  SiLangchain,
  SiPython,
} from "react-icons/si";
import { FaReact, FaGithub, FaJava } from "react-icons/fa";
import { TbBrandVscode, TbBrandFramerMotion } from "react-icons/tb";
import { LiaNodeJs } from "react-icons/lia";
import { BiLogoVisualStudio } from "react-icons/bi";

const skills = [
  {
    id: 1,
    value: "languages",
    skillName: "Languages",
    icons: [
      { color: "#00599c", name: "C++", iconName: SiCplusplus },
      { color: "#E7C952", name: "JavaScript", iconName: SiJavascript },
      { color: "#3776AB", name: "Python", iconName: SiPython },
    ],
  },
  {
    id: 2,
    value: "frontend",
    skillName: "Frontend",
    icons: [
      { color: "#F7B552", name: "HTML5", iconName: SiHtml5 },
      { color: "#6DAEFF", name: "CSS3", iconName: SiCss },
      { color: "#30E2E9", name: "React", iconName: FaReact },
      { color: "#15A9E7", name: "Tailwind CSS", iconName: SiTailwindcss },
      { color: "yellow", name: "Framer Motion", iconName: TbBrandFramerMotion },
    ],
  },
  {
    id: 3,
    value: "backend",
    skillName: "Backend",
    icons: [
      { color: "#6698F8", name: "Express", iconName: SiExpress },
      { color: "#209411", name: "NodeJS", iconName: LiaNodeJs },
    ],
  },
  {
    id: 4,
    value: "database",
    skillName: "Databases",
    icons: [
      { color: "#0AA41C", name: "MongoDB", iconName: SiMongodb },
      { color: "#336791", name: "MySQL", iconName: SiMysql },
      { color: "#DC382D", name: "Redis", iconName: SiRedis },
    ],
  },
  {
    id: 5,
    value: "aiml",
    skillName: "AI / ML",
    icons: [
      { color: "#1C3A5E", name: "LangChain", iconName: SiLangchain },
    ],
  },
  {
    id: 6,
    value: "tools",
    skillName: "Tools & Cloud",
    icons: [
      { color: "white", name: "GitHub", iconName: FaGithub },
      { color: "#095AF2", name: "VS Code", iconName: BiLogoVisualStudio },
      { color: "#2496ED", name: "Docker", iconName: SiDocker },
      { color: "#FF6C37", name: "Postman", iconName: SiPostman },
      { color: "white", name: "Vercel", iconName: SiVercel },
      { color: "#F24E1E", name: "Figma", iconName: SiFigma },
    ],
  },
];

export default skills;