// import React from 'react';
import react, {useState} from 'react';
export default function Textform(props) {
  const [text,sets]=useState("");
  const [change,setchange]=useState("");
  function my() {
        let cap=text.toUpperCase();
       sets(cap)

    }
    function myl() {
      let cap=text.toLowerCase();
      sets(cap)
      }
  function on(e) {
  sets(e.target.value);

  }
  function clear_all(){
    sets("")
  }
  function remover(){
    let cp=document.getElementById("box1").value;
    let nt=cp.split(/[ ]+/);
   sets(nt.join(" "))
  }
  function  copy_all(){
    let cp=document.getElementById("box1").value;
    console.log(cp)
    navigator.clipboard.writeText(cp)
  }
  return (
    <>
<div className=" container " style={{color:props.models==='white'?'black':'white'}}>
  <label className="form-label my-3"><h2>{props.heading}</h2></label>
  <textarea className="form-control" id="box1"  value={text} onChange={on} rows="8"></textarea>
  <button className="btn btn-primary my-2"  onClick={my} >Convert to uppercase</button>
  <button className="btn btn-primary mb-2 my-2 mx-2"  onClick={myl} >Convert to Lowercase</button>
  <button className="btn btn-primary mb-2 my-2 mx-2"  onClick={clear_all} >Clear String</button>
  <button className="btn btn-primary mb-2 my-2 mx-2"  onClick={remover} >extra space remober</button>
  <button className="btn btn-primary mb-2 my-2 mx-2"  onClick={copy_all} >Copy String</button>

</div>
<div className='container' style={{color:props.models==='white'?'black':'white'}}>
  <h3>Summary/Add Feature</h3>
<p>Words in your text {text.split(" ").length} , length of string {text.length}</p>
<p>Time Required to Read text word is {(text.split(" ").length)/238}</p>
<h3>Preview</h3>
<p>{text}</p>
</div>
    </>
  )
}
