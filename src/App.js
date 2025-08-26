import About from './components/About/About';
import Header from './components/Header/Header';
import NavigationBar from './components/NavigationBar';
import { React, useState } from 'react';
import Scrollbutton from "./components/Scrollbutton";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Skills from './components/Skills/Skills';
import Project from './components/Project/Project'
import Contact from './components/Contact/Contact';
import Achievement from './components/Achievements/Achievement';
function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>


      <NavigationBar darkMode={darkMode}
        setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/home" element={<Header darkMode={darkMode} />} />
        <Route path="/about" element={<About darkMode={darkMode} />} />
        <Route path="/skills" element={<Skills darkMode={darkMode} />} />
        <Route path="/projects" element={<Project darkMode={darkMode} />} />
        <Route path="/contact" element={<Contact darkMode={darkMode} />} />
        <Route path="/achievements" element={<Achievement darkMode={darkMode} />} />

      </Routes>
      <Scrollbutton />
    </Router>
  );
}

export default App;
