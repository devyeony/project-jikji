/*eslint-disable*/
import React, { useState } from 'react';
import './assets/css/main/App.css';
import Newbook from './assets/data/main/Newbook.js';
import Likebook from './assets/data/main/Likebook.js';
import { Link, Route, Switch } from 'react-router-dom';
import Header from './views/common/Header';
import Login from './views/login/Login';
import Mypage from './views/mypage/Mypage';
import Search from './views/search/Search';
import Viewer from './views/viewer/Viewer';
import Statistics from './views/statistics/Statistics';
import SearchResult from './views/search/SearchResult';
// import axios from 'axios';
import dotenv from "dotenv";
dotenv.config();

function App() {

  let[newbook, changenewbk] = useState(Newbook);
  let[likebook, changelikebk] = useState(Likebook);

  return (
    <div className="App">
      <Header />
      <Switch>
      <Route exact path="/">
      <div className="contents">
          <br />
          <div className="mainbook">
            <h4 style={{paddingLeft:'10px', fontWeight:'bold', fontSize:'30px'}}>
              새로 업데이트 된 책
            </h4>
            <Link to="/search">+더보기</Link>
          </div>
          <hr />
          <div className="container">
            <div className="row">
              {
                newbook.map((a, i)=>{
                  return <Updatebk newbook={newbook[i]} key={i} />
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
                  return <Likebk likebook={likebook[i]} key={i} />
                })
              }
            </div>
          </div>
          <hr />
      </div>
      <div className="footer">
        <div className="container-fluid">
          <div className="footer-char">
            Copyright (c) 2021 <a href="https://github.com/devyeony">Yeonhee Kim</a>
            {' '}&amp;{' '}<a href="https://github.com/Minseo-Gang">Minseo Gang</a>
          </div>
        </div>
      </div>
      </Route>
        <Route path="/login"><Login /></Route>
        <Route path="/viewer"><Viewer /></Route>
        <Route path="/mypage"><Mypage /></Route>
        <Route path="/search"><Search /></Route>
        <Route path="/statistics"><Statistics /></Route>
        <Route path="/searchResult"><SearchResult /></Route>
      </Switch>
    </div> // App
  );
}

  function Updatebk(props) {
    return(
      <div className="col-md-3" style={{textAlign:'center'}} >
        <img src={props.newbook.img} alt="book" width="40%"/>
        <h5 className="book">{props.newbook.title}</h5>
      </div>
    );
  }

  function Likebk(props) {
    return(
      <div className="col-md-3" style={{textAlign:'center'}} >
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
