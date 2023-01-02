import React from "react";

function AbouteMe() {
  return (
    <>
      <div className="flex-row mt-6 pt-4">  
          {/* About Me Section */}
        <div className="text-center mt-6 ">
         
          <h2 className="text-5xl text-teal-600 font-medium ">
            Arpit Bhardwaj
          </h2>
          <h3 className="text-1xl pt-2 font-medium dark:text-zinc-400">
            Full-Stack Developer
           </h3>
          <p className=" text-gray-600 dark:text-gray-400 pt-6 px-6 mx-4">
            Hi, I am a full-stack developer, currently pursuing bachelor's in
            engineering degree from Chitkara University. During my degree, I
            have learned many skills like{" "}

            <span className="text-teal-700 font-medium">
              Java, Data structures, SQL, DBMS, HTML, CSS, JavaScript, React JS,
              and Object-oriented programming,
            </span>{" "}
            by using these skills I have built many projects like Achieveing
            Wellness(a website which helps to deal with mental health issues),
            Movie Finding Online app, Portfolio App. You can check them on my
            Git-Hub profile.
          </p>

        </div>
              {/* Image */}
        <div className="mt-14 pb-4">
          <div className="mx-auto rounded-2xl justify-center flex   bg-gradient-to-br from-teal-600 to-teal-300">
            <img className="py-2 pr-14" src="images/programmer.png" alt="" />
          </div>
        </div>
        
      </div>
    </>
  );
}

export default AbouteMe;
