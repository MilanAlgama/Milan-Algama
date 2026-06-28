import { motion } from "framer-motion";
import {
  FaGithub,
  FaJava,
  FaReact,
  FaDocker,
  FaGitAlt,
  FaAws,
} from "react-icons/fa";

import {
  SiMysql,
  SiJavascript,
  SiTailwindcss,
  SiGooglecloud,
} from "react-icons/si";

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const techIcons = {
  Java: <FaJava className="text-orange-500 text-lg" />,

  JavaFX: <FaJava className="text-orange-500 text-lg" />,

  MySQL: <SiMysql className="text-blue-500 text-lg" />,

  Docker: <FaDocker className="text-blue-400 text-lg" />,

  React: <FaReact className="text-cyan-400 text-lg" />,

  JavaScript: <SiJavascript className="text-yellow-400 text-lg" />,

  Git: <FaGitAlt className="text-orange-600 text-lg" />,

  AWS: <FaAws className="text-orange-400 text-lg" />,

  "Tailwind CSS": <SiTailwindcss className="text-cyan-400 text-lg" />,

  "Google Cloud": <SiGooglecloud className="text-blue-500 text-lg" />,
};

function ProjectCard({
  title,
  subtitle,
  description,
  technologies,
  github,
  image,
  featured,
}) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.35)] transition-all"
    >
      {/* Image */}

      <div className="relative overflow-hidden h-56">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition duration-500 hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent"></div>


      </div>

      {/* Content */}

      <div className="p-7">
        <h3 className="text-2xl font-bold">{title}</h3>

        <p className="text-blue-400 mt-2">{subtitle}</p>

        <p className="text-gray-400 mt-5 leading-7">{description}</p>

        {/* Technologies */}

        <div className="flex flex-wrap gap-3 mt-6">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 hover:border-blue-500 hover:bg-blue-500/20 transition-all duration-300"
            >
              {techIcons[tech] || (
                <span className="text-blue-400 font-bold">
                  {tech.charAt(0)}
                </span>
              )}
              <span>{tech}</span>
            </span>
          ))}
        </div>

        {/* GitHub */}

        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl transition"
        >
          <FaGithub />
          View Source Code
        </a>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
