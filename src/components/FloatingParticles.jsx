import { motion } from "framer-motion";

const particles = [
  { top: "10%", left: "15%" },
  { top: "20%", left: "85%" },
  { top: "70%", left: "12%" },
  { top: "80%", left: "88%" },
  { top: "40%", left: "5%" },
  { top: "50%", left: "95%" },
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
          className="absolute w-2 h-2 rounded-full bg-cyan-400"
          style={particle}
        />
      ))}
    </>
  );
}

export default FloatingParticles;