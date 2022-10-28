import React from "react";
import ExperienceCard from "./ExperienceCard";

type Props = {};

const WorkExperience = (props: Props) => {
  return (
    <div className="relative h-screen flex flex-col text-center md:text-left md:flex-row px-10 sm:px-5 justify-evenly items-center max-w-6xl mx-auto">
      <h3 className="absolute top-20 sm:top-24 uppercase tracking-[20px] text-2xl text-gray-500">
        Experience
      </h3>
      <div className="flex w-full space-x-5 overflow-x-scroll p-10  justify-center sm:mt-12">
        <ExperienceCard />
      </div>
    </div>
  );
};

export default WorkExperience;
