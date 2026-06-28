import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaLaptopCode,
  FaCloud,
  FaBriefcase,
} from "react-icons/fa";

function About() {
  const cards = [
    {
      icon: <FaUserGraduate size={35} />,
      title: "Education",
      description:
        "BSc ICT Undergraduate at the University of Sri Jayewardenepura and HND in Network Engineering & Cyber Security at ICBT Campus.",
    },
    {
      icon: <FaLaptopCode size={35} />,
      title: "Development",
      description:
        "Learning Java, Python, React, MySQL, Full Stack Development and Object-Oriented Programming.",
    },
    {
      icon: <FaCloud size={35} />,
      title: "Cloud & DevOps",
      description:
        "Currently learning AWS, Docker, CI/CD, Azure and Google Cloud Platform while expanding my cloud engineering knowledge.",
    },
    {
      icon: <FaBriefcase size={35} />,
      title: "Experience",
      description:
        "Worked as an Assistant Production at Innodata Lanka Pvt Ltd, gaining industry experience in a professional environment.",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-[#0B1120] flex items-center py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[6px] text-blue-400">
            Get To Know Me
          </p>

          <h2 className="text-5xl font-bold mt-3">
            About Me
          </h2>

          <p className="mt-8 text-gray-400 max-w-4xl mx-auto leading-8 text-lg">
            I'm Milan Harsha, an ICT undergraduate passionate about Cloud
            Computing, DevOps, Full Stack Development, and modern software
            engineering. I enjoy learning emerging technologies and building
            practical software solutions while continuously improving my
            technical skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {cards.map((card, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-blue-500 hover:scale-105 transition duration-300"
            >

              <div className="text-blue-400">
                {card.icon}
              </div>

              <h3 className="text-2xl font-semibold mt-5">
                {card.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
                {card.description}
              </p>

            </motion.div>

          ))}

        </div>
      </div>
    </section>
  );
}

export default About;