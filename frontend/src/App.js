import React from 'react';
import './App.css';
//import Header from './components/Header';
//import Footer from './components/Footer';
import axios from 'axios';
import dotenv from "dotenv";
dotenv.config();

// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from '@material-ui/core/Button';

/* function App() {
  return (
    <Header/ >
    // metarial ui 실습코드 필요시 참고해서 쓰기
    // <Button variant="contained" color="secondary">Hello!</Button>
  );
} */

class App extends React.Component {
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
}

export default App; 
