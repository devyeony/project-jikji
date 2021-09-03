import React, {Fragment} from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
//import Footer from './components/Footer';
import dotenv from "dotenv";
dotenv.config();

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Join from './components/Join';
import Login from './components/Login';
import Mypage from './components/Mypage';
import Search from './components/Search';
import Viewer from './components/Viewer';
import Statistics from './components/Statistics';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from '@material-ui/core/Button';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path={"/join"} component={Join} />
        <Route path={"/login"} component={Login} />
        <Route path={"/mypage"} component={Mypage} />
        <Route path={"/search"} component={Search} />
        <Route path={"/viewer"} component={Viewer} />
        <Route path={"/statistics"} component={Statistics} />
      </Switch>
    </Router>
    
    // metarial ui 실습코드 필요시 참고해서 쓰기
    // <Button variant="contained" color="secondary">Hello!</Button>
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
