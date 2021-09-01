import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

class Header extends React.Component{
    render() {
        return(
        <div className="header">
            <div className="topbar">
			    <div className="container">
				    <div className="social-links">
					    <a href="#!" className="login">로그인</a>
					    <a href="#!" className="join">회원가입</a>
				    </div>
			    </div>
		    </div>
            
            <nav className="nav-menu">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <div className="navbar-brand">
                            <a href="#!"><i className="fas fa-book-reader"></i>JIKJI</a>
                        </div>
                        <ul className="navbar-nav">
                            <li><a href="#!">VIEWER</a></li>
                            <li><a href="#!">마이페이지</a></li>
                            <li><a href="#!">검색 및 조회</a></li>
                            <li><a href="#!">통계자료</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

        )
    }
}
export default Header