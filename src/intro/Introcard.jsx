import React from "react";
import Styles from "./intro.css";


function Introcard({name, role, jpg}){
    return(
   
            
            <div className="members">
                <div className="container">
                    <div className="intro_card">
                    <h2 className="memname">{name}</h2>
                    <div className="title title--epic">{role}</div>
                    <img className="memberimg" src={jpg} />

                        
                    </div>
                    
                 </div>
                            
             </div>


    );
}

export default Introcard;