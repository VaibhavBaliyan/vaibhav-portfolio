import { motion } from "framer-motion";

// Variants
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// Calculating reverseIndex
const reverseIndex = (index) => {
  const totalSteps = 6; // Total number of steps
  return totalSteps - index - 1; // Reverse the index
};

const Stairs = () => {
  return (
    <>
      {/* renders 6 motion divs , each representing a step of stairs.
    Each div will have same animation defined by the stairAnimation object.
    The delay for each div is calculated dynamically base on it's reversed index, 
    creating a staggered effect with decreasing delay for each subsiquent step. */}
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;
