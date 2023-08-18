import React from "react";
import Styles from "./intro.css";
import Introcard from "./Introcard";
import Sidebar from "../mainpage/side/Sidebar";

function Intro(){
    return(
        <div>
            <div>
                <Sidebar />
            </div>

            <div className="intropage">
                <div className="intro_ment">
                    <h1>
                        서비스 소개
                    </h1>
                    <h5>아하 (A HA)는 여러분들의 궁금증을 해결해주는 <br></br>"공공서비스 도우미 플랫폼"입니다.</h5>
                    <h6>
                        
                        <br></br>모르는 것을 질문하면 채팅을 통해 답변을 얻을 수 있습니다. <br></br>
                        다양한 분야의 전문가와 <br></br>실시간 채팅을 통해 답변을 받아보세요.  
                        <h6>(분야는 추후 더 많이 추가될 예정)</h6>
                    </h6>
                    <h1><br></br><br></br>사용법</h1>
                    <h6>
                        질문하고자 하는 서비스 탭에 FAQ 또는 가이드 영상이 제공되며,<br></br>
                        해결되지 않은 질문은 <br></br>현재 활동 중인 전문가와의 채팅을 통해 답변을 받아보세요. 
                        <br></br>(회원가입을 통해 혜택도 함께 받아보세요)</h6>
                    <h1 className="memtext">Members</h1>
                </div>
                
                <div className="introdiv">
                
                    <Introcard name="조은서" role="프론트엔드" jpg="/components/은서님.jpg"/>
                    <Introcard name="이재림" role="프론트엔드" jpg="/components/재림님.jpg"/>
                    <Introcard name="이예린" role="백엔드" jpg="/components/예린님.png"/>
                    <Introcard name="김옥련" role="백엔드" jpg="https://mblogthumb-phinf.pstatic.net/MjAyMDExMDFfMyAg/MDAxNjA0MjI5NDA4NDMy.5zGHwAo_UtaQFX8Hd7zrDi1WiV5KrDsPHcRzu3e6b8Eg.IlkR3QN__c3o7Qe9z5_xYyCyr2vcx7L_W1arNFgwAJwg.JPEG.gambasg/%EC%9C%A0%ED%8A%9C%EB%B8%8C_%EA%B8%B0%EB%B3%B8%ED%94%84%EB%A1%9C%ED%95%84_%ED%8C%8C%EC%8A%A4%ED%85%94.jpg?type=w800"/>
                    <Introcard name="이서인" role="백엔드"jpg="/components/서인님.jpg"/>

                </div>
            <p className="team">멋사 해커톤 4조</p>
        </div>
        

        </div>
        
        

    );
}

export default Intro;