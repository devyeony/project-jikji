import React, {Component} from "react";
import KakaoLogin from 'react-kakao-login';
import KakaoLogo from '../../assets/img/login/kakaoLogo.png';
import {Button} from "react-bootstrap";
import axios from "axios";

const oauth = {
    appUrl: process.env.REACT_APP_URL,
    apiUrl: process.env.REACT_APP_API_URL,
    authPath: "/oauth/jwt",
    kakaoKey: process.env.REACT_APP_KAKAO_KEY
}

const config = {
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
};

class KakaoOAuth extends Component {
    render() {
        return (
            <KakaoLogin
                token={oauth.kakaoKey}
                render={(props) =>
                    <Button onClick={props.onClick} disabled={props.disabled} style={{
                        backgroundColor:"#FFEB34",
                        borderRadius: "5px",
                        color: "dimgrey",
                        width: "277px",
                        height: "60px"
                    }}>
                        <img src={KakaoLogo} className="kakaoLogo" alt="kakaoLogo" />
                        <span style={{
                            fontSize: "17px", float: "right", marginTop: "5px", marginRight: "22px"
                        }}>
                            카카오 계정으로 로그인
                        </span>
                    </Button>
                }
                onSuccess={successKakaoLogin}
                onFail={failLogin}
                onLogout={console.info}
                redirectUri={oauth.appUrl}
            />
        )
    }
}

const successKakaoLogin = async (response) => {
    //console.log(response);
    let rData = await axios.post(
        oauth.apiUrl + oauth.authPath + "/kakao",
        JSON.stringify(response),
        config
    );
    setItem(rData);
};

function setItem(rData) {
    if (rData.status === 200) {
        //console.log(rData.data);
        sessionStorage.setItem("userInfo", JSON.stringify(rData.data.userInfo));
        localStorage.setItem("jwtToken", rData.data.jwtToken);
        window.location.href = oauth.appUrl;
    }
}

const failLogin = () => {
    alert("로그인에 실패했습니다.");
}

export default KakaoOAuth;