import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div className="w-full h-screen bg-black text-white">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full lg:px-40 xl:px-12">
        <p className="">HI MY NAME IS</p>
        <h1 className="text-4xl sm:text-6xl font-bold">Baljot Kaur</h1>
        <h2 className="text-4xl sm:text-6xl font-bold">
          I'm a Full Stack Developer
        </h2>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-violet-300 hover:border-violet-300">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
      <div className="before:absolute before:left-2/4 w-40 h-20"></div>
    </div>
  );
};

export default Home;
