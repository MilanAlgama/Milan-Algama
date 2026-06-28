import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaLocationArrow } from "react-icons/fa";
import portfolioData from "../data/portfolioData";

function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-[#050816] py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[6px] text-blue-400">
            Professional Journey
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Experience
          </h2>
        </motion.div>

        <div className="mt-20">

          {portfolioData.experience.map((job, index) => (

            <motion.div

              key={index}

              initial={{ opacity: 0, y: 60 }}

              whileInView={{ opacity: 1, y: 0 }}

              transition={{
                duration: .6,
                delay: index * .2
              }}

              viewport={{ once: true }}

              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.35)] transition-all duration-300"

            >

              <div className="flex items-center gap-4">

                <div className="bg-blue-600 p-4 rounded-full">
                  <FaBriefcase size={25} />
                </div>

                <div>
                  <h3 className="text-3xl font-bold">
                    {job.position}
                  </h3>

                  <p className="text-blue-400 text-lg">
                    {job.company}
                  </p>
                </div>

              </div>

              <div className="flex flex-wrap gap-6 mt-8 text-gray-400">

                <div className="flex items-center gap-2">
                  <FaCalendarAlt />
                  {job.duration}
                </div>

                <div className="flex items-center gap-2">
                  <FaLocationArrow />
                  {job.location}
                </div>

              </div>

              <p className="mt-8 text-gray-300 leading-8">
                {job.description}
              </p>

              <div className="flex flex-wrap gap-4 mt-8">

                {job.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500 text-blue-300 hover:bg-blue-500 hover:text-white transition"
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;