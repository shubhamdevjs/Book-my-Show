import React from "react";
import DefaultHOC from "./HOC/DefaultHOC";

function home() {
  return <div></div>;
}
function contact() {
  return <div>this is the contect of the center</div>;
}

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={home}></DefaultHOC>
      <DefaultHOC path="/contact" exact component={contact}></DefaultHOC>
    </>
  );
}

export default App;
