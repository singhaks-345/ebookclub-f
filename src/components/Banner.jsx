import React from "react";
import bannersss from "../../public/bannersss.jpg";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className=" w-full order-2 md:order-1 md:w-1/2   mt-12 md:mt-32">
          <div className="space-y-12">
            {" "}
            <h1 className="text-4xl font-bold">
              Hello,welcome to here to learn something
              <span className="text-orange-500"> new everyday !!!</span>
            </h1>
            <p className="sem-bold">
              Every purchase at More Than Words supports our non profit mission
              to empower youth with job training. Our full used book collection
              includes gently-used books from our generous donors and are
              curated by the youth who run the business
            </p>
            {/*<span className="text-green-400"> {text}</span>
            <span className="color-blue-500">
              {" "}
              <Cursor />
            </span>*/}
            {/*<label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>*/}
          </div>
          {/*} <button className="btn btn-primary   hover:scale-105 mt-6">
            Send Email
          </button>*/}
          <h1 className="py-8 text-3xl  ">
            <b className="h-40">
              <marquee direction="left" onMouseOver="stop" onMouseOut="start">
                {" "}
                <span className="text-orange-600"> Meet Your next </span>{" "}
                <span className="text-yellow-400">
                  <i>favorite book .....</i>
                </span>
              </marquee>
            </b>
          </h1>
        </div>

        <div className="  space-y- 96 md:mt-16  md:ml-20 order-1  w-full md:w-1/2">
          <img src={bannersss} className="md:w-98 md:h-96" alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
