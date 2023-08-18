import React from "react";
import {Routes,Route,useNavigate} from "react-router-dom";
import Styles from "./homediv.css" // eslint-disable-next-line
function Homediv() {
    const navigate = useNavigate();
    const goSimple = () =>{
        navigate("/simplepage");
    }
    return(
        
        <div className="homediv">
            <div className="home_grid_col">
                <div className="home_grid">
                        <div className="home_grid__item">
                            <div className="home_card"><img className="home_card__img" src="https://blog.kakaocdn.net/dn/1fQQ7/btrVtGM3mVv/NND2A2qPZpuD75hD1bWq4K/img.jpg" alt="Snowy Mountains" />
                                <div className="home_card__content">
                                    <h1 className="home_card__header">안전운전 통합민원</h1>
                                    <button class="home_card__btn" onClick={goSimple} >더보기 </button>
                                </div>
                            </div>
                        </div>
                        <div className="home_grid__item">
                            <div className="home_card">
                                <img className="home_card__img" src="https://play-lh.googleusercontent.com/yxGaVmpwCZ9OKgK0MxgeqdQku9zgO5WRN8MjpuycD5BNdfcGSvu8iEB1gERiFBePP2A" alt="Desert" />
                                <div className="home_card__content">
                                    <h1 className="home_card__header">레츠코레일</h1>
                                    <button class="home_card__btn">더보기 </button>
                                </div>
                            </div>
                        </div>
                        <div className="home_grid__item">
                            <div className="home_card"><img className="home_card__img" src="https://play-lh.googleusercontent.com/763H-3dcJk80jKe9LCR2Vyzg_fPx4FeUPZFo-gCg0pYnq3-KkhGm_Mei7sgklNhruw=w600-h300-pc0xffffff-pd" alt="Canyons" />
                                <div className="home_card__content">
                                    <h1 className="home_card__header">고속버스 통합예매</h1>
                                    <button class="home_card__btn">더보기 </button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="home_grid">
                        <div className="home_grid__item">
                            <div className="home_card"><img className="home_card__img" src="https://pay.tmoney.co.kr/images/tmoney/parnership_card01.jpg" alt="Snowy Mountains" />
                                <div className="home_card__content">
                                    <h1 className="home_card__header">교통카드 안내</h1>
                                    <button class="home_card__btn">더보기 </button>
                                </div>
                            </div>
                        </div>
                        <div className="home_grid__item">
                            <div className="home_card">
                                <img className="home_card__img" src="https://blog.kakaocdn.net/dn/1fQQ7/btrVtGM3mVv/NND2A2qPZpuD75hD1bWq4K/img.jpg" alt="Desert" />
                                <div className="home_card__content">
                                    <h1 className="home_card__header">안전운전 통합민원</h1>
                                    <button class="home_card__btn" onClick={goSimple}>더보기 </button>
                                </div>
                            </div>
                        </div>
                        <div className="home_grid__item">
                            <div className="home_card"><img className="home_card__img" src="https://i0.wp.com/blog.opensurvey.co.kr/wp-content/uploads/2020/03/01-2.jpg?resize=700%2C467&ssl=1" alt="Canyons" />
                                <div className="home_card__content">
                                    <h1 className="home_card__header">카카오 택시</h1>
                                    <button class="home_card__btn">더보기 </button>
                                </div>
                            </div>
                        </div>

                    </div>
              
            </div>
        </div>

    );
}

export default Homediv;