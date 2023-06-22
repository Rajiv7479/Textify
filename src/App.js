import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer } from "./components/Footer";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      // document.body.style.backgroundColor = '#170948';
      document.body.className = "body__dark";
      showAlert("Dark mode has been enabled", "success"); // it shows alert if dark mode is enabled
    } else {
      setMode("light");
      // document.body.style.backgroundColor = "white";
      document.body.classList = "body__light";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="Textify"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/">
              <TextForm
                showAlert={showAlert}
                heading="Textify - play with text"
                mode={mode}
              />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer mode={mode} toggleMode={toggleMode} />
    </>
  );
}

export default App;
