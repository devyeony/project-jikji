import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { NavLink } from 'react-router-dom';

class Header extends React.Component{
    render() {
        return(
        <div className="header">
            <div className="topbar">
			    <div className="container">
				    <div className="social-links">
					    <NavLink to="/login" className="login">로그인</NavLink> 
					    <NavLink to="/join" className="join">회원가입</NavLink>
				    </div>
			    </div>
		    </div>
            
            <nav className="nav-menu">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <div className="navbar-brand">
                            <NavLink exact to="/"><i className="fas fa-book-reader"></i>JIKJI</NavLink>
                        </div>
                        <ul className="navbar-nav">
                            <li><NavLink to="viewer">VIEWER</NavLink></li>
                            <li><NavLink to="mypage">마이페이지</NavLink></li>
                            <li><NavLink to="search">검색 및 조회</NavLink></li>
                            <li><NavLink to="statistics">통계자료</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

        )
    }
}
export default Header