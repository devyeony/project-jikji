/*eslint-disable*/

import React, {useState} from 'react';
import './App.css';
import { NavLink } from 'react-bootstrap';
import Newbook from './Newbook.js';
import Likebook from './Likebook.js';
import { Link, Route, Switch } from 'react-router-dom';
import Join from './components/Join';
import Login from './components/Login';
import Mypage from './components/Mypage';
import Search from './components/Search';
import Viewer from './components/Viewer';
import Statistics from './components/Statistics';
// import axios from 'axios';
import dotenv from "dotenv";
dotenv.config();

function App() {

  let[newbook, changenewbk] = useState(Newbook);
  let[likebook, changelikebk] = useState(Likebook);

  return (
    <div className="App">
      <div className="topbar">
			    <div className="container-fluid">
				    <div className="social-links">
					    <NavLink><Link to="/login">로그인</Link></NavLink> 
					    <NavLink><Link to="/join">회원가입</Link></NavLink>
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
      </Route>
      <Route path="/join" component={Join}><Join /></Route>
      <Route path="/login"><Login /></Route>
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
    const tests = await axios.get('http://ec2-15-165-84-47.ap-northeast-2.compute.amazonaws.com/api/hello');
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
