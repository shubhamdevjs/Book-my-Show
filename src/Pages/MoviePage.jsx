import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import { useParams } from "react-router";
import axios from "axios";  

//icons
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";

//components
import MovieHero from "../Componenets/MovieHero/MovieHeroComponent";
import CastMembers from "../Componenets/Cast/CastComponent";
import PosterSider from "../Componenets/Posterslider/PosterComponent";

//context
import { useContext } from "react/cjs/react.development";
import { MovieContext } from "../Context/MovieContext";


const MoviePage = () => {

const { movie } = useContext(MovieContext);

    const { id } = useParams();
    const [cast, setCast] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);
    const [recommended, setRecommended] = useState([]);

    useEffect(() => {
        const requestCast = async () => {
          const getCast = await axios.get(`/movie/${id}/credits`);
          setCast(getCast.data.cast);
        };
        requestCast();
    }, [id]);

    useEffect(() => {
        const requestSimilarMovies = async () => {
            const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
            setSimilarMovies(getSimilarMovies.data.results);
        };
        requestSimilarMovies();
    }, [id]);

    useEffect(() => {
        const requestRecommendedMovies = async () => {
            const getRecommendedMovies = await axios.get(
                `/movie/${id}/recommendations`
            );
            setRecommended(getRecommendedMovies.data.results);
        };
        requestRecommendedMovies();
    }, [id]);


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

 

  return (
    <>
      <MovieHero />
      <div className="container my-12 px-4 lg:ml-20 lg:w-2/3">
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-bold text-gray-800">About the Movie</h3>
          <p className="text-l text-gray-800">
            {movie.overview}
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
            {cast.map((castInfo) => (
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
                        posterimg={recommended}
                        isDark={false}
                    />
                </div>
      </div>
    </>
  );
};
export default MoviePage;
