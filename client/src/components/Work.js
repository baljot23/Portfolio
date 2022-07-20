import React from "react";
import WorkCards from "./WorkCards";
import Image1 from "./Pictures/Image1.jpg";
import Image2 from "./Pictures/Image2.jpg";
import Image3 from "./Pictures/Image3.jpg";
import Computer1 from "./Pictures/Computer1.jpg";
import Computer2 from "./Pictures/Computer2.jpg";
import Computer3 from "./Pictures/Computer3.jpg";

const Work = () => {
  return (
    <div
      name="work"
      className="w-full h-full bg-black text-white text-center md:p-16 md:px-2 sm:pt-32 px-2"
    >
      <p className="text-4xl font-bold inline border-b-4 border-violet-400">
        My Work
      </p>
      <div className=" max-w-screen-2xl min-w-0 mx-auto px-4 py-16 bg-black grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <WorkCards bg={Image1} text="Scenery1" />
        <WorkCards bg={Image2} text="Scenery1" />
        <WorkCards bg={Image3} text="Scenery1" />
        <WorkCards bg={Computer1} text="Scenery1" />
        <WorkCards bg={Computer2} text="Scenery1" />
        <WorkCards bg={Computer3} text="Scenery1" />
      </div>
    </div>
  );
};

export default Work;
