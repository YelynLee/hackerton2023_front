import React from "react";
import Styles from "./homediv.css";
import { Navigate, useNavigate } from "react-router-dom";

function Homediv_edu(){
    const navigate = useNavigate();
    const goSimple = () =>{
        navigate("/simplepage");
    }
    return(
        
        <div className="homediv">
            <div className="home_grid_col">
                <div className="home_grid">
                        <div className="home_grid__item">
                            <div className="home_card"><img className="home_card__img" src="https://blog.kakaocdn.net/dn/bf8Xda/btrsUckvG5w/TIdENmlB2Mff2dvruXSH30/img.png" alt="Snowy Mountains" />
                                <div className="home_card__content">
                                    <h1 className="home_card__header">국민 건강보험</h1>
                                    <button class="home_card__btn">더보기 </button>
                                </div>
                            </div>
                        </div>
                        <div className="home_grid__item">
                            <div className="home_card">
                                <img className="home_card__img" src="https://blog.kakaocdn.net/dn/bqqTr2/btq254zwrSp/KGaZ7GXcrt6mQKfLtpD8V1/img.jpg" alt="Desert" />
                                <div className="home_card__content">
                                    <h1 className="home_card__header">예방접종 도우미</h1>
                                    <button class="home_card__btn">더보기 </button>
                                </div>
                            </div>
                        </div>
                        <div className="home_grid__item">
                            <div className="home_card"><img className="home_card__img" src="https://cdn.pharmnews.com/news/photo/202304/222518_94580_949.png" alt="Canyons" />
                                <div className="home_card__content">
                                    <h1 className="home_card__header">약학 정보원</h1>
                                    <button class="home_card__btn">더보기 </button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="home_grid">
                        <div className="home_grid__item">
                            <div className="home_card"><img className="home_card__img" src="https://www.bdenc.co.kr/shopimages/chsbd/361002000143.jpg" alt="Snowy Mountains" />
                                <div className="home_card__content">
                                    <h1 className="home_card__header">보건소</h1>
                                    <button class="home_card__btn">더보기 </button>
                                </div>
                            </div>
                        </div>
                        <div className="home_grid__item">
                            <div className="home_card"><img className="home_card__img" src="https://blog.kakaocdn.net/dn/bf8Xda/btrsUckvG5w/TIdENmlB2Mff2dvruXSH30/img.png" alt="Snowy Mountains" />
                                <div className="home_card__content">
                                    <h1 className="home_card__header">국민 건강보험</h1>
                                    <button class="home_card__btn">더보기 </button>
                                </div>
                            </div>
                        </div>
                        <div className="home_grid__item">
                            <div className="home_card">
                                <img className="home_card__img" src="https://blog.kakaocdn.net/dn/bqqTr2/btq254zwrSp/KGaZ7GXcrt6mQKfLtpD8V1/img.jpg" alt="Desert" />
                                <div className="home_card__content">
                                    <h1 className="home_card__header">예방접종 도우미</h1>
                                    <button class="home_card__btn">더보기 </button>
                                </div>
                            </div>
                        </div>

                    </div>
              
            </div>
        </div>

    );

}


export default Homediv_edu;