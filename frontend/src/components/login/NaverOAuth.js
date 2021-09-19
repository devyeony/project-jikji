import React, {useEffect} from "react";
import Naverlogo from '../../assets/img/login/naverlogo.JPG';
import axios from "axios";

const oauth = {
    appUrl : process.env.REACT_APP_URL,
    apiUrl : process.env.REACT_APP_API_URL,
    authPath : "/oauth/jwt",
    naverKey : process.env.REACT_APP_NAVER_KEY
}

const config = {
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
};

function NaverOAuth() {
    const {naver} = window;

    const Login = () => {
        Naver();
    };

    useEffect(Login, []);

    function Naver() {
        var naverLogin = new naver.LoginWithNaverId({
            clientId: oauth.naverKey,
            callbackUrl: oauth.appUrl,
            isPopup: false,
            loginButton: {color: 'green', type: 3, height: 60} /* 로그인 버튼의 타입을 지정 */,
            callbackHandle: true,
            onSuccess: {successNaverLogin}
        });

        naverLogin.init();
    }

    /* style={{backgroundColor: '#02C73B'}}
            <img src={Naverlogo} className="naver" alt="naver"/> */

    return (
        <div id="naverIdLogin" onClick={Login}></div>
    );
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

// function setItem(rData){
//     if (rData.status === 200) {
//         //console.log(rData.data);
//         sessionStorage.setItem("userInfo", JSON.stringify(rData.data.userInfo));
//         localStorage.setItem("jwtToken", rData.data.jwtToken);
//     }
// }
//
// const failLogin = () => {
//     alert("로그인에 실패했습니다.");
// }

export default NaverOAuth;