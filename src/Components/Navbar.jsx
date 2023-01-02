import React from "react";

import Toggle from "./Toggle.jsx";

import { Link, NavLink } from "react-router-dom";

import { BsList } from "react-icons/bs";

import MenuList from "./MenuList.jsx";

function Navbar() {
  const [active, setActive] = React.useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div>
      <div className="bg-zinc-200 px-6 py-4  dark:bg-slate-800  text-light-mode items-center">
        <div className=" flex items-center  justify-between flex-wrap  dark:bg-slate-800">
          <Link to="/">
            <h1 className=" sm:text-3xl md:text-4xl font-thin dark:bg-slate-800 dark:text-white">
              Portfolio App
            </h1>
          </Link>

          <div className=" ml-auto pr-6">
            <Toggle />
          </div>

          <div className="dark:text-white text-4xl right-6 md:hidden top-6">
            <BsList onClick={showMenu} className="cursor-pointer" />
          </div>


            {/* this is navBar for width more than medium screen ie 833px for small screen it is hedden */}
          <ul className="sm:hidden md:flex md:gap-3 lg:gap-6 justify-end items-center  ">
            <li className="dark:text-white ">
                {/* NavLink is imported from BrowserRouter it's just like a link but has property of activeclassname which is usefull to  add css during its active */}
              <NavLink to="/" activeclassname="active">
                <h2 className="px-3 py-2 dark:hover:bg-gray-600 hover:bg-zinc-100 duration-300 rounded-3xl  text-lg  ">
                  About Me
                </h2>
              </NavLink>
            </li>

            <li className="dark:text-white ">
              <NavLink to="/mySocials" activeclassname="active">
                <h2 className="px-3 py-2 dark:hover:bg-gray-600 hover:bg-zinc-100 duration-300 rounded-3xl border-spacing-6 text-lg">
                  My Socials
                </h2>
              </NavLink>
            </li>

            <li className="dark:text-white">
              <NavLink to="/contactMe" activeclassname="active">
                <h2 className="px-3 py-2 dark:hover:bg-gray-600 hover:bg-zinc-100 duration-300 rounded-3xl border-spacing-6 text-lg">
                  Contact Me
                </h2>
              </NavLink>
            </li>

            <li className=" px-3 py-2  shadow-lg shadow-teal-500/40 hover:shadow-purple-500/70 bg-teal-500 text-white text-lg rounded-md hover:bg-gradient-to-b from-purple-500 to-pink-400 duration-500">
              <NavLink to="/resume" activeclassname="active">
                <h2>Resume </h2>
              </NavLink>
            </li>
          </ul>

          <MenuList showMenu={showMenu} active={active} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
