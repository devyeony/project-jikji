import React, {Component} from "react";
import {Link} from "react-router-dom";

class Menu extends Component {
    render(){
        return(
            <nav className="nav-menu">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <div className="navbar-brand">
                            <Link exact to="/"><i className="fas fa-book-reader"></i>JIKJI</Link>
                        </div>
                        <ul className="navbar-nav">
                            <li><Link to="/viewer">VIEWER</Link></li>
                            <li><Link to="/mypage">마이페이지</Link></li>
                            <li><Link to="/search">검색 및 조회</Link></li>
                            <li><Link to="/statistics">통계페이지</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Menu;