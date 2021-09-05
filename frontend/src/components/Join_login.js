import React from 'react';
import './Join_login.css';
import { Button } from 'react-bootstrap';

function Join() {
    return (
        <div className="container-fluid">
            <div className="row">
                <h2>회원가입창</h2>
                <div className="col-md-1">
                <Button variant="danger">클릭!</Button>
                </div>
            </div>
        </div>
    );
}

export default Join;