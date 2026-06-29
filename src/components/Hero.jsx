import HeroOrbit from "./HeroOrbit";
import FloatingParticles from "./FloatingParticles";
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
            <div className="flex gap-5 mt-8">
              <a
                href="https://github.com/MilanAlgama"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:-translate-y-1 transition-all duration-300"
              >
                <FaGithub className="text-2xl text-white" />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:-translate-y-1 transition-all duration-300"
              >
                <FaLinkedin className="text-2xl text-[#0A66C2]" />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:-translate-y-1 transition-all duration-300"
              >
                <FaXTwitter className="text-2xl text-white" />
              </a>

              <a
                href="mailto:milanharsha28@gmail.com"
                className="w-12 h-12 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center hover:border-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:-translate-y-1 transition-all duration-300"
              >
                <FaEnvelope className="text-2xl text-red-400" />
              </a>
            </div>

            <a
              href="/resume.pdf"
              className="
                        group
                        flex
                        items-center
                        gap-3
                        px-7
                        py-4
                        rounded-xl
                        font-semibold
                        bg-gradient-to-r
                        from-blue-600
                        to-cyan-500
                        hover:from-cyan-500
                        hover:to-blue-600
                        transition-all
                        duration-500
                        shadow-[0_0_25px_rgba(59,130,246,0.4)]
                        hover:scale-105
                        "
            >
              <FaDownload />
              Download Resume
            </a>
            <a
              href="#contact"
              className="
                        group
                        px-7
                        py-4
                        rounded-xl
                        border
                        border-cyan-500
                        text-white
                        flex
                        items-center
                        gap-3
                        hover:bg-cyan-500
                        hover:text-black
                        transition-all
                        duration-300
                        hover:scale-105
                      "
            >
              Contact Me
              <span className="group-hover:translate-x-1 transition">→</span>
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
            <>
              <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

              <div className="absolute w-80 h-80 bg-cyan-500/20 rounded-full blur-2xl animate-ping opacity-20"></div>
            </>
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
              "
            />
          </div>
        </motion.div>
      </div>
      <ScrollIndicator />
    </section>
  );
}

export default Hero;
