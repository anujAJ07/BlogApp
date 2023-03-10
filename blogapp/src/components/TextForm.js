import React, { useState } from "react";
// import jsPDF from 'jspdf';

export default function TextForm(props) {
const handleUpClick = ()=> {
    let newText = text.toUpperCase();
    setText(newText);
}

const handleLoClick = ()=> {
    let newText = text.toLowerCase();
    setText(newText);
}
// const textAreaRef = useRef(null);
// const handleDownloadText = ()=> {
//     const doc = new jsPDF();
//     const text1 = textAreaRef.current.value;
//     doc.text(text1, 30, 80);
//     doc.save('document.pdf');
// }
const handleRemoveSpaces = ()=> {
    let newText = text.replace(/\s+/g, ' ');
    setText(newText);
}

const handleCopyText = ()=> {
    navigator.clipboard.writeText(text)
}
const handleClearText = ()=> {
     setText("");
}
const handleOnChange = (event)=> {
    setText(event.target.value);    
} 


const [text, setText] = useState('');
  return (
    <div className="container my-3" style={{color : props.mode==='light'?'#0b336e':'white'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">        
        <textarea
          className="form-control"
          onChange = {handleOnChange}
          style={{backgroundColor: props.mode==='light'?'white':'grey',color: props.mode==='light'?'#0b336e':'white'}}
          id="myBox"          
          value={text}
          rows="8"
        ></textarea>   
       <button type="button" onClick={handleUpClick} className="btn btn-primary my-3">Convert to Uppercase</button>
       <button type="button" onClick={handleLoClick} className="btn btn-primary my-3 mx-2">Convert to Lowercase</button>
       <button type="button" onClick={handleClearText} className="btn btn-primary my-3 mx-2">Clear the Text</button>
       <button type="button" onClick={handleCopyText} className="btn btn-primary my-3 mx-2">Copy the Text</button>
       <button type="button" onClick={handleRemoveSpaces} className="btn btn-primary my-3 mx-2">Remove Spaces</button>
       {/* <button type="button" onClick={handleDownloadText} className="btn btn-primary my-3 mx-2">Download text in PDF</button> */}





      <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length-1} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length}  Minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something to preview it here"}</p>
        </div>
      </div>
    </div>
  );
}
