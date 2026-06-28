import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";

import {
  FaJava,
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
  FaAws
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiMysql,
  SiGithubactions,
  SiGooglecloud,
  SiC,
} from "react-icons/si";

const icons = {
  Java: <FaJava className="text-[#f89820] text-3xl" />,
  Python: <FaPython className="text-[#3776AB] text-3xl" />,
  C: <SiC className="text-[#00599C] text-3xl" />,
  JavaScript: <SiJavascript className="text-[#F7DF1E] text-3xl" />,
  React: <FaReact className="text-[#61DAFB] text-3xl" />,
  HTML: <FaHtml5 className="text-[#E34F26] text-3xl" />,
  CSS: <FaCss3Alt className="text-[#1572B6] text-3xl" />,
  "Tailwind CSS": <SiTailwindcss className="text-[#06B6D4] text-3xl" />,
  Docker: <FaDocker className="text-[#2496ED] text-3xl" />,
  Git: <FaGitAlt className="text-[#F05032] text-3xl" />,
  AWS: <FaAws className="text-[#FF9900] text-3xl" />,
  Azure: "☁️",
  "Google Cloud": <SiGooglecloud className="text-[#4285F4] text-3xl" />,
  MySQL: <SiMysql className="text-[#4479A1] text-3xl" />,
  "GitHub Actions": (
    <SiGithubactions className="text-[#2088FF] text-3xl" />
  ),
  "CI/CD": <SiGithubactions className="text-[#2088FF] text-3xl" />,
};

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-[#0B1120] py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="uppercase tracking-[6px] text-blue-400">
            What I Know
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Skills
          </h2>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mt-16">

          {portfolioData.skills.map((group,index)=>(

            <motion.div

              key={index}

              initial={{opacity:0,y:50}}

              whileInView={{opacity:1,y:0}}

              transition={{
                duration:.5,
                delay:index*.15
              }}

              viewport={{once:true}}

              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8"

            >

              <h3 className="text-2xl font-semibold text-blue-400 mb-6">
                {group.category}
              </h3>

              <div className="grid grid-cols-2 gap-4">

                {group.technologies.map((tech)=>(

                  <div

                    key={tech}

                    className="flex items-center gap-3 p-4 rounded-xl bg-[#111827] hover:bg-blue-600 transition duration-300"

                  >

                    <span className="text-2xl">
                      {icons[tech]}
                    </span>

                    <span>{tech}</span>

                  </div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;