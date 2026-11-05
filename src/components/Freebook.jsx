import React from "react";
//import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import Cards from "./Cards";
function Freebook() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://ebookclub-b.vercel.app/book");

        const DATA = res.data.filter((data) => data.category === "Free");
        console.log(DATA);
        setBook(DATA);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  //const filterData = list.filter((data) => data.category === "Free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="text-xl pb-2 font-semibold">
            <span className="text-orange-700">Free Offered Courses</span>
          </h1>
          <p>
            Bookshop.org works to connect readers with independent booksellers
            all over the world. We believe local bookstores are essential
            community hubs.
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {book.map((items) => (
              <Cards item={items} key={items._id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
