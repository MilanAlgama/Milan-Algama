import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-white px-6 py-24 transition-colors duration-300 dark:bg-[#0B1120]"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="uppercase tracking-[6px] text-blue-400">
            My Work
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Featured Projects
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-slate-600 dark:text-gray-400">
            Some of the projects I've built while learning software engineering,
            Java development, databases, and full-stack technologies.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 mt-20">

          {portfolioData.projects.map((project) => (

            <ProjectCard
              key={project.id}
              {...project}
            />

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;
