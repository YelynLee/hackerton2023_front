import React from "react"; // eslint-disable-next-line
import Styles from "./side.css"; 
import { useNavigate, Navigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../store/thunkFunctions";

function Sidebar() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logoutUser())
            .then(() => {
                navigate('/');
            })
    }
    const goMain = () => {
        navigate("/main")
    }
    const goIntro = () => {
        navigate("/intro");
    }
    const goPlus = () => {
        navigate("/pluspage");
    }
    const goHome = () => {
        navigate("/");
    }
    const goMy = () => {
        navigate("/mypage");
    }
    const isAuth = useSelector(state => state.user?.isAuth);

    //비로그인 유저들은 채팅 목록, 마이페이지, 즐겨찾기, 로그아웃을 보지 못하도록
    //다만, 전체, 알림, 사이트 정보는 로그인 유무 상관없이 볼 수 있도록 설계
    //auth이 필요 없을 경우, 설정 방식이 애매해서 map 바깥에 배치함
    const routes = [
    { name: '채팅 목록', property: "icon-chat", move: goPlus, auth: true },
    { name: '마이페이지', property: "icon-mypage", move: goMy, auth: true },
    { name: '즐겨찾기', property: "icon-star", auth: true },
    { name: '로그아웃', property: "icon-out", move: handleLogout, auth: true },
    { name: '뒤로 가기', property: "", move: goHome, auth: false }
    ]

    return(
        <nav class="menu" tabindex="0">

            <div class="smartphone-menu-trigger"></div>

            <header class="avatar">
                <img src="https://cdn-icons-png.flaticon.com/512/1361/1361876.png" />
                <h2>김멋사</h2>
            </header>
            
            <ul>

                <li tabindex="0" class="icon-all"><span className="text_color" onClick={goMain}>전체</span></li>
                <li tabindex="0" class="icon-alert"><span className="text_color">알림</span></li>

                { routes.map(({name, property, move, auth}) => {
                    if(isAuth !== auth) return null;

                        return <li key={name} tabindex="0" class={property}>
                            <span className="text_color" onClick={move}>{name}</span>
                        </li>
                })}

                <li tabindex="0" class="icon-info"><span className="text_color" onClick={goIntro}>사이트 정보</span></li>
 
            </ul>

        </nav>
    );

}


export default Sidebar;