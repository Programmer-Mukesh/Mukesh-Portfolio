import Image from "next/image";
import React from "react";
import { Cursor, Typewriter } from "react-simple-typewriter";
import BackgroungCircles from "./BackgroungCircles";
import myImage from "./../public/Mike.jpg";
type Props = {};

const Hero = (props: Props) => {
  const aboutHeadings = [
    "Hi, This is Mukesh Kumar",
    "a <Software Engineer/>",
    "a Photographer",
    "an Artist",
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
      <h1>
        <Typewriter words={aboutHeadings} loop={true} delaySpeed={2000} />
        <Cursor cursorColor="#F7AB0A" />
      </h1>
    </div>
  );
};

export default Hero;
