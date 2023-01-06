import Navbar from "./component/textUtils/Navbar";
import TextForm from "./component/textUtils/TextForm";
import Alert from "./component/textUtils/Alert";
import { useState } from "react";
// import About from "./component/textUtils/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./component/textUtils/About";

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not.
  const [newMode, setNewMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const newToggleMode = () => {
    if (newMode === "light") {
      setNewMode("gren");
      document.body.style.backgroundColor = "green";
      // const btn = document.getElementsByClassName("btn");
      // btn.style.backgroundColor = "green";
      const textContiener = document.getElementById("container");
      textContiener.style.color = "white";
      const summary = document.getElementById("summaryContainer");
      summary.style.color = "white";
      showAlert("green mdoe has been enabled", "success");
    } else {
      setNewMode("light");
      document.body.style.backgroundColor = "white";
      const textContiener = document.getElementById("container");
      textContiener.style.color = "black";
      const summary = document.getElementById("summaryContainer");
      summary.style.color = "black";
      showAlert("Light mdoe has been enabled", "success");
    }
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#171d2f";
      showAlert("Dark mdoe has been enabled", "success");
      // document.title = "TextUtils Dark mode";
      // setInterval(() => {
      //   document.title = "TextUtils is amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install Textutils Now";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mdoe has been enabled", "success");
      // document.title = "TextUtils Light mode";
    }
  };

  return (
    <>
      <BrowserRouter>
        {/* we should always keep the navbar inside of the browser router otherwise it throws an error named useHref  */}
        <Navbar
          title="TextUtil  "
          mode={mode}
          newMode={newMode}
          newToggleMode={newToggleMode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my 3">
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  heading="Try! textUtils word Counter time counter and Case converter"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
            <Route path="/about" element={<About mode={mode} />} />
            {/* <Route path="/aboutUs" element={<AboutUs />} /> */}
          </Routes>
          {/* <About /> */}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
