import React, { Fragment } from 'react';
import './Register.css';

const Register = () => {
    return (
        <main className="Register">
            <div className="title">
                회원가입
          </div>
          <section className = "form-wrapper">
            <div className="email">
                <input id="Username" placeholder="아이디" />
            </div>
            <div className="password">
                <input type='text' id="Userpassword" placeholder="비밀번호" />
            </div>
            <div className="password">
                <input type='text' id="UserNickName" placeholder="인게임 닉네임" />
            </div>
            <div className="password">
                <input type='text' id="UserId" placeholder="유저고유 번호 (게임 프로필 참고)" />
            </div>
            <div className="password">
                <input type='text' id="UserServerId" placeholder="서버 번호" />
            </div>
            <div className="create-button">
                회원가입
            </div>
            <div className="create-button" onClick = {event =>  window.location.href='/'}>
                취소
            </div>
            </section>
        </main>

    )
}

export default Register;