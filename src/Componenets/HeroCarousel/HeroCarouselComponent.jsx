import React, { useEffect, useState } from "react";
import HeroSlider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import { NextArrow, PrevArrow } from "./ArrowComponenet";

function NextArrow(props) {
  // const { className, style, onClick } = props;
  return (
    <div
      className={props.className}
      style={{ ...props.style, display: "block", background: "red" }}
      onClick={props.onClick}
    />
  );
}

function PrevArrow(props) {
  // const { className, style, onClick } = props;
  return (
    <div
      className={props.className}
      style={{ ...props.style, display: "block", background: "green" }}
      
      onClick={props.onClick}
    />
  );
}

const HeroCarousel = () => {
  const [images, setImages] = useState([
    "https://in.bmscdn.com/promotions/cms/creatives/1632074768803_trufflehunters_1240x300.jpg",
    "https://in.bmscdn.com/promotions/cms/creatives/1631989403120_banneradaptnewcreativematrixfightnight_webshowcase_1240x300.jpg",
    "https://in.bmscdn.com/promotions/cms/creatives/1630993174880_rannutsavpromotionalbanners_webshowcase_1240x300.jpg",
    "https://in.bmscdn.com/promotions/cms/creatives/1631025243018_basteachersdaycampaign_webshowcase_1240x300.jpg",
  ]);

  const settingsLG = {
    arrows: true,
    autoplay: true,
    centerMode: true,
    centerPadding: "20px",
    slidesToShow: 1,
    infinite: true,
    slideToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  const settings = {
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    slideToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {images.map((image) => (
            <div className="w-full h-56 md:h-80 py-3">
              <img
                src={image}
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
                src={image}
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
