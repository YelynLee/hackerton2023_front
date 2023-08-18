import React from "react";
// eslint-disable-next-line 
import { Navigate, useNavigate } from "react-router-dom";
// eslint-disable-next-line 
import styles from "./sign.css"; //import './Login.css';와 같이 적어야?
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerUser } from "../store/thunkFunctions";


function Sign() {
    const navigate = useNavigate();
    
    const goHome=() => {
        navigate("/");
    }

    const { register, handleSubmit, formState: { errors }, reset, getValues } 
    = useForm ({ mode: 'onChange' })

    const dispatch = useDispatch();

    const onSubmit = ({ email, password, name }) => {

      const body = {
        email : email,
        password: password,
        name: name,
        image: 'https://via.placeholder.com/600x400?text=no+user+image'
      }

      dispatch(registerUser(body));

      reset();
    }

    const userName = {
      required: "필수 필드입니다.",
      minLength: {
        value: 3,
        message: "3~6자로 입력해주세요."
      },
      maxLength: {
        value: 6
      }
    }

    const userEmail = {
      required: "필수 필드입니다.",
      pattern: {
        value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
        message: "이메일 형식에 맞지 않습니다.",
      }
    }

    const userPassword = {
      required: "필수 필드입니다.",
      minLength: {
        value: 5,
        message: "영문, 숫자 포함 5자 이상 입력해주세요."
      },
      pattern: {
        value: /^(?=.*[a-zA-z])(?=.*[0-9])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{5,20}$/,
        message: "영문, 숫자 포함 5자 이상 입력해주세요."
      }
    }

    const userPwconfirm = {
      required: "필수 필드입니다.",
      minLength: {
        value: 5,
        message: "영문, 숫자 포함 5자 이상 입력해주세요."
      },
      pattern: {
        value: /^(?=.*[a-zA-z])(?=.*[0-9])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{5,20}$/,
        message: "영문, 숫자 포함 5자 이상 입력해주세요."
      },
      validate: {
        check: (val) => {
          if (getValues("password") !== val ) {
            return "비밀번호가 일치하지 않습니다.";
          }
        }
      }
    }

    return (
      <div className="page">

        <div className="titleWrap">
          회원가입
        </div>

        <form className="contentWrap" onSubmit={handleSubmit(onSubmit)}> {/* onSubmit 함수 호출 */}

          <div className="inputbox">

            <div className="inputTitle inputbox" htmlFor="name">닉네임</div>
            <div className="inputWrap">
              <input 
                className="input inputbox2"
                type="text"
                id="name"
                placeholder="닉네임을 입력하세요"
                {...register('name', userName)}
              />
            </div>
              { 
                errors?.name &&
                <div>
                  <span className='text-red-500'>
                    {errors.name.message}
                  </span>
                </div> //유효성 절차를 통과하지 못했을 경우 err message를 보여주기
              }

            <div  className="inputTitle  inputbox" htmlFor="email">
              이메일
            </div>
            <div className="inputWrap">
              <input
                className="input inputbox2"
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

            <div  className="inputTitle  inputbox" htmlFor="password">
              비밀번호
            </div>
            <div className="inputWrap ">
              <input
                className="input inputbox2"
                type="password"
                id="password"
                placeholder="영문, 숫자 포함 5자 이상"
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
                 
            <div  className="inputTitle  inputbox" htmlFor="password">
              비밀번호 재확인
            </div>
            <div className="inputWrap">
              <input
                className="input inputbox2"
                type="password"
                id="password"
                placeholder="비밀번호를 한번 더 입력해주세요"
                {...register('pwConfirm', userPwconfirm)}
              />
            </div>
              { 
                errors?.pwConfirm &&
                <div>
                  <span className='text-red-500'>
                    {errors.pwConfirm.message}
                  </span>
                </div> //유효성 절차를 통과하지 못했을 경우 err message를 보여주기
              }        

          </div>

          <div className="inputbox">
            <button className="bottomButton">
              회원 가입
            </button>
          </div>
          
        </form>

        <button className="HomeBtn" onClick={goHome}>홈으로</button>
        
      </div>
    );
   
}

export default Sign;