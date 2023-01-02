import "./App.css";
import React from "react";



import { Routes, Route } from "react-router-dom";

import AbouteMe from "./Components/AbouteMe";
import MySocials from "./Components/MySocials";
import Resume from "./Components/Resume";
import Navbar from "./Components/Navbar";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/footer";



function App() {
  return (
    <>
      <div>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-all">
          <Navbar />
            {/* BrowserRouter code */}
          <Routes>
            <Route exact path="/" element={<AbouteMe />}></Route>
            <Route exact path="/mySocials" element={<MySocials />}></Route>
            <Route exact path="/contactMe" element={<ContactMe />}></Route>
            <Route exact path="/resume" element={<Resume />}></Route>
          </Routes>
        </div>




          {/* footer Component here */}
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
