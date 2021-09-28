import React, { useState } from "react";

const MovieHero = () => {
  const [movie] = useState({
    id: "asdf",
    original_tite: "Fast and Furious 9",
    overview:
      "2h 14m • Action , Adventure , Comedy , Sci-Fi • 18+ • 5 Aug, 2021",
    backdrop_path:
      "https://in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/the-suicide-squad-et00309402-27-09-2021-01-23-30.jpg",
    poster_path:
      "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-suicide-squad-et00309402-27-09-2021-01-23-30.jpg",
  });

  return (
    <>
      <div>
        {/* mobile and tab sized devices */}
        <div className="lg:hidden w-full">
          <img
            src={movie.poster_path}
            alt="poster cover"
            className="rounded m-4"
            style={{
              width: "calc(100% - 2rem)",
            }}
          />
        </div>
        <div className=" lg:hidden flex flex-col gap-3">
          <div className="px-4 lg:hidden flex flex-col gap-2 text-black">
            <h4>4K rating</h4>
            <h4>Languages: English </h4>
            <h4>{movie.overview}</h4>
          </div>
          <div className="flex items-centre">

          </div>
        </div>
      </div>
    </>
  );
};

export default MovieHero;
