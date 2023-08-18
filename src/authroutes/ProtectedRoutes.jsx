//로그인 안된 유저가 로그인 해야 하는 페이지에 접근 못하도록

import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ isAuth }) => {
    return ( 
        isAuth ? <Outlet /> : <Navigate to={'/main'} /> //이 Route 왔을 때 로그인 됐으면 그대로, 안됐으면 메인으로
    )
}

export default ProtectedRoutes