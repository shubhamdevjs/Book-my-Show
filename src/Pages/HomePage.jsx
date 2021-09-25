import React from "react";
import EntertainmentCardSlider from "../Componenets/Entertainment/EntertainmentSlider";
import HeroCarousel from "../Componenets/HeroCarousel/HeroCarouselComponent";
import PosterSider from "../Posterslider/PosterComponent";

export default function HomePage() {
  const Recommended = [
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137312-qszmhzktyk-portrait.jpg",
      title: "Fast and Furious 9",
      subtitle: "Action / Adventure / Crime / Thriller",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137312-qszmhzktyk-portrait.jpg",
      title: "Fast and Furious 9",
      subtitle: "Action / Adventure / Crime / Thriller",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137312-qszmhzktyk-portrait.jpg",
      title: "Fast and Furious 9",
      subtitle: "Action / Adventure / Crime / Thriller",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137312-qszmhzktyk-portrait.jpg",
      title: "Fast and Furious 9",
      subtitle: "Action / Adventure / Crime / Thriller",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137312-qszmhzktyk-portrait.jpg",
      title: "Fast and Furious 9",
      subtitle: "Action / Adventure / Crime / Thriller",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137312-qszmhzktyk-portrait.jpg",
      title: "Fast and Furious 9",
      subtitle: "Action / Adventure / Crime / Thriller",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137312-qszmhzktyk-portrait.jpg",
      title: "Fast and Furious 9",
      subtitle: "Action / Adventure / Crime / Thriller",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137312-qszmhzktyk-portrait.jpg",
      title: "Fast and Furious 9",
      subtitle: "Action / Adventure / Crime / Thriller",
    },
  ];

  const Premiere = [
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00313350-qavljbzgvj-portrait.jpg",
      title: "The Space Walker",
      subtitle: "Action / Adventure / Crime / Thriller",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00309402-pkhgxbxpmd-portrait.jpg",
      title: "The Suicide Squad",
      subtitle: "Action / Adventure / Crime / Thriller",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122455-lsbpqzesrb-portrait.jpg",
      title: "The Conjuring",
      subtitle: "Action / Adventure / Crime / Thriller",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-appgcvtkry-portrait.jpg",
      title: "Justice league",
      subtitle: "Action / Adventure / Crime / Thriller",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-appgcvtkry-portrait.jpg",
      title: "Justice league",
      subtitle: "Action / Adventure / Crime / Thriller",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00313350-qavljbzgvj-portrait.jpg",
      title: "The Space Walker",
      subtitle: "Action / Adventure / Crime / Thriller",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00309402-pkhgxbxpmd-portrait.jpg",
      title: "The Suicide Squad",
      subtitle: "Action / Adventure / Crime / Thriller",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122455-lsbpqzesrb-portrait.jpg",
      title: "The Conjuring",
      subtitle: "Action / Adventure / Crime / Thriller",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-appgcvtkry-portrait.jpg",
      title: "Justice league",
      subtitle: "Action / Adventure / Crime / Thriller",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-appgcvtkry-portrait.jpg",
      title: "Justice league",
      subtitle: "Action / Adventure / Crime / Thriller",
    },
  ];
  return (
    <>
      <HeroCarousel />
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
          posterimg={Recommended}
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
            posterimg={Premiere}
          />
        </div>
      </div>

      {/* <div className="container mx-auto md:px-12 my-8"></div> */}
    </>
  );
}
