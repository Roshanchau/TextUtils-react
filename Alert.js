import React from "react";

function Alert(props) {
  //function to capitalize the first letter.
  const Capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1); //her the charAt(0) returns the first letter and converts it into uppercase and then the lower.slice(1) returns all the letters except the first one and we concatinate it.
  };
  return (
    //below we have used the props.alert&& as if in the useState alert mode is null then it will not show the alert message but if when toggled the type of the alert changes to sucess and then both the statements becomes true and we render the alert section.
    /*this happend because all the jsx will be converted to javascript calls*/

    // -----below we have given a seperate div for the alert so that it doesnot always scroll down pushing the other elements down it is a bad user exp.----------
    <div style={{ height: "60px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{Capitalize(props.alert.type)}</strong>:{props.alert.msg}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
    </div>
  );
}

export default Alert;
