/*eslint-disable*/

import React, {useState} from 'react';
import './App.css';
import { NavLink } from 'react-bootstrap';
import Newbook from './Newbook.js';
// import axios from 'axios';

import dotenv from "dotenv";
dotenv.config();

// import Button from '@material-ui/core/Button';

function App() {

  let[books, changeBooks] = useState(Newbook);

  return (
    <div className="App">
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

      <div className="contents">
        <br />
        <h4>새로 업데이트 된 책</h4>
        <hr />

        <div className="container">
            {
              books.map((a, i)=>{
                return <Book books={books[i]} />
              })
            }
        </div>

      </div>

    </div>
  );
}

  function Book(props) {
    return(
      <div className="col-md-2.4">
        <img src="https://www.gutenberg.org/cache/epub/66209/pg66209.cover.medium.jpg" alt="book"/>
        <h5>{props.books.title}</h5>
      </div>
    );
  }

/* class App extends React.Component {
  state = {
    isLoading: true
  };
  
  test = async () => {
    const tests = await axios.get(process.env.REACT_APP_API_URL+'/hello');
    console.log(tests);
    console.log(tests.data);
  }
  componentDidMount() {
    this.test();
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading...': 'Ready'}</div>
  }
} */

export default App; 
