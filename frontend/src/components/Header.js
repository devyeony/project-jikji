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
<<<<<<< Updated upstream
					    <a href="#!" className="login">로그인</a>
					    <a href="#!" className="join">회원가입</a>
=======
					    <NavLink to="/login" className="login">로그인</NavLink> 
					    <NavLink to="/join" className="join">회원가입</NavLink>
>>>>>>> Stashed changes
				    </div>
			    </div>
		    </div>
            
            <nav className="nav-menu">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <div className="navbar-brand">
<<<<<<< Updated upstream
                            <a href="#!"><i className="fas fa-book-reader"></i>JIKJI</a>
                        </div>
                        <ul className="navbar-nav">
                            <li><a href="#!">VIEWER</a></li>
                            <li><a href="#!">마이페이지</a></li>
                            <li><a href="#!">검색 및 조회</a></li>
                            <li><a href="#!">통계자료</a></li>
=======
                            <NavLink exact to="/"><i className="fas fa-book-reader"></i>JIKJI</NavLink>
                        </div>
                        <ul className="navbar-nav">
                            <li><NavLink to="viewer">VIEWER</NavLink></li>
                            <li><NavLink to="mypage">마이페이지</NavLink></li>
                            <li><NavLink to="search">검색 및 조회</NavLink></li>
                            <li><NavLink to="statistics">통계자료</NavLink></li>
>>>>>>> Stashed changes
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

        )
    }
}
export default Header