import React from "react";
import HeroCarousel from "../Componenets/HeroCarousel/HeroCarouselComponent";
import Navbar from "../Componenets/Navbar/NavbarComponent";

const DefaultLayout=(props)=>{
    return(
        <div>
             <Navbar/>
             {props.children}
             <HeroCarousel/>
             <div></div>
        </div>
    );
};

export default DefaultLayout;