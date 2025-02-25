import React from "react";
import { IoMdArrowForward, IoMdArrowUp } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 flex items-center justify-between bg-gradient-to-r from-[#0072ff] to-[#00c6ff] sm:px-[5rem] px-3 shadow">
      <div className="text-3xl">logo</div>
      <div className="flex gap-2 items-center">
        <p className="sm:text-2xl text-xl font-semibold">Contact Me</p>
        <button className="bg-gradient-to-br from-teal-400 to-blue-500 text-[#0A192F] hover:bg-gradient-to-tr hover:from-blue-500 hover:to-teal-400 hover:rotate-45 transition-all duration-300 py-3 sm:text-2xl text-xl px-3 rounded-full">
          <a href="#"><IoMdArrowForward /></a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
