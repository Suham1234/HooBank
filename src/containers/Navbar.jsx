import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  return (
    <div className="flex  items-center justify-between w-full py-6 fixed left-0 top-0 right-0 sm:px-16 px-6 border-b-[1px] border-slate-600/50 z-50 backdrop-blur-md" >
      <div >
        <img src={logo} alt="logo" width={124} />
      </div>

      <div className="sm:flex hidden">
        {navLinks.map((item, index) => (
          <a
            className={`${index === navLinks.length - 1 ? "mr-0" : "mr-10"} ${location.hash === '#'+item.id? 'text-cyan-300 font-semibold':'text-slate-400'} font-poppins text-lg`}
            href={`#${item.id}`}
          >
            {item.title}
          </a>
        ))}
      </div>

      <div className="sm:hidden flex flex-1 justify-end items-center relative">
        <button
          type="button"
          onClick={() => setToggle((prev) => !prev)}
          className=""
        >
          <img
            src={toggle ? close : menu}
            height={28}
            width={28}
            className="object-contain"
          />
        </button>
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } flex-col items-end absolute top-10 bg-black-gradient p-4 sidebar rounded-lg`}
        >
          {navLinks.map((item, index) => (
            <a href={`#${item.id}`} className={`my-2 ml-10 mr-2 font-medium font-poppins bg-transparent ${location.hash === '#'+ item.id? 'text-cyan-500 font-bold': 'text-slate-500'} `}>
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
