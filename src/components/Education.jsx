import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import portfolioData from "../data/portfolioData";

function Education() {
  return (
    <section
      id="education"
      className="min-h-screen bg-[#050816] py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[6px] text-blue-400">
            My Journey
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Education
          </h2>
        </motion.div>

        <div className="relative mt-20">

          {/* Timeline Line */}

          <div className="absolute left-5 top-0 h-full w-1 bg-blue-500"></div>

          {portfolioData.education.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-16 mb-14"
            >

              <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">

                <FaGraduationCap />

              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-blue-500 transition">

                <h3 className="text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-blue-400 mt-2">
                  {item.institute}
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  {item.period}
                </p>

                <p className="text-gray-400 mt-4 leading-7">
                  {item.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;