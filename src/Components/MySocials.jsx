import React from "react";

function MySocials() {
  return (
    <>
      <div className="md:flex gap-11 p-11 ">
        <a href="https://leetcode.com/user3947B">
          <div className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300">
            <div className="text-center shadow-xl  p-10 rounded-xl my-10 dark:bg-slate-800 flex-1 hover:bg-gradient-to-b from-purple-600 to-pink-400">
              <div className="justify-center flex">
                <img
                  className=""
                  src="images/leetcode.png"
                  alt="LeetCode"
                  height={100}
                  width={100}
                />
              </div>
              <h2 className="text-lg pt-8 pb-1 dark:text-gray-400  text-center font-medium">
                LeetCode Profile
              </h2>
              <p></p>
            </div>
          </div>
        </a>

        <a href="https://github.com/Arpit-26">
          <div className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300">
            <div className="text-center shadow-xl p-10 rounded-xl my-10 dark:bg-slate-800 flex-1 hover:bg-gradient-to-b from-purple-600 to-pink-400  ">
              <div className="justify-center flex">
                <img
                  className=""
                  src="images/Project.png"
                  alt="Git-Hub"
                  width={100}
                  height={100}
                />
              </div>
              <h2 className=" text-lg pt-8 pb-1  dark:text-gray-400  text-center font-medium">
                Projects on Git-Hub
              </h2>
              <p></p>
            </div>
          </div>
        </a>

        <a href="https://www.linkedin.com/in/arpit-bhardwaj-53b2b5234">
          <div className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300">
            <div className="text-center shadow-xl p-10 rounded-xl my-10 dark:bg-slate-800 flex-1 hover:bg-gradient-to-b from-purple-600 to-pink-400">
              <div className="justify-center flex">
                <img
                  className=""
                  src="images/Linkedin-logo.png"
                  alt="LinkedIn"
                  width={100}
                  height={100}
                />
              </div>
              <h2 className="text-lg pt-8  pb-1  dark:text-gray-400 text-center font-medium">
                LinkedIn
              </h2>
              <p></p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default MySocials;
