import Bk from "./Pictures/Bk.png";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import React, { useState } from "react";

const Navbar = () => {
  const [navigation, setNavigation] = useState(false);
  const handleClick = () => setNavigation(!navigation);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-10 bg-black text-gray-300 z-10">
      <div>
        <img
          src={Bk}
          style={{
            width: "100px",
            height: "100px",
          }}
        />
      </div>

      {/* menu */}

      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!navigation ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !navigation
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 ">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-violet-300">
            <a
              className="flex justify-between items-center w-full text-black font-bold"
              href="/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-violet-300">
            <a
              className="flex justify-between items-center w-full text-black font-bold "
              href="/"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-violet-300">
            <a
              className="flex justify-between items-center w-full text-black font-bold "
              href="/"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-violet-300">
            <a
              className="flex justify-between items-center w-full text-black font-bold"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
