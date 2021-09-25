import React from "react";

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