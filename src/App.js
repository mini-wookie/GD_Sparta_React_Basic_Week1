import './App.css';
import NameCard from './NameCard'
import './style.css'

function App() {
  var name = '김민욱-Wookie'
  return (
    <div className="App">
      <div className="container">
      <img className="main-pic" src="https://spartacodingclub.kr/static/css/images/ogimage2.jpg" alt="메인 대표 사진"/>
      <NameCard name={name}/>
      </div>
    </div>
  );
}

export default App;
