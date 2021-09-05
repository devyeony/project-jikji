/*eslint-disable*/
import React, {useState} from 'react';
import './App.css';
import { NavLink } from 'react-bootstrap';
import Newbook from './Newbook.js';
import Likebook from './Likebook.js';
import { Link, Route, Switch } from 'react-router-dom';
import Join_login from './components/Join_login';
import Mypage from './components/Mypage';
import Search from './components/Search';
import Viewer from './components/Viewer';
import Statistics from './components/Statistics';
// import axios from 'axios';
import dotenv from "dotenv";
dotenv.config();

// import Button from '@material-ui/core/Button';

function App() {

  let[newbook, changenewbk] = useState(Newbook);
  let[likebook, changelikebk] = useState(Likebook);

  return (
    <div className="App">
      <div className="topbar">
			    <div className="container-fluid">
				    <div className="social-links">
					    <NavLink><Link to="/join_login">로그인</Link></NavLink> 
					    <NavLink><Link to="/join_login">회원가입</Link></NavLink>
				    </div>
			    </div>
		  </div>
      <nav className="nav-menu">
          <div className="container-fluid">
            <div className="navbar-header">
              <div className="navbar-brand">
                <NavLink><i className="fas fa-book-reader"></i>
                    <Link exact to="/">JIKJI</Link></NavLink>
              </div>
              <ul className="navbar-nav">
                <li><NavLink><Link to="/viewer">VIEWER</Link></NavLink></li>
                <li><NavLink><Link to="/mypage">마이페이지</Link></NavLink></li>
                <li><NavLink><Link to="/search">검색 및 조회</Link></NavLink></li>
                <li><NavLink><Link to="/statistics">통계페이지</Link></NavLink></li>
              </ul>
            </div>
          </div>
      </nav>
      <Route exact path="/">
      <div className="contents">
          <br />
          <div className="mainbook">
            <h4 style={{paddingLeft:'10px',fontWeight:'bold',fontSize:'30px'}}>
              새로 업데이트 된 책
            </h4>
            <Link to="/search">+더보기</Link>
          </div>
          <hr />
          <div className="container">
            <div className="row">
              {
                newbook.map((a, i)=>{
                  return <Updatebk newbook={newbook[i]} />
                })
              }
            </div>
          </div>
          <hr />
          <br />
          <div className="mainbook">
              <h4 style={{paddingLeft:'10px',fontWeight:'bold',fontSize:'30px'}}>
                내가 찜한 도서와 비슷한 책</h4>
              <Link to="/mypage">+더보기</Link>
          </div>
          <hr />
          <div className="container">
            <div className="row">
              {
                likebook.map((a, i)=>{
                  return <Likebk likebook={likebook[i]} />
                })
              }
            </div>
          </div>
          <hr />
      </div>
      <div className="footer">
        <div className="container-fluid">
          <div className="footer-char">
            Copyright (c) 2021 Yeonhee Kim &amp; Minseo Gang
          </div>
        </div>
      </div>
      </Route>
      <Route path="/join_login"><Join_login /></Route>
      <Route path="/viewer"><Viewer /></Route>
      <Route path="/mypage"><Mypage /></Route>
      <Route path="/search"><Search /></Route>
      <Route path="/statistics"><Statistics /></Route>
      
    </div> // App
  );
}

  function Updatebk(props) {
    return(
      <div className="col-md-3">
        <img src={props.newbook.img} alt="book" width="40%"/>
        <h5 className="book">{props.newbook.title}</h5>
      </div>
    );
  }

  function Likebk(props) {
    return(
      <div className="col-md-3">
        <img src={props.likebook.img} alt="book" width="40%"/>
        <h5 className="book">{props.likebook.title}</h5>
      </div>
    );
  }

/* class App extends React.Component {
  state = {
    isLoading: true
  };
  
  test = async () => {
    const tests = await axios.get('process.env.REACT_APP_API_URL+'/hello');
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
