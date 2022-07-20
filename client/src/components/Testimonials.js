import React from "react";

const Testimonials = () => {
  return (
    <div
      name="work"
      className="w-full h-full bg-black text-white text-center md:p-20 md:px-2 md:pb-32"
    >
      <p className="text-4xl font-bold inline border-b-4 border-violet-400">
        Testimonials
      </p>
      <div className=" max-w-screen-2xl min-w-0 mx-auto px-4 py-10 lg:pl-60 xl:px-14 xl:pl-80 bg-black grid sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        <div className="bg-violet-300 p-24 border-2 sm:p-14 sm:pb-5 text-center lg:px-9 lg:py-20">
          "Baljot was a real pleasure to work with. She designed and developed
          my personal portfolio. I already had a vision in mind but she made
          sure the website was easy for users to access".
        </div>
        <div className="bg-violet-300 p-24= border-2 sm:p-14 sm:pb-5 text-center lg:px-9 lg:py-20">
          "Baljot was a real pleasure to work with. She designed and developed
          my personal portfolio. I already had a vision in mind but she made
          sure the website was easy for users to access".
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
