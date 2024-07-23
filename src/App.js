// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
import React, { useState } from 'react';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not.
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success")
      document.title = "TextUtils Dark Mode";

      // Highlight website title continuously
      // setInterval(()=>{
      //   document.title="TextUtils is amazing tools";
      // }, 2000);

      // setInterval(()=>{
      //   document.title="Install TextUtils Now";
      // }, 1500);

    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }
  }

  return (
    <div>

      {/* <Router> */}
      <Navbar title="TextUtils" abouttxt="About us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/"> */}
            <TextForm showAlert={showAlert} heading="Enter your heading" mode={mode}></TextForm>
          {/* </Route>
        </Switch> */}
      </div>
      {/* </Router> */}
    </div>
  );
}

export default App;
