import React from 'react';
import '../../assets/css/login/Login.css';
import NaverOAuth from "../../components/login/NaverOAuth";
import GoogleOAuth from "../../components/login/GoogleOAuth";

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
                            <NaverOAuth/>
                            <GoogleOAuth/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;