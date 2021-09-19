import React, {Component} from "react";
import Naverlogo from '../../assets/img/login/naverlogo.JPG';
import {Button} from "react-bootstrap";
import axios from "axios";

const oauth = {
    // appUrl : process.env.REACT_APP_URL,
    // apiUrl : process.env.REACT_APP_API_URL,
    appUrl : "http://localhost:3000",
    apiUrl : "http://localhost:7000",
    authPath : "/oauth/jwt",
    naverKey : process.env.REACT_APP_NAVER_KEY
}

const config = {
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
};

class NaverOAuth extends Component {
    render() {
        return (
            <div>
                <Button style={{ backgroundColor:'#02C73B' }}>
                    <img src={Naverlogo} className="naver" alt="naver" />
                    네이버 계정으로 로그인
                </Button>
            </div>
        )
    }
}

const successNaverLogin = async (response) => {
    console.log(response);
    // let rData = await axios.post(
    //     oauth.apiUrl + oauth.authPath + "/google",
    //     JSON.stringify(response),
    //     config
    // );
    // setItem(rData);
};

function setItem(rData){
    if (rData.status === 200) {
        //console.log(rData.data);
        sessionStorage.setItem("userInfo", JSON.stringify(rData.data.userInfo));
        localStorage.setItem("jwtToken", rData.data.jwtToken);
    }
}

const failLogin = () => {
    alert("로그인에 실패했습니다.");
}

export default NaverOAuth;