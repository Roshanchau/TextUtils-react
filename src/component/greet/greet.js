import React from "react";
import "./styles.css";

const getTime = new Date(2022, 5, 12, 5);
const newTime = getTime.getHours();
let greetings = "";
const cssStyles = {};
const blockStyles = {
  backgroundColor: "lightblue",
  width: "400px",
  textAlign: "center",
};
if (newTime >= 1 && newTime < 12) {
  greetings = "Good Morning";
  cssStyles.color = "green";
} else if (newTime >= 12 && newTime < 19) {
  greetings = "Good Afternoon";
  cssStyles.color = "orange";
} else {
  greetings = "Good Night";
  cssStyles.color = "black";
}
const Greet = () => {
  return (
    <>
      <h1 style={blockStyles}>
        Hello sir, <span style={cssStyles}>{greetings}</span>
      </h1>
    </>
  );
};

export default Greet;
