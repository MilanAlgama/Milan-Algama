import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const navLinks = [
  { title: "About", id: "about" },
  { title: "Education", id: "education" },
  { title: "Skills", id: "skills" },
  { title: "Experience", id: "experience" },
  { title: "Projects", id: "projects" },
  { title: "Contact", id: "contact" },
];

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-blue-500">
            Milan<span className="text-white">.</span>
          </h1>
          <span className="text-xs text-gray-400">
            Cloud • DevOps • Full Stack
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((item) => (
            <li
              key={item.id}
              className="text-gray-300 hover:text-blue-400 transition duration-300 cursor-pointer"
            >
              <Link
                to={item.id}
                smooth={true}
                duration={500}
                offset={-80}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setToggle(!toggle)}
          className="md:hidden text-2xl text-white"
        >
          {toggle ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {toggle && (
        <div className="md:hidden bg-[#111827]">
          <ul className="flex flex-col items-center py-6 gap-6">
            {navLinks.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.id}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setToggle(false)}
                  className="text-gray-300 hover:text-blue-400 cursor-pointer"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;