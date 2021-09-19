import React, { Component } from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const oauth = {
    //appUrl : process.env.REACT_APP_URL,
    //apiUrl : process.env.REACT_APP_API_URL,
    appUrl : "http://localhost:3000",
    apiUrl : "http://localhost:7000",
}

const userInfo = JSON.parse(window.sessionStorage.getItem("userInfo"));

class TopbarLogin extends Component {
    render(){
        return(
            <div className="container-fluid">
                <div className="social-links">
                    <img src={userInfo.profile} alt={"profile"} width="25px" height="25px" />
                    <span>&nbsp;{userInfo.name} 님, 환영합니다.&nbsp;&nbsp;</span>
                    <a href="#!" onClick={Logout}>로그아웃</a>
                </div>
            </div>
        )
    }
}

function Logout() {
    const result = window.confirm('로그아웃 하시겠습니까?');
    if(result){
        window.localStorage.clear();
        window.sessionStorage.clear();
        cookies.remove('G_AUTHUSER_H');
        window.location.href = oauth.appUrl;
    }
}

export default TopbarLogin;