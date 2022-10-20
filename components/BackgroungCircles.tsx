import React from "react";
import { motion } from "framer-motion";

type Props = {};

const BackgroungCircles = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className=" absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className=" absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 " />
      <div className=" absolute border border-[#333333] rounded-full h-[480px] w-[480px] mt-52 " />
      <div className=" absolute border border-[#F7AB0A] rounded-full h-[620px] w-[620px] mt-52 animate-pulse opacity-20" />
      <div className=" absolute border border-[#333333] rounded-full h-[780px] w-[780px] mt-52 " />
    </motion.div>
  );
};

export default BackgroungCircles;
