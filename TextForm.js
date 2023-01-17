import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  //   text = "lfsdjlkfjsdlkfjsd"; wrong way to set the text.
  const handleUpCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };
  const handlelowCase = () => {
    let newText1 = text.toLowerCase();
    setText(newText1);
    props.showAlert("Converted to Lowercase", "success");
  };
  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard! ", "success");
  };
  const handlecapCase = () => {
    const mySentence = text;
    const words = mySentence.split(" ");
    console.log(words);
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    let str = words.join(" ");
    setText(str);
    props.showAlert("Text Capitalized", "success");
  };

  const newStyle = {};
  if (props.mode === "light") {
    newStyle.color = "#171d2f";
  }
  if (props.mode === "dark") {
    newStyle.color = "white";
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="container" style={newStyle} id="container">
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#171d2f",
            }} //here we have put a curly braces to write javascrit and another curly braces to have an object of styles and used the conditional rendering by using the props "mode" .
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className={`btn btn-{if(${props.mode}==="light"){
            dark
          }if(${props.mode}==="dark"){
           light
          }
          else{
            ${props.mode}
          } mx-1 my-1`}
          style={{ border: "1px solid black" }}
          onClick={handleUpCase}
        >
          Convert to uppercase
        </button>
        <button
          className={`btn btn-{if(${props.mode}==="light"){
            dark
          }if(${props.mode}==="dark"){
           light
          }
          else{
            ${props.mode}
          }
        } mx-1 my-1`}
          style={{ border: "1px solid black" }}
          disabled={text.length === 0}
          onClick={handlelowCase}
        >
          Convert to lowercase
        </button>
        <button
          className={`btn btn-{if(${props.mode}==="light"){
            dark
          }if(${props.mode}==="dark"){
           light
          }
          else{
            ${props.mode}
          } mx-1 my-1`}
          style={{ border: "1px solid black" }}
          disabled={text.length === 0}
          onClick={handleCopyText}
        >
          copy text
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-{if(${props.mode}==="light"){
            dark
          }if(${props.mode}==="dark"){
            light
          }
          else{
            ${props.mode}
          } mx-1 my-1`}
          style={{ border: "1px solid black" }}
          onClick={handlecapCase}
        >
          Capitalize
        </button>
      </div>
      <div className="container my-3" id="summaryContainer" style={newStyle}>
        <h2>Your text summary</h2>
        <p>
          {
            // used the .filter() method to remove the counting of spaces as a no of word itself as when write a word for eg good and hit space it shows 2 words so to remove it we have used the filter method where it returns the values that are only true and since the space doesnot have any length so it is not true and it returns everything except it. check without the filter function and you will find out!
            text.split(" ").filter((e) => {
              return e.length !== 0;
            }).length
          }
          words and {text.length}characters
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((e) => {
              return e.length !== 0;
            }).length}{" "}
          minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
      </div>
    </>
  );
}
