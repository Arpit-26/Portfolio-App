import React from "react";
import { BsX } from "react-icons/bs";

import { NavLink } from "react-router-dom";

const MenuList = ({ showMenu, active }) => {
  return (
    <>

            {/* menue list for small screen sm:300px (min width) */}
      <ul
        className={
          active
            ? "flex-col flex items-center fixed inset-0 left-1/4 uppercase bg-zinc-800/40 backdrop-blur-lg gap-8 justify-center p-8 md:hidden"
            : "hidden" } >

        <BsX
          onClick={showMenu}
          className="cursor-pointer text-6xl dark:text-white right-6  top-6  absolute"
        />

        <li onClick={showMenu} className="dark:text-white ">
          <NavLink to="/" activeclassname="active">
            <h2 className="px-3 py-2 dark:hover:bg-gray-600 hover:bg-zinc-100 duration-300 rounded-3xl  text-lg  ">
              About Me
            </h2>
          </NavLink>
        </li>

        <li onClick={showMenu} className="dark:text-white ">
          <NavLink to="/mySocials" activeclassname="active">
            <h2 className="px-3 py-2 dark:hover:bg-gray-600 hover:bg-zinc-100 duration-300 rounded-3xl border-spacing-6 text-lg">
              My Socials
            </h2>
          </NavLink>
        </li>

        <li onClick={showMenu} className="dark:text-white">
          <NavLink to="/contactMe" activeclassname="active">
            <h2 className="px-3 py-2 dark:hover:bg-gray-600 hover:bg-zinc-100 duration-300 rounded-3xl border-spacing-6 text-lg">
              Contact Me
            </h2>
          </NavLink>
        </li>

        <li
          onClick={showMenu}
          className=" px-3 py-2  shadow-lg shadow-teal-500/40 hover:shadow-purple-500/70 bg-teal-500 text-white text-lg rounded-md hover:bg-gradient-to-b from-purple-500 to-pink-400 duration-500"
        >
          <NavLink to="/resume" activeclassname="active">
            <h2>Resume </h2>
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default MenuList;
