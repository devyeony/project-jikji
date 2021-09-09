import React, { useState } from 'react';
import './Search.css';
import Author from './Author.js';
import Book from './Book.js';
import { Link } from 'react-router-dom';

function Search() {

    let[name, chName] = useState(Author);
    let[title, chTitle] = useState(Book);
    
    return (
    <>
        <div className="author">
            작가 검색{' '}:{' '}
            {
                name.map((a, i)=>{
                    return(
                        <AuthorName name={name[i]} key={i}/>
                    );
                })
            }
        </div>
        <div className="book">
            책 검색{' '}:{' '}
            {
                title.map((a, i)=>{
                    return(
                        <BookName title={title[i]} key={i}/>
                    );
                })
            }
        </div>
    </>
    );
}

function AuthorName(props) {
    return(
        <>
        <span className="authorName">
            <Link to={props.name.link}>{props.name.list}</Link>
        </span>
        </>
    )
}

function BookName(props) {
    return(
        <>
        <span className="bookName">
            <Link to={props.title.link}>{props.title.list}</Link>
        </span>
        </>
    )
}





export default Search;