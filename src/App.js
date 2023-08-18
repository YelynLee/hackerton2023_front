import React, { useEffect } from 'react'; 
import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './login/Login';
import Sign from './sign/sign';
import Home from './mainpage/Home';
import SimplePage from './simplepage/SimplePage';
import Pluspage from './pluspage/pluspage';
import MissionPage from './missonpage/MissionPage';
import Intro from './intro/Intro';
import Mypage from './mypage/Mypage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch, useSelector } from 'react-redux';
import { authUser } from './store/thunkFunctions';
import ProtectedRoutes from './authroutes/ProtectedRoutes';
import NotAuthRoutes from './authroutes/NotAuthRoutes';

function App() {

  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.user?.isAuth);
  const { pathname } = useLocation();

  useEffect(() => {
    if (isAuth) { //인증했을 경우에만 올바른 토큰인지 확인 요청
      dispatch(authUser());
    }
  }, {isAuth, pathname, dispatch})

  return (
    <div class="App">

      <ToastContainer 
        position='bottom-right'
        theme='light'
        pauseOnHover
        autoClose={1500}
      />

      <Routes>

        <Route path="/main" element = {<Home />} />
        <Route path ="/pluspage" element = { <Pluspage/>} />    
        <Route path ="/simplepage" element = { <SimplePage/>} />
        <Route path ="/intro" element = { <Intro/>} />

{/* 이 Route들의 경우, 로그인 된 사람들만 이쪽으로 보내 */}
        <Route element={<ProtectedRoutes isAuth={isAuth}/>}>
          <Route path ="/missonpage" element={<MissionPage/>}/>
          <Route path ="/mypage" element={<Mypage/>}/>
        </Route>

{/* 이 Route들의 경우, 로그인 안된 사람들만 이쪽으로 보내 */}
        <Route element={<NotAuthRoutes isAuth={isAuth}/>}>
          <Route path='/' element={<Login />} />
          <Route path="/signup" element={<Sign />} />
        </Route>

      </Routes>
        
    </div>
  );
}

export default App;
