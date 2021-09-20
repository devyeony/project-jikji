import React, {Component} from "react";
import NaverLogin from 'react-naver-login';
import Naverlogo from '../../assets/img/login/naverlogo.JPG';
import {Button} from "react-bootstrap";
import axios from "axios";

const oauth = {
    appUrl: process.env.REACT_APP_URL,
    apiUrl: process.env.REACT_APP_API_URL,
    authPath: "/oauth/jwt",
    naverKey: process.env.REACT_APP_NAVER_KEY
}

const config = {
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
};

class NaverOAuth extends Component {
    render() {
        return (
            <NaverLogin
                clientId={oauth.naverKey}
                callbackUrl="http://localhost:3000/"
                render={(props) =>
                    <div onClick={props.onClick} disabled={props.disabled} style={{ backgroundColor:'#02C73B' }}>
                        <img src={Naverlogo} className="naverLogo" alt="naverLogo" />
                        네이버 계정으로 로그인
                    </div>
                }
                onSuccess={(response) => successNaverLogin(response)}
                onFailure={(result) => console.error(result)}
            />
        )
    }
}

const successNaverLogin = (response) => {
    console.log(response);
    let rData = axios.post(
        oauth.apiUrl + oauth.authPath + "/naver",
        JSON.stringify(response),
        config
    );
    setItem(rData);
};

function setItem(rData) {
    if (rData.status === 200) {
        console.log(rData.data);
        sessionStorage.setItem("userInfo", JSON.stringify(rData.data.userInfo));
        localStorage.setItem("jwtToken", rData.data.jwtToken);
    }
}

const failLogin = () => {
    alert("로그인에 실패했습니다.");
}

export default NaverOAuth;