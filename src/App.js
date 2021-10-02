import React from "react";

//higer oreder components
import DefaultHOC from "./HOC/DefaultHOC";
import MovieHOC from "./HOC/MovieHoc";

//Pages
import HomePage from "./Pages/HomePage";
import MoviePage from "./Pages/MoviePage";
import PlayPage from "./Pages/Plays.page";

  
// function contact() {
//   return <div>this is the contect of the center</div>;
// }

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} ></DefaultHOC>
      <MovieHOC path="/movie/:id" exact component={MoviePage}></MovieHOC> 
      <DefaultHOC path="/play" exact component={PlayPage} ></DefaultHOC>
    </>
  );
}

export default App;
