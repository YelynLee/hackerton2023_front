import React from "react";
import Sidebar from "./side/Sidebar";
import Homediv from "./homediv/Homediv";
import Styles from "./nav/nav.css";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import Homediv_health from "./homediv/Homediv_health";

function Home() {
    const [homediv, setHomediv] = useState(0);
    const navigate = useNavigate(true);
    return(
        <div >
            <div className="sidebar">
                 <Sidebar /> 
            </div>
            
            <div>
            <div>
            <form class="nav_search" action="">
                <input className="nav_search_input" type="search" placeholder="Search here..." required />
                <button className="nav_search_btn" type="submit">검색</button>
            </form> 
            <div className="nav_div">
                <nav >
                    <div className="nav_bar">
                        <ul className="nav_ul">
                            <li>
                                <a className="nav_a" onClick={()=> setHomediv(true)} >교통</a>
                            </li>
                            <li>
                                <a className="nav_a" onClick={()=> setHomediv(false)}>의료</a>
                            </li>
                            <li>
                                <a className="nav_a" href="#">교육</a>
                            </li>
                            <li>
                                <a className="nav_a" href="#">주택</a>
                            </li>
                            <li>
                                <a className="nav_a" href="#" >세금</a>
                            </li>
                        </ul>

                    </div>
                </nav>
            
            </div>

        </div>
            {homediv ? <Homediv/> : <Homediv_health/>}
                

            </div>
        </div>
        
    );
}

export default Home;