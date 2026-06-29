import { motion } from "framer-motion";
import {
  FaAws,
  FaDocker,
  FaReact,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";

const icons = [
  {
    icon: <FaAws />,
    className: "text-orange-400",
    style: { top: "-25px", left: "50%", transform: "translateX(-50%)" },
  },
  {
    icon: <FaDocker />,
    className: "text-blue-400",
    style: { top: "50%", right: "-25px", transform: "translateY(-50%)" },
  },
  {
    icon: <FaReact />,
    className: "text-cyan-400",
    style: { bottom: "-25px", left: "50%", transform: "translateX(-50%)" },
  },
  {
    icon: <FaGitAlt />,
    className: "text-orange-500",
    style: { top: "50%", left: "-25px", transform: "translateY(-50%)" },
  },
  {
    icon: <FaPython />,
    className: "text-yellow-400",
    style: { top: "15%", left: "12%" },
  },
];

function HeroOrbit() {
  return (
    <>
      {icons.map((item, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -10, 0],
            x: [0, 6, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.3,
          }}
          style={item.style}
          className={`absolute z-20 text-3xl ${item.className}`}
        >
          {item.icon}
        </motion.div>
      ))}
    </>
  );
}

export default HeroOrbit;