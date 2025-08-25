import About from './components/About/About';
import Header from './components/Header/Header';
import NavigationBar from './components/NavigationBar';
import { React, useState } from 'react';
import { Fragment } from "react";
import Scrollbutton from "./components/Scrollbutton";


function App() {
    const [darkMode, setDarkMode] = useState(false);

  return (
    <Fragment>
    <div className="App">
      <NavigationBar darkMode={darkMode}
      setDarkMode={setDarkMode} />
      <Header darkMode={darkMode}/>
      <About darkMode={darkMode}/>
      <Scrollbutton/>
    </div>
    </Fragment>
  );
}

export default App;
