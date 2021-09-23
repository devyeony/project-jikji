import React, {Component} from "react";
import GoogleLogin from 'react-google-login';
import GoogleLogo from '../../assets/img/login/googleLogo.JPG';
import {Button} from "react-bootstrap";
import axios from "axios";

const oauth = {
    appUrl : process.env.REACT_APP_URL,
    apiUrl : process.env.REACT_APP_API_URL,
    authPath : "/oauth/jwt",
    googleKey : process.env.REACT_APP_GOOGLE_KEY
}

const config = {
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
};

let callCount = 0;

class GoogleOAuth extends Component {
    render() {
        return (
            <GoogleLogin
                clientId={oauth.googleKey}
                // uxMode={'redirect'}
                redirectUri={oauth.appUrl}
                onSuccess={successGoogleLogin}
                onFailure={failLogin}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
                render={renderProps => (
                    <Button onClick={renderProps.onClick} disabled={renderProps.disabled} style={{
                        background: "white",
                        border: "1px solid #ABABAB",
                        borderRadius: "5px",
                        color: "dimgrey",
                        width: "277px",
                        height: "60px"
                    }}>
                        <img src={GoogleLogo} className="googleLogo" alt="googleLogo" />
                        <span style={{
                            fontSize: "17px", float: "right", marginTop: "5px", marginRight: "22px"
                        }}>
                            구글 계정으로 로그인
                        </span>
                    </Button>
                )}
            />
        )
    }
}

const successGoogleLogin = async (response) => {
    callCount++;
    if(callCount > 1){
        let rData = await axios.post(
            oauth.apiUrl + oauth.authPath + "/google",
            JSON.stringify(response),
            config
        );
        setItem(rData);
        alert(oauth.apiUrl);
        window.location.href = oauth.appUrl;
    }
};

function setItem(rData){
    if (rData.status === 200) {
        sessionStorage.setItem("userInfo", JSON.stringify(rData.data.userInfo));
        localStorage.setItem("jwtToken", rData.data.jwtToken);
    }
}

const failLogin = () => {
    alert("로그인에 실패했습니다.");
}

export default GoogleOAuth;