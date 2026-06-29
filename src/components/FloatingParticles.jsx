import { motion } from "framer-motion";

const particles = [
  { top: "8%", left: "20%" },
  { top: "18%", left: "75%" },
  { top: "25%", left: "50%" },
  { top: "35%", left: "10%" },
  { top: "42%", left: "90%" },
  { top: "55%", left: "15%" },
  { top: "65%", left: "80%" },
  { top: "72%", left: "45%" },
  { top: "85%", left: "30%" },
  { top: "90%", left: "70%" },
];

function FloatingParticles() {
  return (
    <>
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3 + index,
            repeat: Infinity,
          }}
          className="absolute h-2 w-2 rounded-full bg-cyan-500 dark:bg-cyan-400"
          style={particle}
        />
      ))}
    </>
  );
}

export default FloatingParticles;
