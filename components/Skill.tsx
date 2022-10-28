import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
  logo?: string;
};

const Skill = ({ directionLeft, logo }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="rounded-full border border-gray-500 object-contain w-[60px] h-[60px] md:w-[70px] md:h-[70px]  filter group-hover:grayscale"
        src={logo}
      />
    </div>
  );
};

export default Skill;
