import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Topbar extends Component {
    render(){
        return(
            <div className="container-fluid">
                <div className="social-links">
                    <Link to="/login">로그인</Link>
                </div>
            </div>
        )
    }
}

export default Topbar;