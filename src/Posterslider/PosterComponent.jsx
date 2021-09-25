import React from 'react';
import Slider from 'react-slick';
import Posters from "../Componenets/Poster/Poster";


const PosterSider=(props) => {
    const { title, subtitle, posterimg, isDark } = props;
   
        const settings = {
          infinite: true,
          speed: 1000,
          slidesToShow: 5,
          slidesToScroll: 2,
        //   initialSlide: 1,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
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
            <div className={"flex flex-col items-start my-2"}>
              <h3 className={`text-2xl font-bold ${isDark ? "text-white":"text-gray-800"}`}>{title}</h3>
              <p className={`text-sm ${isDark ? "text-white":"text-gray-800"}`}>{subtitle}</p>
            </div>
            <Slider {...settings}>
              {posterimg.map((each) => (
                <Posters {...each} isDark={isDark} />
              ))}
            </Slider>
          </>
        );
      };
     
export default PosterSider ;
