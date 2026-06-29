import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Logo */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-blue-500">
              Milan<span className="text-white">.</span>
            </h2>

            <p className="text-gray-400 mt-2">
              Cloud • DevOps • Full Stack
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6 text-gray-400">

            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>

            <a href="#education" className="hover:text-blue-400 transition">
              Education
            </a>

            <a href="#skills" className="hover:text-blue-400 transition">
              Skills
            </a>

            <a href="#experience" className="hover:text-blue-400 transition">
              Experience
            </a>

            <a href="#projects" className="hover:text-blue-400 transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>

          </div>

          {/* Social Icons */}
          <div className="flex gap-4">

            <a
              href="https://github.com/MilanAlgama"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:scale-110 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all"
            >
              <FaGithub className="text-xl" />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:scale-110 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all"
            >
              <FaLinkedin className="text-xl text-[#0A66C2]" />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:scale-110 hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all"
            >
              <FaXTwitter className="text-xl" />
            </a>

            <a
              href="mailto:milanharsha28@gmail.com"
              className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:scale-110 hover:border-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all"
            >
              <FaEnvelope className="text-xl text-red-400" />
            </a>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-3">

          <p>
            © {year} Milan Harsha. All Rights Reserved.
          </p>

          <p>
            Built with using React, Tailwind CSS & Framer Motion
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;