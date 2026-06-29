import HeroOrbit from "./HeroOrbit";
import ScrollIndicator from "./ScrollIndicator";
import { TypeAnimation } from "react-type-animation";
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
          <p className="text-blue-400 uppercase tracking-[4px]">//Welcome</p>

          <h1 className="text-6xl lg:text-7xl font-bold mt-4">
            Hi,
            <br />
            I'm
            <span className="text-blue-500"> Milan Harsha</span>
          </h1>

          <h2 className="text-2xl text-gray-300 mt-8">
            <TypeAnimation
              sequence={[
                "Aspiring Cloud Engineer",
                2000,
                "DevOps Enthusiast",
                2000,
                "Full Stack Developer",
                2000,
                "Lifelong Learner",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-2xl font-semibold text-cyan-400"
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
          <div className="relative w-[520px] h-[520px] flex items-center justify-center mx-auto overflow-visible">
            {" "}
            <HeroOrbit />
            <img
              src={profile}
              alt="Milan Harsha"
              className="
              relative
              z-10
              w-80
              h-80
              md:w-96
              md:h-96
              rounded-full
              object-cover
              border-4
              border-blue-500
              shadow-[0_0_60px_rgba(59,130,246,0.7)]
              "            />
          </div>
        </motion.div>
      </div>
      <ScrollIndicator />
    </section>
  );
}

export default Hero;
