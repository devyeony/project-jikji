/*eslint-disable*/
import React, { useState } from 'react';
import '../../assets/css/search/Search.css';
import { Tabs, Tab } from 'react-bootstrap';
import UpdateBook from '../../assets/data/search/UpdateBook.js';
import ScoreBook from '../../assets/data/search/ScoreBook.js';
import LikeBook from '../../assets/data/search/LikeBook.js';
import IndexSearchBar from '../../components/search/IndexSearchBar.js';

function Search() {

    let[update, chUpdate] = useState(UpdateBook);
    let[score, chScore] = useState(ScoreBook);
    let[like, chLike] = useState(LikeBook);
    
    return (
        <>
        <IndexSearchBar />
        <div className="container">
        <div className="row">
        <div className="tabs">
            <Tabs defaultActiveKey="update" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="update" className="update" title="업데이트순">
                    <div className="row">
                        {
                            update.map((a, i)=>{
                                return (
                                    <UpdateBooks update={update[i]} key={i}/>
                                );
                            })
                        }
                    </div>
                </Tab>
                <Tab eventKey="score" className="score" title="평점순">
                    <div className="row">
                        {
                            score.map((a, i)=>{
                                return (
                                    <ScoreBooks score={score[i]} key={i}/>
                                );
                            })
                        }
                    </div>
                </Tab>
                <Tab eventKey="like" className="like" title="좋아요순">
                    <div className="row">
                        {
                            like.map((a, i)=>{
                                return (
                                    <LikeBooks like={like[i]} key={i}/>
                                );
                            })
                        }
                    </div>
                </Tab>
            </Tabs>
        </div>
        </div>
        </div>
        </>
    );
}

function UpdateBooks(props) {
    return(
        <div className="col-md-3" style={{ textAlign:'center'}}>
            <img src={props.update.img} alt="book" width="40%" />
            <h5 className="updateBk">{props.update.title}</h5>
            <h6 className="updateStar" style={{ fontSize:'23px', color:'#ADBB0C'}}>
                {props.update.rating}</h6>
            <br />
        </div>
    );
}

function ScoreBooks(props) {
    return(
        <div className="col-md-3" style={{ textAlign:'center'}}>
            <img src={props.score.img} alt="book" width="40%" />
            <h5 className="scoreBk">{props.score.title}</h5>
            <h6 className="scoreStar" style={{ fontSize:'23px', color:'#ADBB0C'}}>
                {props.score.rating}</h6>
            <br />
        </div>
    );
}

function LikeBooks(props) {
    return(
        <div className="col-md-3" style={{ textAlign:'center'}}>
            <img src={props.like.img} alt="book" width="40%" />
            <h5 className="likeBk">{props.like.title}</h5>
            <h6 className="likeStar" style={{ fontSize:'23px', color:'#f48fb1'}}>
                {props.like.rating}</h6>
            <br />
        </div>
    );
}

export default Search;