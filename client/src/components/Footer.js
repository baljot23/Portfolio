import React from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Carousel from "./Carousel";

const Learnwebdev = () => {
  return (
    <div
      name="work"
      className="w-full h-full bg-neutral-800 text-white text-center md:p-20 md:px-10 lg:px-60 pt-10"
    >
      <div className="flex w-full h-full text-center justify-center text-4xl font-bold pb-12 sm:pl-9  ">
        <div className="sm:mx-full sm:pr-5">
          <FaLinkedin />
        </div>
        <div className="sm:mx-full sm:pr-5">
          <FaGithub />
        </div>
        <div className="sm:mx-full sm:pr-5">
          <HiOutlineMail />
        </div>
        <div className="sm:mx-full sm:pr-5">
          <BsFillPersonLinesFill />
        </div>
      </div>
      <div className="">
        <div className="h-full sm:w-96 sm:mx-auto lg:mx-16 md:mx-40 xl:mx-40">
          <Carousel />
        </div>
        <div className="border-2 w-full p-44"></div>
      </div>
    </div>
  );
};

export default Learnwebdev;
