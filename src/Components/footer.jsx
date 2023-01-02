import React from "react";

import { AiFillCode, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function footer() {
  return (
    <>
      <footer className=" bg-white pt-[10px] sm:p-6 dark:bg-gray-900">
        <hr className=" border-gray-200 sm:mx-auto dark:border-gray-700 mb-4" />

        <div className="sm:flex sm:items-center sm:justify-between ">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 ">
            Email :- arpit1326.cse19@chitkara.edu.in
          </span>

          <div className="flex space-x-6 sm:justify-center sm:mt-0 ">
            
            {/* LinkedIn footer icon */}
            <a
              href="https://www.linkedin.com/in/arpit-bhardwaj-53b2b5234"
              className="text-xl hover:text-black to text-gray-400 dark:hover:text-purple-500"
            >
              <AiFillLinkedin />
            </a>

              {/* Git-Hub footer icon */}
            <a
              href="https://github.com/Arpit-26"
              className="text-xl hover:text-black to text-gray-400 dark:hover:text-purple-500"
            >
              <AiFillGithub />
            </a>

              {/* leetCode Footer Icon */}
            <a
              href="https://leetcode.com/user3947B/"
              className="text-xl hover:text-black to text-gray-400 dark:hover:text-purple-500"
            >
              <AiFillCode />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default footer;
