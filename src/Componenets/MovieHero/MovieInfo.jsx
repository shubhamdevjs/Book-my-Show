import React from "react";

const MovieInfo = ({ movie }) => {
  const genres = movie.genres?.map(({ name }) => name).join(", ");

  return (
    <>
      <div className="flex flex-col gap-8">
        <h1 className="text-white text-5xl font-bold">
          {movie.origianl_title}
        </h1>
        <div className="flex flex-col gap-5 text-white">
          <h4>4K rating</h4>
          <h4>Languages: English </h4>
          <h4>
            {movie.runtime} min • {genres}{" "}
          </h4>
        </div>
        <div className="flex items-center gap-3 w-full">
          <button
            // onClick={rentMovies}
            className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg"
          >
            Rent ₹149
          </button>
          <button
            // onClick={butMovies}
            className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg"
          >
            Buy ₹599
          </button>
        </div>
      </div>
    </>
  );
};
export default MovieInfo;
