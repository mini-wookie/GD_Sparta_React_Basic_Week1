import React from 'react';
import './App.css';
import NameCard from './NameCard'
import './style.css'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: '김민욱 - Wookie'
    };
  }
  render(){
    return (
      <div className="App">
      <div className="container">
      <img className="main-pic" src="https://spartacodingclub.kr/static/css/images/ogimage2.jpg" alt="메인 대표 사진"/>
      <NameCard name={this.state.name}/>
      </div>
    </div>
    );
  }
}

export default App;
