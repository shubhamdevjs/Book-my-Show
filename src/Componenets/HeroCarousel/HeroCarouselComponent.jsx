import React, { useState, useEffect } from "react";
import HeroSlider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

// import { NextArrow, PrevArrow } from "./ArrowComponenet";

// function NextArrow(props) {
//   // const { className, style, onClick } = props;
//   return (
//     <>
//       <div
//         className={props.className}
//         style={{ ...props.style, background: "red" }}
//         onClick={props.onClick}
//       />
//     </>
//   );
// }

// function PrevArrow(props) {
//   // const { className, style, onClick } = props;
//   return (
//     <>
//       <div
//         className={props.className}
//         style={{ ...props.style, display: "block", background: "green" }}
//         onClick={props.onClick}
//       />
//     </>
//   );
// }

const HeroCarousel = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const requestNowPlayingMovies = async () => {
      const getImages = await axios.get("/movie/now_playing");
      setImages(getImages.data.results);
    };

    requestNowPlayingMovies();
  }, []);

  const settingsLG = {
    centerMode: true,
    centerPadding: "200px",
    arrows: true,
    // dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 500,
    // autoplaySpeed: 1000,
    cssEase: "linear",
  };

  const settings = {
    centerMode: true,
    centerPadding: "20px",

    Infinity: true,
    slidesToShow: 1,
    // slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 1000,
    // cssEase: "linear"
  };
  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {images.map((image) => (
            <div className="w-full h-56 md:h-80 py-3">
              <img
                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                alt="Hero Banner"
                className="w-full h-full rounded-md object-center "
              />
            </div>
          ))}
        </HeroSlider>
      </div>
      <div className="hidden lg:block">
        <HeroSlider {...settingsLG}>
          {images.map((image) => (
            <div className="w-full h-96 px-2 py-3">
              <img
                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                alt="Hero Banner"
                className="w-full h-full rounded-md object-center "
              />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousel;
