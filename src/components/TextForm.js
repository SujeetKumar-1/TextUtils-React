import React, { useState } from 'react';


export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to Uppercase!", "success");
    }

    const handleLoClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Converted to Lowercase!", "success");
    }

    const handleCleareClick = () => {
        let newtext = "";
        setText(newtext)
        props.showAlert("Texts has been Cleared!", "success");

    }

    const handleCopy = ()=>{
        let text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Texts Copied to clipboard!", "success");
    }

    const handleExtraSpace = ()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces has been Deleted!", "success");
    }

    const handleOnChange = (event) => {
        console.log("OnChange was clicked");
        setText(event.target.value);
    }


    const [text, setText] = useState('Enter text here');
    // text="new text"; //wrong way to update text value
    // setText("New Text"); //right way to update  text value
    return (
        <div>
            <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#042843':'white',color: props.mode==='dark'?'white':'black'}}></textarea>
                </div>

                <button className="btn btn-primary mx-2" onClick={handleUpClick}> Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}> Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleCleareClick}> Cleare Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}> Copy</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}> Delete Extra Space</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length-1} word and {text.length} charachter</p>
                <p>{0.008 * text.split(" ").length} Minuts to read</p>
                <h3>Priview</h3>
                <p>{text.length>0?text:"Enter Something to textbox to preview here!"}</p>
            </div>
        </div>
    )
}
