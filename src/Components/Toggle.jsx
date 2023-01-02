import React from "react";
import { ThemeContext } from "./themeContext";

import { BsSun } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <>
      <div>
        {theme === "dark" ? (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="py-3 px-3 hover:bg-gray-600 duration-300 rounded-3xl text-2xl dark:text-yellow-500 "
          >
            <BsSun />
          </button>
        ) : (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="py-3 px-3 hover:bg-zinc-100 duration-300 rounded-3xl dark:text-white text-2xl text-indigo-600/90 "
          >
            <BsFillMoonStarsFill />
          </button>
        )}
      </div>
    </>
  );
};

export default Toggle;
