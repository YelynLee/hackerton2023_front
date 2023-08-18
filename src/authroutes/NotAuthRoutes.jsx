//로그인 된 유저가 회원가입/로그인 페이지에 접근 못하도록

import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const NotAuthRoutes = ({ isAuth }) => {
    return (
        isAuth ? <Navigate to={'/main'} /> : <Outlet /> //이 Route 왔을 때 로그인 됐으면 메인, 안됐으면 그대로
    )
}

export default NotAuthRoutes