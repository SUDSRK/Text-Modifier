import React, {useState} from 'react'


export default function Textform(props) {
    const handleUpClick = () =>{   //arrow function for click handle
        let newText = text.toUpperCase()
        setText(newText);
        props.showAlert('Converted to uppercase', 'success') 
    }

    const handleLowClick = () =>{   //arrow function for click handle
      let newText = text.toLowerCase()
      setText(newText); 
      props.showAlert('Converted to lowercase', 'success') 
  }

  const handleClearText = () =>{   //arrow function for click handle
    let newText = ''
    setText(newText); 
}
const countWords = (str) => { //count words using regex
  var matches = str.match(/[\w\d\\'-]+/gi);
  return matches ? matches.length : 0;
}

const handleAltClick = () =>{   //arrow function for click handle
  let newText = text.charAt(0).toUpperCase() + text.slice(1);
  setText(newText); 
}


    const handleOnChange = (event) =>{   //arrow function for textbox change event handle
        setText(event.target.value);  //changing the value on event change
    }

    const [text, setText] = useState('Enter Text Here'); //use state function to change the text,this should always use array degeneration
    // text = "rewyriuew";     //wrong way to change the state
    // setText("rewyriuew");   //correct way to change the state
  return (
    <>
<div className='container' style={{color :  props.mode === 'dark' ? 'white' : 'black'}}>
<h1>{props.heading}</h1>
<div className="mb-3">
    
  <textarea className="form-control" value={text} id="myBox" style={{backgroundColor :  props.mode === 'light' ? 'white' : 'grey', color :  props.mode === 'dark' ? 'white' : 'black'}} onChange={handleOnChange} rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-info mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
<button className="btn btn-success mx-1" onClick={handleAltClick}>Convert to Capital Case</button>
<button className="btn btn-danger mx-1" onClick={handleClearText}>Clear Text</button>
 </div>
 <div className="container" style={{color :  props.mode === 'dark' ? 'white' : 'black'}}>
   <h2>Your Text Summary</h2>
   <p>{countWords(text)} words ,{text.length} characters</p>
   <p>{text.split(' ').length * 0.008}Minutes to Read</p>
   <h2>Preview</h2>
   <p>{text.length>0? text : 'Enter Something to Display'}</p> {/* ternary opeartor to show the msg*/} 
 </div>
 </>
  )
}
