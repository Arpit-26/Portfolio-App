import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {

  const form = useRef();
  const [result, setResult] = React.useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6j5dued",
        "template_ydunx5g",
        form.current,
        "1heFuPFRPZWE4O1Kz"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    setResult(true);
  };

  setTimeout(() => {
    setResult(false);       //function will set result false again after 6 sec.
  }, 6000);



  return (
    <>
      <section className="py-4 mt-8 flex justify-around pb-[11rem]  ">
        <div className="pt-[80px] hidden md:block ">
          <img src="images/mail.png" height={400} width={300} alt=""></img>
        </div>

        <div className="md:justify-end mt-6">
          <div className="md:w-full  p-6 bg-gray-100 dark:bg-gray-800 rounded-md shadow-xl md:shadow-teal-800/60 md:ring-2 md:ring-teal-600 lg:max-w-xl">
            <h1 className="mb-4 text-3xl font-semibold text-center text-teal-500 uppercase">
              Contact Form
            </h1>

            <form ref={form} onSubmit={sendEmail} className="">
              <div className="mb-2">
                <label>
                  <span className="text-gray-600 dark:text-gray-400">Name</span>
                </label>
                <input
                  type="text"
                  name="user_name"
                  className="w-full block px-[90px] py-2 mt-2 
                            dark:bg-gray-700
                            border-gray-300 
                            rounded-md 
                            shadow-sm 
                            dark:text-white
                            focus:border-teal-200 
                            focus:ring 
                            focus:ring-teal-300 
                            focus:ring-opacity-50"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="mb-2">
                <label>
                  <span className="text-gray-600 dark:text-gray-400">
                    Email address
                  </span>
                </label>
                <input
                  type="email"
                  name="user_email"
                  className="w-full block px-9 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-teal-200 focus:ring focus:ring-teal-300  focus:ring-opacity-50 dark:bg-gray-700 dark:text-white"
                  placeholder="arpit1326.cse19@chitkara.edu.in"
                  required
                />
              </div>

              <div>
                <label>
                  <span className="text-gray-600 dark:text-gray-400">
                    Message
                  </span>
                  <textarea
                    name="message"
                    className="block w-full mt-2 px-6 py-6 border-gray-300 rounded-md shadow-sm focus:border-teal-200  focus:ring focus:ring-teal-300  focus:ring-opacity-50 dark:bg-gray-700 dark:text-white"
                    rows="5"
                    required
                  />
                </label>
              </div>

              <div className="mt-6">
                <input
                  type="submit"
                  value="Send"
                  className="
                                    h-10
                                    px-5
                                    text-white
                                    bg-teal-400
                                    rounded-lg
                                    transition-colors
                                    duration-150
                                    focus:shadow-outline
                                    hover:bg-teal-600"
                />
              </div>
            </form>
          </div>

              {/* this Message will be displayed after the result has been set true for 6 sec */}
          {result ? (
            <div className=" text-center mt-[20px] max-w-2xl">
              <h1 className="text-2xl text-purple-600 font-semibold">
                Message sent successfully !
              </h1>
              <p className=" pt-2 animate-pulse text-purple-500">
                I will contact you soon.
              </p>
            </div>
          ) : null}


        </div>
      </section>
    </>
  );
};

export default ContactMe;
