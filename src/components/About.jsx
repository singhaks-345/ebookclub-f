import React from "react";
import Club from "../../public/Club.avif";
import { Link } from "react-router-dom";
function Abouts() {
  return (
    <>
      <div className="  mt-28 md:mt-28 flex flex-col items-center md:flex-row justify-center">
        <div className=" mt-[10px]  w-[250px] md:w-[500px] mx-80 md:mx-20  md:order-1 order-2 mt-[-120px]  mr-[350px]">
          <h4 className="text-sm pt-2 text-center text-green-500 ">ABOUT US</h4>
          <br />
          <h1
            className="  text-2xl 
           text-center md:text-4xl"
          >
            Online Book Club
          </h1>
          <p className="mt-8 mb-12">
            Established in 2025, BookClub is the best equipped ‘base-camp’ for
            journeys of the mind offering its customers the widest range of
            outstanding titles and consistently courteous and informed service
            for more than a century. Today, with stores in major metros, India’s
            first of its kind tea boutique, Cha Bar, India’s only bookstore to
            curate multiple literary festivals like Apeejay Kolkata Literary
            Festival, Apeejay Bangla Sahitya Utsob and Hindi Sahitya Utsav,
            Oxford Bookstore offers booklovers access to the very best in
            publishing enhanced by a variety of events which salute books,
            visual & performing arts and celebrate the word.
          </p>
          <Link
            to="/readmore"
            className="mt-28 bg-green-500 px-3 py-1 rounded-md text-white hover:bg-green-700 hover:scale-105"
          >
            READ MORE
          </Link>
        </div>
        <div className="mx-20 space-y- 96 md:mt-16 order-1  md:ml-20">
          <img src={Club} />
        </div>
      </div>
    </>
  );
}

export default Abouts;
