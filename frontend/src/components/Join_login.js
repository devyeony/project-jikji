import React from 'react';
import './Join_login.css';
import { Button } from 'react-bootstrap';

function Join_login() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="join_login">
                    <Button variant="info">로그인</Button>
                    <Button varient="primary">회원가입</Button>
                </div>
            </div>
            <div className="flatform">
                <Button style={{ backgroundColor:'#02C73B' }}>네이버 계정으로 로그인</Button><br />
                <Button style={{ backgroundColor: '#EF4545' }}>구글 계정으로 로그인</Button>
            </div>
        </div>
    );
}

export default Join_login;