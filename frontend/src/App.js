import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import axios from 'axios';

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
    const tests = await axios.get('http://ec2-15-165-84-47.ap-northeast-2.compute.amazonaws.com:7000/hello');
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
