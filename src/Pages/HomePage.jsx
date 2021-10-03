import React, { useState, useEffect } from "react";
import axios from "axios";

import EntertainmentCardSlider from "../Componenets/Entertainment/EntertainmentSlider";
import HeroCarousel from "../Componenets/HeroCarousel/HeroCarouselComponent";
import PosterSider from "../Componenets/Posterslider/PosterComponent";

export default function HomePage() {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [premiereMovies, setPremiereMovies] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);
  

  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get("/movie/popular");
      setRecommendedMovies(getPopularMovies.data.results);
      console.log(getPopularMovies);
    };

    requestPopularMovies();
  }, []);

  useEffect(() => {
    const requestTopratedMovies = async () => {
      const getTopratedMovies = await axios.get("/movie/top_rated");
      setPremiereMovies(getTopratedMovies.data.results);
    };

    requestTopratedMovies();
  }, []);

  useEffect(() => {
    const requestUpcomingMovies = async () => {
      const getUpcomingMovies = await axios.get("/movie/upcoming");
      setOnlineStreamEvents(getUpcomingMovies.data.results);
    };

    requestUpcomingMovies();
  }, []);

  return (
    <>
      <HeroCarousel />
      <div className="px-12 py-10">
        <img
          className="w-full h-full"
          src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/lead-in-v3-collection-202102040828.png"
          alt="bookmark"
        />
      </div>
      <div className="mx-auto container md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 my-3">
          This is Entertainment
        </h1>
        <EntertainmentCardSlider />
      </div>

      <div className="container mx-auto md:px-12 my-8">
        <PosterSider
          title="Recommended Movies"
          subtitle="List of recommended movies"
          isDark={false}
          posterimg={recommendedMovies}
        />
      </div>

      <div className="bg-premiere-750 py-12 ">
        <div className="container md:px-12 my-8 flex flex-col mx-auto px-4 gap-3">
          <div>
            <img
              src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
              className="w-full h-full"
              alt="Rupay"
            />
          </div>
          <PosterSider
            title="Premiere"
            subtitle="Brand new releases every Friday"
            isDark={true}
            posterimg={premiereMovies}
          />
        </div>
      </div>

      <div className="container mx-auto md:px-12 my-12">
        <PosterSider
          title="Online Streaming Events"
          subtitle=""
          isDark={false}
          posterimg={onlineStreamEvents}
        />
      </div>

      <div className="container mx-auto md:px-12 my-12">
        <PosterSider
          title="Upcoming Movies"
          subtitle=""
          isDark={false}
          posterimg={recommendedMovies}
        />
      </div>
      {/* <div className="container mx-auto md:px-12 my-8"></div> */}
    </>
  );
}
