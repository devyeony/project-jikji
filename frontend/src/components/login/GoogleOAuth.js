import React, {Component} from "react";
import GoogleLogin from 'react-google-login';
import axios from "axios";
import Googlelogo from '../../assets/img/login/googlelogo.JPG';

const oauth = {
    appUrl: process.env.REACT_APP_URL,
    apiUrl: process.env.REACT_APP_API_URL,
    authPath: "/oauth/jwt",
    googleKey: process.env.REACT_APP_GOOGLE_KEY
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
                uxMode={'redirect'}
                redirectUri={oauth.appUrl}
                onSuccess={successGoogleLogin}
                onFailure={failLogin}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
                render={renderProps => (
                    <button onClick={renderProps.onClick} disabled={renderProps.disabled} style={{
                        background: "white",
                        border: "1px solid #ABABAB",
                        borderRadius: "5px",
                        color: "dimgrey",
                        width: "277px",
                        height: "60px"
                    }}>
                        <img src={Googlelogo} className="googleLogo" alt="googleLogo" />
                        <span style={{
                            fontSize: "17px", float: "right", marginTop: "5px", marginRight: "22px"
                        }}>
                            구글 아이디로 로그인
                        </span>
                    </button>
                )}
            />
        )
    }
}


const successGoogleLogin = async (googleResponse) => {
    //console.log(response);
    await axios.post(
        oauth.apiUrl + oauth.authPath + "/google",
        JSON.stringify(googleResponse),
        config
    ).then((response) => {
        setItem(response);
    });
};

function setItem(rData) {
    if (rData.status === 200) {
        //console.log(rData.data);
        sessionStorage.setItem("userInfo", JSON.stringify(rData.data.userInfo));
        localStorage.setItem("jwtToken", rData.data.jwtToken);
    }
}

const failLogin = () => {
    console.log("로그인에 실패했습니다.");
}

export default GoogleOAuth;