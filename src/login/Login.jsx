import React from 'react'; // eslint-disable-next-line
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Login.css';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginUser } from "../store/thunkFunctions";


function Login () {
  const navigate = useNavigate();

  const goMain=() => {
    navigate("/main");
  }

  const { register, handleSubmit, formState: { errors }, reset } 
  = useForm ({ mode: 'onChange' })

  const dispatch = useDispatch();

  const onSubmit = ({ email, password }) => {

    const body = {
      email : email,
      password: password,
    }

    dispatch(loginUser(body));

    reset();
  }

  const userEmail = {
    required: "필수 필드입니다.",
/*     pattern: {
      value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
      message: "이메일 형식에 맞지 않습니다.",
    } */
  }

  const userPassword = {
    required: "필수 필드입니다.",
/*     minLength: {
      value: 5,
      message: "영문, 숫자 포함 5자 이상 입력해주세요."
    },
    pattern: {
      value: /^(?=.*[a-zA-z])(?=.*[0-9])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{5,20}$/,
      message: "영문, 숫자 포함 5자 이상 입력해주세요." */
  }

  return (
    <div className='startpage'>

      <div className='login_logo'>
        <img className="login_logo_img" alt='logo' src='./components/logo.png'/>
      </div>

      <div className="login_container">

        <h1>LOGIN</h1>

        <form className='login_form' onSubmit={handleSubmit(onSubmit)}>

          <div className='login_inputbox'>
            <label className='login_inputbox' htmlFor="email">
              이메일
            </label>
            <input 
              type="email"
              id="email"
              placeholder="이메일을 입력하세요" 
              {...register('email', userEmail)}
            />
          </div>
            { 
              errors?.email &&
              <div>
                <span className='text-red-500'>
                  {errors.email.message}
                </span>
              </div> //유효성 절차를 통과하지 못했을 경우 err message를 보여주기
            }

          <div className='login_inputbox'>
            <label className='login_inputbox' htmlFor="password">
              비밀번호
            </label>
            <input 
              type="password"
              id="password"
              placeholder="비밀번호를 입력하세요" 
              {...register('password', userPassword)}
            />
          </div>
            { 
              errors?.password &&
              <div>
                <span className='text-red-500'>
                  {errors.password.message}
                </span>
              </div> //유효성 절차를 통과하지 못했을 경우 err message를 보여주기
            }

          <button 
            className='login' 
            type="submit"
          >
            로그인
          </button>

          <p className='signup-link'>회원가입 시 더 많은 혜택이 있어요 <Link className='login_inputbox' to="/signup">회원가입</Link></p>
        
        </form>

        <div>
          <button className='nologin' onClick={goMain}>로그인 없이 입장</button>
        </div>

      </div>

    </div>
    
  );
};

export default Login;
