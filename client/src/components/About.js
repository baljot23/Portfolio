import React from "react";
import Skills from "./Skills";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full bg-black text-white md:p-16 md:px-2 lg:px-36   "
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-12 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 sm:pl-44 ">
            <p className="text-4xl font-bold inline border-b-4 border-violet-400">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:txt-right text-4xl font-bold ">
            <p>Hi. I'm Baljot, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I'm a certified Web Developer and a self-taught Graphic Designer.
              Mainly a Front-End Developer whose open to obtaining Backend
              experience.
            </p>
          </div>
        </div>
        <div>
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default About;
