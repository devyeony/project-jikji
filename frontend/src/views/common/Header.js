import React from 'react';
import Cookies from 'universal-cookie';
import '../../assets/css/common/Header.css';
import Topbar from "../../components/common/Topbar";
import TopbarLogin from "../../components/common/TopbarLogin";
import Menu from "../../components/common/Menu";

const cookies = new Cookies();

function Header() {

    return (
        <>
            <div className="topbar">
                {
                    (function () {
                        if (window.localStorage.getItem('jwtToken') == null || window.sessionStorage.getItem('userInfo') == null) {
                            window.localStorage.clear();
                            window.sessionStorage.clear();
                            cookies.remove('G_AUTHUSER_H');
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