import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="relative h-screen flex flex-col text-center  md:text-left md:flex-row px-5 justify-center items-center max-w-6xl mx-auto">
      <h3 className="absolute top-20 sm:top-24 uppercase tracking-[20px] text-2xl text-gray-500">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        className="w-40 h-40 rounded-full mb-2 md:mb-0 flex-shrink-0 object-cover md:rounded-lg md:w-[250px] md:h-[250px]  lg:w-[330px] lg:h-[330px] md:mr-5 "
        src="https://avatars.githubusercontent.com/u/77101515?s=400&u=adc13a6fd748f4e69f7eb0f304a55f5a7aee44e9&v=4"
      ></motion.img>
      <div className="space-y-10 px-0 md:px-10 ">
        <h4 className="text-2xl font-semibold sm:text-4xl mt-4 md:mt-0">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/40">little</span>{" "}
          background
        </h4>
        <p className="text-base xs:mt-0">
          I'm Mukesh, currently working as a Software Engineer-1 at Carnation
          InfoTech. I have more than 1 year of experience working on Front-end
          Web Technologies like React, Redux, Next.js etc. I have completed my
          B.Tech in Information Technology from IET lucknow in 2021. I love
          designing web pages and love creating unique designs. I also
          passionate about photography and learning new technologies.
        </p>
      </div>
    </div>
  );
};

export default About;
