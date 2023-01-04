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

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div
        className="container"
        id="container"
        style={{
          color: props.mode === "dark" ? "white" : "#171d2f",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#171d2f",
            }} //here we have put a curly braces to write javascrit and another curly braces to have an object of styles and used the conditional rendering by using the props "mode" .
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-1"
          style={{ color: props.newMode === "green" ? "green" : "light" }}
          onClick={handleUpCase}
        >
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handlelowCase}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handlecapCase}>
          Capitalize
        </button>
      </div>
      <div
        className="container my-3"
        id="summaryContainer"
        style={{ color: props.mode === "dark" ? "white" : "#171d2f" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length}words and {text.length}characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter Something on the textbox to preview it here."}
        </p>
      </div>
    </>
  );
}
