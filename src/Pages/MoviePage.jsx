import React from "react";
import Slider from "react-slick";

import { FaCcVisa, FaCcApplePay } from "react-icons/fa";

import MovieHero from "../Componenets/MovieHero/MovieHeroComponent";
import CastMembers from "../Componenets/Cast/CastComponent";
import PosterSider from "../Componenets/Posterslider/PosterComponent";


const MoviePage = () => {
  const settingsCast = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settingss = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
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
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const castdata = [
    {
      profile_path:
        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/margot-robbie-38083-28-01-2019-10-59-34.jpg",
      original_name: "Margot Robbie",
      role: "Harley Quinn",
    },
    {
      profile_path:
        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/margot-robbie-38083-28-01-2019-10-59-34.jpg",
      original_name: "Margot Robbie",
      role: "Harley Quinn",
    },
    {
      profile_path:
        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/margot-robbie-38083-28-01-2019-10-59-34.jpg",
      original_name: "Margot Robbie",
      role: "Harley Quinn",
    },
    {
      profile_path:
        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/margot-robbie-38083-28-01-2019-10-59-34.jpg",
      original_name: "Margot Robbie",
      role: "Harley Quinn",
    },
    {
      profile_path:
        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/margot-robbie-38083-28-01-2019-10-59-34.jpg",
      original_name: "Margot Robbie",
      role: "Harley Quinn",
    },
    {
      profile_path:
        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/margot-robbie-38083-28-01-2019-10-59-34.jpg",
      original_name: "Margot Robbie",
      role: "Harley Quinn",
    },
    {
      profile_path:
        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/margot-robbie-38083-28-01-2019-10-59-34.jpg",
      original_name: "Margot Robbie",
      role: "Harley Quinn",
    },
  ];

  const similarMovies = [
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00309402-pkhgxbxpmd-portrait.jpg",
      title: "The Suicide Squad",
      subtitle: "English",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00309402-pkhgxbxpmd-portrait.jpg",
      title: "The Suicide Squad",
      subtitle: "English",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00309402-pkhgxbxpmd-portrait.jpg",
      title: "The Suicide Squad",
      subtitle: "English",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00309402-pkhgxbxpmd-portrait.jpg",
      title: "The Suicide Squad",
      subtitle: "English",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00309402-pkhgxbxpmd-portrait.jpg",
      title: "The Suicide Squad",
      subtitle: "English",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00309402-pkhgxbxpmd-portrait.jpg",
      title: "The Suicide Squad",
      subtitle: "English",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00309402-pkhgxbxpmd-portrait.jpg",
      title: "The Suicide Squad",
      subtitle: "English",
    },
  ];

  return (
    <>
      <MovieHero />
      <div className="container my-12 px-4 lg:ml-20 lg:w-2/3">
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-bold text-gray-800">About the Movie</h3>
          <p className="text-l text-gray-800">
            Amanda Waller dispatch the Task Force X members to the Corto Maltese
            island to destroy Jotunheim, a Nazi-era prison and laboratory.
            Available in 4K.
          </p>
        </div>

        <div className="my-8">
          <hr />
        </div>
        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-3">
            Applicable Offers
          </h2>
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="flex item-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcVisa className="w-fill h-fill" />
              </div>
              <div className="flex flex-col item-start">
                <h3 className="text-gray-700 text-xl font-bold">
                  Visa Stream Offer
                </h3>
                <p className="text-gray-600">
                  Get 50% off up to INR 150 on all RuPay card* on BookMyShow
                  Stream.
                </p>
              </div>
            </div>
            <div className="flex item-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcApplePay className="w-full h-full" />
              </div>
              <div className="flex flex-col item-start">
                <h3 className="text-gray-700 text-xl font-bold">Filmy Pass</h3>
                <p className="text-gray-600">
                  Get 50% off up to INR 150 on all RuPay card* on BookMyShow
                  Stream.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-8">
          <hr />
        </div>
        <div className="my-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Cast and Crew
          </h2>

          <Slider {...settingsCast}>
            {castdata.map((castInfo) => (
              <CastMembers
                image={castInfo.profile_path}
                castName={castInfo.original_name}
                role={castInfo.role}
              />
            ))}
          </Slider>
        </div>
        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
        {/* <PosterSider config={settingss} title="BMS Exclusive" posters={similarMovies}/> */}
        <PosterSider  config={settingss} title="Recommended Movies" posterimg={similarMovies} />
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
                    <PosterSider
                        config={settingss}
                        title="BMS XCLUSIVE"
                        posterimg={similarMovies}
                        isDark={false}
                    />
                </div>
      </div>
    </>
  );
};
export default MoviePage;
