import React, { Component } from 'react';

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
                    <img src={userInfo.profile} width="25px" height="25px" />
                    <span>&nbsp;{userInfo.name} 님, 환영합니다.&nbsp;&nbsp;</span>
                    <a href="javascript:void(0);" onClick={logout}>로그아웃</a>
                </div>
            </div>
        )
    }
}

const logout = () => {
    const result = window.confirm('로그아웃 하시겠습니까?');
    if(result){
        window.localStorage.clear();
        window.sessionStorage.clear();
        document.cookie = "G_AUTHUSER_H" + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        window.location.href = oauth.appUrl;
    }
}

export default TopbarLogin;