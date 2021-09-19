import React, {Component} from "react";
import Googlelogo from '../../assets/img/login/googlelogo.JPG';
import GoogleLogin from 'react-google-login';
import axios from "axios";

const oauth = {
    // appUrl : process.env.REACT_APP_URL,
    // apiUrl : process.env.REACT_APP_API_URL,
    appUrl : "http://localhost:3000",
    apiUrl : "http://localhost:7000",
    authPath : "/oauth/jwt",
    googleKey : process.env.REACT_APP_GOOGLE_KEY
}

const config = {
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
};

class GoogleOAuth extends Component {
    render() {
        return (
            <GoogleLogin
                clientId={oauth.googleKey}
                buttonText="구글 계정으로 로그인"
                uxMode={'redirect'}
                redirectUri={oauth.appUrl}
                onSuccess={successGoogleLogin}
                onFailure={failLogin}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        )
    }
}

const successGoogleLogin = async (response) => {
    let rData = await axios.post(
        oauth.apiUrl + oauth.authPath + "/google",
        JSON.stringify(response),
        config
    );
    setItem(rData);
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

export default GoogleOAuth;