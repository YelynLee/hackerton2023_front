import React from "react";
import Styles from "./mypage.css";
import Sidebar from "../mainpage/side/Sidebar";
import Posting from "./Posting";

function Mypage() {
    return(
        <div>
            <Sidebar />
            <div className="profile_zone">
                <div className="profile_box">
                    <div className="profile">
                        <img  className="mypage_profile" src="https://cdn-icons-png.flaticon.com/512/1361/1361876.png"/>
                        <h3 className="mypage_name">김멋사</h3>
                        <hr></hr>
                        <h5>회원님의 등급은 Z1입니다.</h5>
                        <h6>POINT | 9500 p</h6>
                        <h6>질문 게시글 수 | 10 posts</h6>
                        <h6>미션 수행 | 27 성공</h6>
                        <h6 className="my_notice">*회원혜택* <br></br>포인트를 통해서 회원님의 아바타를 커스터마이징 할 수 있습니다.<br></br> 회원님의 레벨등급에 따라, 다양한 혜택 및 지원 서비스가 제공됩니다.</h6>

                    </div>
                    
                    <div className="posting">
                        <Posting />


                    </div>

                </div>
                <div className="avatar"> 
                    <img className="mypage_avatar" src="https://blog.kakaocdn.net/dn/dhSpjR/btre42jET61/CaGCZSff3EdJ2w5x95jkjk/img.png" />

                </div>
            </div>
            <div className="post">
                
            </div>

            
            
        </div>
    );
}

export default Mypage;