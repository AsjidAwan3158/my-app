import React, { useState } from "react";
export default function Textform(props) {
  const [text, setText] = useState("");
  const handleupclick = () => {
    // console.log("upper casse letter");
    let newtext = text.toUpperCase();
    setText(newtext);
    if(text.length>0){
    props.showAlert("text is converted to uppercase","success");}
  };
  const handleloclick = () => {
    // console.log("upper casse letter");
    let newtext = text.toLowerCase();
    setText(newtext);
     if(text.length>0){

       props.showAlert("text is converted into lowercase","success");
     }
  };
  const handleChange = (event) => {
    // console.log('lower case');
    setText(event.target.value);
  
  };
  const handleclearclick = () => {
    // console.log("upper casse letter");
    let newtext = "";
    setText(newtext);
    if(text.length>0){
      
      props.showAlert("Text is removed","success");
    }
  };
  const handlecopyclick = () => {
    navigator.clipboard.writeText(text);
    if(text.length>0){
    props.showAlert("Text is copied to clipboard","success");
    }
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    console.log(text.split("  "));
    setText(newText.join(" "));
    
    if(text.split("  ").length>1){
      
      props.showAlert("Extra space is removed","success");
    }
  };
// const[name,setName]=useState("my name is");
// console.log(name.split(" "));
  return (
    <>
      <div className="container" style={{color:props.text}}>
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className={`form-control bg-${props.text==='black'?'light':'dark'}`} 
            style={{color:props.text}}
            value={text}
            onChange={handleChange}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <button type="submit" className={`btn btn-${props.mode} mb-2 mx-2 `} onClick={handleupclick}>  Convert To UpperCase{" "}
        </button>
        <button type="submit" className={`btn btn-${props.mode} mb-2 mx-2 `} onClick={handleloclick}>  Convert To LowerCase{" "}
        </button>
        <button type="submit" className={`btn btn-${props.mode} mb-2 mx-2 `} onClick={handleclearclick} >  Clear text
        </button>
        <button type="submit" className={`btn btn-${props.mode} mb-2 mx-2 `} onClick={handlecopyclick}>  Copy text
        </button>
        <button type="submit" className={`btn btn-${props.mode} mb-2 mx-2 `} onClick={handleExtraSpace}> Remove Extra Space 
        </button>
        <button type="submit" className={`btn btn-${props.mode} mb-2 mx-2 `} onClick={handleExtraSpace}> Remove Extra Space 
        </button>
      </div>
      <div className="container my-2" style={{color:props.text}}>
        <h1>Text Summery</h1>
        <p>
          {text.length>1? text.split(" ").length:0} words and {text.length} characters
        </p>
        
        <p>{text.length>1?0.008 * text.split(" ").length:0} minuts to read </p>
    <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the above textbox to preview here"}</p>
      </div>
    </>
  );
  
}
