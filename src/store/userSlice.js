import { createSlice } from '@reduxjs/toolkit';
import { authUser, loginUser, logoutUser, registerUser } from './thunkFunctions';
import { toast } from 'react-toastify';

const initialState = {
    userData: {
        id: '',
        email: '',
        name: '',
        role: 0, //0은 일반, 1은 admin
        image: '',
    },
    isAuth: false,
    isLoading: false,
    error: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => { 
        builder
        //register
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled, (state) => {
                state.isLoading = false;
                toast.info('회원가입을 성공했습니다.');
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                toast.error(action.payload);
                state.error = action.payload; //상단의 initialSate의 error에 payload를 넣어줌
            })
            
        //login
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.userData = action.payload; //initialState의 userData에 payload를 넣어줌
                state.isAuth = true; //현재 로그인 상태
                localStorage.setItem('accessToken', action.payload.accessToken); //로그인에 성공하면 token도 넣어줌
                toast.info('로그인을 성공했습니다.');
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                toast.error(action.payload);
                state.error = action.payload; //상단의 initialSate의 error에 payload를 넣어줌
            })

        //auth
            .addCase(authUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(authUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.userData = action.payload; //initialState의 userData에 payload를 넣어줌
                state.isAuth = true; //현재 로그인 상태
            })
            .addCase(authUser.rejected, (state, action) => { //토큰 만료
                state.isLoading = false;
                state.error = action.payload; //상단의 initialSate의 error에 payload를 넣어줌
                state.userData = initialState.userData; //userData를 initial 값으로 초기화
                state.isAuth = false; //로그인 거부
                localStorage.removeItem('accessToken'); //받은 accessToken을 삭제
            })

        //logout
            .addCase(logoutUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(logoutUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.userData = initialState.userData; //initialState의 userData에 payload를 넣어줌
                state.isAuth = false; //현재 로그아웃 상태
                localStorage.removeItem('accessToken'); //받은 accessToken을 삭제
                toast.info('로그아웃을 성공했습니다.');
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.isLoading = false;
                toast.error("실패");
                state.error = "실패"; //상단의 initialSate의 error에 payload를 넣어줌
            })
    }
})

export default userSlice.reducer; //index.js에서 userReducer로 import하고, redux store를 생성