import React from "react";
import MovieNavbar from "../Componenets/Navbar/MovieNavbar";

const MovieLayout=(props)=>{
    return(
        <div>
             <MovieNavbar/>
             {props.children}
            
             <div>footer</div>
        </div>
    );
};

export default MovieLayout; 