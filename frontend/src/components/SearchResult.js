/*eslint-disable*/
import React, { useState } from 'react';
import './SearchResult.css';
import { Pagination } from 'react-bootstrap';
import ResultData from './ResultData';
import IndexSearchBar from './IndexSearchBar';

function SearchResult() {

    let[result, chResult] = useState(ResultData);
    let active = 1;
    let items = [];
    for (let number = 1; number <= 10; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
            {number}
            </Pagination.Item>
        );
    }

    return(
        <>
        <IndexSearchBar />
        <br />
        <div className="container">
            <div className="row">
                <h4 style={{paddingLeft:'10px', fontWeight:'bold', fontSize:'30px'}}>
                    검색결과<span className="searchWord">(검색어 : The Lady)</span>
                </h4>
                <hr />
            </div>
            <div className="row">
                {
                    result.map((a, i)=>{
                        return(
                            <Result result={result[i]} key={i} />
                        );
                    })
                }
            </div>
            <br />
            <Pagination style={{ justifyContent:'center' }}>
                <Pagination.Prev />
                {items}
                <Pagination.Next />
            </Pagination>
            <br />
        </div>
        </>
    );
}

function Result(props) {
    return(
        <div className="col-md-6">
            <div className="row">
            <div className="col-sm-4">
                <img src={props.result.img} alt="book" width="60%" />
            </div>
            <div className="col-sm-8 bookInfo">
                <span>{props.result.num}</span><br />
                <span>{props.result.title}</span><br />
                <span>저자:{props.result.author}</span><br />
                <span>평점:</span>
                <span className="starRating" style={{ fontSize:'20px', color:'#ADBB0C'}}>
                    {' '}{props.result.rating}
                </span>
            </div>
            </div>
            <br />
        </div>
    );
}

export default SearchResult;