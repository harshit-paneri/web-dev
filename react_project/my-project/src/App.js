import logo from './logo.svg';
import './App.css';
// import '../components/header.js'
import {Header} from './components/Header.js';
import {Footer} from './components/Footer.js';
import {Siginup} from './components/Siginup.js';

function App() {
  const add = () =>{
    console.log("add");
  }
  return (
    <div className="App">
    <Header/>
    
    <Siginup/>
    <Footer/>
    </div>
  );
}

export default App;
