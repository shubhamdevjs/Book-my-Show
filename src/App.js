import React from "react";
import DefaultHOC from "./HOC/DefaultHOC";
import HomePage from "./Pages/HomePage";

  
function contact() {
  return <div>this is the contect of the center</div>;
}

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} ></DefaultHOC>
      <DefaultHOC path="/contact" exact component={contact}></DefaultHOC>
    </>
  );
}

export default App;
