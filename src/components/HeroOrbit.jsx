import { motion } from "framer-motion";
import {
  FaAws,
  FaDocker,
  FaReact,
  FaGitAlt,
  FaPython,
  FaJava,
} from "react-icons/fa";

const technologies = [
  {
    name: "AWS",
    icon: FaAws,
    color: "text-orange-400",
    glow: "shadow-[0_0_25px_rgba(251,146,60,0.5)]",
    top: "0%",
    left: "50%",
  },
  {
    name: "Docker",
    icon: FaDocker,
    color: "text-sky-400",
    glow: "shadow-[0_0_25px_rgba(56,189,248,0.5)]",
    top: "25%",
    left: "90%",
  },
  {
    name: "Python",
    icon: FaPython,
    color: "text-yellow-400",
    glow: "shadow-[0_0_25px_rgba(250,204,21,0.5)]",
    top: "75%",
    left: "88%",
  },
  {
    name: "Java",
    icon: FaJava,
    color: "text-red-400",
    glow: "shadow-[0_0_25px_rgba(248,113,113,0.5)]",
    top: "92%",
    left: "50%",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "text-orange-500",
    glow: "shadow-[0_0_25px_rgba(249,115,22,0.5)]",
    top: "75%",
    left: "5%",
  },
  {
    name: "React",
    icon: FaReact,
    color: "text-cyan-400",
    glow: "shadow-[0_0_25px_rgba(34,211,238,0.5)]",
    top: "25%",
    left: "5%",
  },
];

function HeroOrbit() {
  return (
    <>
      {technologies.map((tech, index) => {
        const Icon = tech.icon;

        return (
          <motion.div
            key={tech.name}
            className="absolute z-20"
            style={{
              top: tech.top,
              left: tech.left,
              transform: "translate(-50%, -50%)",
            }}
            animate={{
              y: [0, -12, 0],
              x: [0, 6, 0],
            }}
            transition={{
              duration: 3 + index * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div
              className={`
                flex items-center gap-3
                px-4 py-2
                rounded-full
                border border-white/10
                backdrop-blur-xl
                bg-white/5
                ${tech.glow}
                hover:scale-110
                transition-all
                duration-300
                cursor-default
              `}
            >
              <Icon className={`text-2xl ${tech.color}`} />

              <span className="text-white font-medium text-sm whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          </motion.div>
        );
      })}
    </>
  );
}

export default HeroOrbit;