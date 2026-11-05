import React from "react";
import { useState, useEffect } from "react";
//import list from "../../public/list.json";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4000/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you
            <span className="text-orange-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
            In addition to books, bookstores may sell board games, educational
            games, journals, notebooks, toys, movies, albums, maps, and
            bookmarks. Used bookstores, or second-hand bookshops, buy and sell
            used books. Some modern bookstores sell books, coffee, and CDs.
          </p>
          <Link to="/">
            <button className=" hover:scale-105 mt-6 bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
