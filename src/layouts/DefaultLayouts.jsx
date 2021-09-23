import React from "react";
import EntertainmentCardSlider from "../Componenets/Entertainment/EntertainmentSlider";
import HeroCarousel from "../Componenets/HeroCarousel/HeroCarouselComponent";
import Navbar from "../Componenets/Navbar/NavbarComponent";

const DefaultLayout=(props)=>{
    return(
        <div>
             <Navbar/>
             {props.children}
        
             <div>footer</div>
        </div>
    );
};

export default DefaultLayout;