import React from "react";

const Posters = (props) => {
  return (
    <>
      <div className="flex flex-col items-center  px-1 md:px-3">
        <div className="h-full md:h-80">
          <img
            src={props.src}
            alt="poster"
            className="w-full h-full rounded-md"
          />
        </div>
        <h3 className={`text-lg font-bold ${props.isDark ? "text-white":"text-gray-800"}`}>{props.title}</h3>
        <p className={`"text-sm ${props.isDark ? "text-white":"text-gray-800"}`}>{props.subtitle}</p>
      </div>

      
      
    </>
  );
};

export default Posters;
