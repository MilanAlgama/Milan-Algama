import { motion } from "framer-motion";

function ScrollIndicator() {
  return (
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{
        repeat: Infinity,
        duration: 1.5,
      }}
      className="flex justify-center mt-16"
    >
      <div className="w-7 h-12 border-2 border-blue-400 rounded-full flex justify-center">
        <div className="w-1 h-3 bg-blue-400 rounded-full mt-2"></div>
      </div>
    </motion.div>
  );
}

export default ScrollIndicator;