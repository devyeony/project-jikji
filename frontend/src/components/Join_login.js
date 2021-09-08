import React, { useState } from 'react';
import './Join_login.css';
import { Button } from 'react-bootstrap';
import Naverlogo from './naverlogo.JPG';
import Googlelogo from './googlelogo.JPG';

function Join_login() {

    const [login, chLogin] = useState(true);

    return (
    <div className="container-fluid">
        <div className="row">
            <div className="join_login">
                <div className="white_box">
                <div className="title"><i className="fas fa-book-reader"></i>로그인 및 회원가입</div>
                    <div className="list">
                        <Button variant="outline-info" size="lg"
                        onClick={ ()=>{ chLogin(true) } }>로그인</Button>
                        <Button variant="outline-primary" size="lg"
                        onClick={ ()=>{ chLogin(false) } }>회원가입</Button>
                    </div>
                    { login === true ? <Login /> : <Join /> }
                </div>
            </div>
        </div>
    </div>
    );
}

function Login() {
    return(
        <div className="flatform">
            <Button style={{ backgroundColor:'#02C73B' }}>
                <img src={Naverlogo} className="naver" alt="naver" />
                네이버 계정으로 로그인
            </Button><br />
            <Button style={{ backgroundColor: '#EF4545' }}>
                <img src={Googlelogo} className="google" alt="google" />
                구글 계정으로 로그인
            </Button>
        </div>
    );
}

function Join() {
    return(
        <div className="flatform">
            <Button style={{ backgroundColor:'#02C73B' }}>
                <img src={Naverlogo} className="naver" alt="naver" />
                네이버 계정으로 회원가입
            </Button><br />
            <Button style={{ backgroundColor: '#EF4545' }}>
                <img src={Googlelogo} className="google" alt="google" />
                구글 계정으로 회원가입
            </Button>
        </div>
    );
}

export default Join_login;