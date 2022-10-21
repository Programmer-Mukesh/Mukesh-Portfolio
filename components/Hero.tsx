import Image from "next/image";
import React from "react";
import { Cursor, Typewriter } from "react-simple-typewriter";
import BackgroungCircles from "./BackgroungCircles";
import myImage from "./../public/Mike.jpg";
import Link from "next/link";
type Props = {};

const Hero = (props: Props) => {
  const aboutHeadings = [
    "Hi, This is Mukesh Kumar",
    "I'm a Front-end developer",
    "Guy-who-loves-designing-web-pages.js",
    "<AndAlsoLikesPhotography/>",
  ];

  return (
    <div className="h-screen flex flex-col space-y-8 item-center justify-center text-center overflow-hidden">
      <BackgroungCircles />
      <div className="h-32 w-32 mx-auto">
        <Image
          src={myImage}
          alt="image"
          className="absolute rounded-full h-32 w-32 mx-auto object-cover"
          height={200}
          width={200}
        />
      </div>
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[12px] sm:tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-4xl lg:text-5xl font-semibold px-10">
          <span className="mr-3">
            <Typewriter words={aboutHeadings} loop={true} delaySpeed={2000} />
          </span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#project">
            <button className="heroButton">Project</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
