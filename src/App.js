import './App.css';
import About from './component/About';
import Alert from './component/Alert';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import React,{useState} from 'react';
// import { From } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const[mode,setmode]=useState("white");
  const[modes,setmodes]=useState("black");
  const[color_body,setbody]=useState("white");
  const[show,setshow]=useState(null);
  function alert_fun(status,msg) {
    setshow({
      status:status,
      msg:msg
    })
  }
  function changes()
  {
    if(mode=="white")
    {
    setmode(document.getElementById("mainnav").style.backgroundColor='#212529')
    setmodes("white")
    document.body.style.backgroundColor="black";
    alert_fun("Success","Dark mode enable");
    setTimeout(() => {
      setshow(null)
    },1500);
    }
    else
    {
    setmode(document.getElementById("mainnav").style.backgroundColor="white")
    setmodes("black")     
    document.body.style.backgroundColor="white";
    alert_fun("Success","Dark mode disable");
    setTimeout(() => {
      setshow(null)
    },1500);
    }
  }
  return (
    <>
    <Router>
     <Navbar mode={mode} change={changes}  modesn={modes} titles="Page"/>
    <Alert alert={show}/>
    {/* <Switch>  */}
    
    {/* <Route exact path="/about" element={<About/>}/>
      <Route exact path="/">
    <Textform heading="Enter Text To Capitalize The Character" models={mode}/>
    </Route>
     */}

          <Routes>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/" element={<Textform heading="Enter text to analyze"  models={mode} />}>
            </Route>
          </Routes>
    {/* </Switch> */}
    </Router>
    </>
  );
}
export default App;