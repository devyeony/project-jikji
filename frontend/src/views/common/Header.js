import React from 'react';
import '../../assets/css/common/Header.css';
import Topbar from "../../components/common/Topbar";
import TopbarLogin from "../../components/common/TopbarLogin";
import Menu from "../../components/common/Menu";

function Header() {
    return (
        <>
            <div className="topbar">
                {
                    (function () {
                        if (window.localStorage.getItem('jwtToken') == null || window.sessionStorage.getItem('userInfo') == null) {
                            window.localStorage.clear();
                            window.sessionStorage.clear();
                            document.cookie = "G_AUTHUSER_H" + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                            return <Topbar/>;
                        } else {
                            return <TopbarLogin/>;
                        }
                    })()
                }
            </div>
            <Menu/>
        </>
    );
}

export default Header;