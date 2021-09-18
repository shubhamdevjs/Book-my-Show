import React from "react";
import Navbar from "../Componenets/NavbarComponent";

const DefaultLayout=(props)=>{
    return(
        <div>
             <Navbar/>
             {props.children}
             <div>Here footer component will be placed</div>
        </div>
    );
};

export default DefaultLayout;