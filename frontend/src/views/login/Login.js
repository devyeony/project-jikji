import React from 'react';
import '../../assets/css/login/Login.css';
import GoogleOAuth from "../../components/login/GoogleOAuth";
import KakaoOAuth from "../../components/login/KakaoOAuth";

function Login() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="join_login">
                    <div className="white_box">
                        <div className="list">
                            <div className="title"><i className="fas fa-book-reader"></i>로그인</div>
                        </div>
                        <div className="flatform">
                            <KakaoOAuth/>
                            <GoogleOAuth/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;