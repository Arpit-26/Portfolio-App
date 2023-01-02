import React from "react";

function Resume() {
  return (
    <>
      <div className="lg:flex gap-11 p-11 ">
        <a href="1910991326-Arpit.pdf" download="1910991326-Arpit.pdf">
          <div className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300">
            <div className="text-center shadow-xl  p-10 rounded-xl my-10 dark:bg-slate-800 flex-1 hover:bg-gradient-to-b from-purple-600 to-pink-400">
              <div className="justify-center flex">
                <img
                  className=""
                  src="images/cv.png"
                  alt="Resume"
                  height={100}
                  width={100}
                />
              </div>
              <h2 className="text-lg pt-8 pb-1 dark:text-gray-400  text-center font-medium">
                Click to Download My Resume
              </h2>
              <p></p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default Resume;
