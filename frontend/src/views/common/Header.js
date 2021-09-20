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