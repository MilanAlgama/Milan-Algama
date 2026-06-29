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
      <div className="flex h-12 w-7 justify-center rounded-full border-2 border-blue-500 dark:border-blue-400">
        <div className="mt-2 h-3 w-1 rounded-full bg-blue-500 dark:bg-blue-400"></div>
      </div>
    </motion.div>
  );
}

export default ScrollIndicator;
