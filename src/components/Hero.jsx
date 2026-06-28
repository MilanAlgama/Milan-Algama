import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa6";
import profile from "../assets/portfolio-img.png";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-400 uppercase tracking-[4px]">
            //Welcome
          </p>

          <h1 className="text-6xl lg:text-7xl font-bold mt-4">
            Hi,
            <br />
            I'm
            <span className="text-blue-500"> Milan Harsha</span>
          </h1>

          <h2 className="text-2xl text-gray-300 mt-8">
            <Typewriter
              words={[
                "ICT Undergraduate",
                "Cloud Enthusiast",
                "DevOps Learner",
                "Full Stack Developer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
            />
          </h2>

          <p className="mt-8 text-gray-400 leading-8">
            Passionate ICT undergraduate interested in Cloud Computing, DevOps,
            Full Stack Development, Docker, AWS and modern software engineering.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">
            <div className="flex items-center gap-5 mt-8">
              <a
                href="https://github.com/MilanAlgama"
                target="_blank"
                rel="noreferrer"
                className="text-3xl text-gray-400 hover:text-white transition duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-3xl text-gray-400 hover:text-[#0A66C2] transition duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-3xl text-gray-400 hover:text-white transition duration-300"
              >
                <FaXTwitter />
              </a>

              <a
                href="mailto:milanharsha28@gmail.com"
                className="text-3xl text-gray-400 hover:text-red-400 transition duration-300"
              >
                <FaEnvelope />
              </a>
            </div>

            <a
              href="/resume.pdf"
              className="border border-blue-500 px-7 py-4 rounded-xl flex items-center gap-3 hover:bg-blue-600 transition"
            >
              <FaDownload />
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-30 rounded-full"></div>

            <img
              src={profile}
              alt="Milan Harsha"
              className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-blue-500 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
