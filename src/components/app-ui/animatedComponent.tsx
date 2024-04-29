"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const childStyle = `w-[40px] top-[-40px] h-[40px] lg:h-[100px] lg:w-[100px] bg-gray-600 absolute lg:top-[-100px] rounded-md`;

const AnimatedComponent = () => {
  return (
    <motion.div
      className="w-[250px] h-[5px] lg:w-[500px] bg-gray-300 relative after:absolute after:left-[50%]  after:h-[15px] after:w-[15px] after:rounded-full after:bg-inherit"
      animate={{
        rotate: [-30, 0, 30],
        origin: "center",
        transition: {
          repeat: Infinity,
          duration: 1,
          repeatType: "reverse",
          delay: 1,
          staggerChildren: 1,
          stiffness: 2,
        },
      }}
    >
      <motion.div
        className={cn(childStyle, "left-0 bg-orange-500")}
        animate={{
          y: [0, 0, -150],
          transition: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1,
            delay: 1,
          },
        }}
      ></motion.div>
      <motion.div
        className={cn(childStyle, "right-0 bg-blue-700")}
        animate={{
          y: [-150, 0, 0],
          transition: {
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1.5,
            duration: 1,
          },
        }}
      ></motion.div>
    </motion.div>
  );
};

export default AnimatedComponent;
