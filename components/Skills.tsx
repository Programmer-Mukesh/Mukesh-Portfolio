import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

const Skills = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.2,
      }}
      className="relative h-screen flex flex-col text-center  md:text-left md:flex-row px-5 justify-evenly items-center max-w-6xl mx-auto"
    >
      <h3 className="absolute top-20 sm:top-24 uppercase tracking-[20px] text-2xl text-gray-500">
        Skills
      </h3>
      <h3 className="absolute top-32 sm:top-36 uppercase tracking-[3px] text-sm text-gray-500">
        Hover over a skill for percentage proficiency
      </h3>

      <div className="grid grid-cols-4 gap-5 mt-10 md:mt-32">
        <Skill
          directionLeft={true}
          logo="https://seeklogo.com/images/H/html5-without-wordmark-color-logo-14D252D878-seeklogo.com.png"
          proficiency="90"
        />
        <Skill
          directionLeft={true}
          proficiency="80"
          logo="https://seeklogo.com/images/C/css-3-logo-023C1A7171-seeklogo.com.png"
        />
        <Skill
          directionLeft={true}
          proficiency="80"
          logo="https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png"
        />
        <Skill
          proficiency="80"
          logo="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3254274/react-icon-md.png"
          directionLeft={true}
        />

        <Skill
          proficiency="70"
          logo="https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png"
          directionLeft={true}
        />
        <Skill
          proficiency="75"
          logo="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png"
          directionLeft={true}
        />

        <Skill
          proficiency="70"
          directionLeft={true}
          logo="https://seeklogo.com/images/S/sass-logo-E41E7734A8-seeklogo.com.png"
        />
        <Skill
          proficiency="80"
          logo="https://seeklogo.com/images/M/material-ui-logo-5BDCB9BA8F-seeklogo.com.png"
          directionLeft={true}
        />
        <Skill
          proficiency="60"
          logo="https://seeklogo.com/images/G/git-logo-CD8D6F1C09-seeklogo.com.png"
          directionLeft={false}
        />
        <Skill
          proficiency="60"
          logo="https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png"
          directionLeft={false}
        />
        <Skill
          proficiency="50"
          logo="https://seeklogo.com/images/T/typescript-logo-B29A3F462D-seeklogo.com.png"
          directionLeft={false}
        />
        <Skill
          proficiency="80"
          logo="https://seeklogo.com/images/C/c-logo-43CE78FF9C-seeklogo.com.png"
          directionLeft={false}
        />
        <Skill
          proficiency="80"
          logo="https://seeklogo.com/images/D/datocms-logo-7A13CD5713-seeklogo.com.png"
          directionLeft={false}
        />
        <Skill
          proficiency="70"
          logo="https://seeklogo.com/images/R/react-native-logo-221C671C70-seeklogo.com.png"
          directionLeft={false}
        />
        <Skill
          proficiency="70"
          logo="https://seeklogo.com/images/P/prismic-logo-F6A173E6D0-seeklogo.com.png"
          directionLeft={false}
        />
      </div>
    </motion.div>
  );
};

export default Skills;
