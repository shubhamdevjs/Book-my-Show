import React, {useEffect, useContext} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

// Component
import MovieNavbar from "../Componenets/Navbar/MovieNavbar";

// Context
import { MovieContext } from "../Context/MovieContext";

const MovieLayout=(props)=>{

    const { id } = useParams();
    const { movie,  setMovie } = useContext(MovieContext);

    useEffect(() => {
        const requestMovie = async () => {
            const getMovieData = await axios.get(`/movie/${id}`);
            setMovie(getMovieData.data);

            
        };
        requestMovie();
    }, [id]);


    return(
        <div>
             <MovieNavbar/>
             {props.children}
             <div>footer</div>
        </div>
    );
};

export default MovieLayout; 