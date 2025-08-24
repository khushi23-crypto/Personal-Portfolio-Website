import React from 'react'
import './NavigationBar.css'
import { FaGithub, FaSun, FaMoon } from "react-icons/fa";

function NavigationBar({ darkMode, setDarkMode }) {
    const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle("bg-dark");
        document.body.classList.toggle("text-light");
    };
    return (
        <header className={`navbar ${darkMode ? "light" : "dark"}`} >
            <div className="logo-container">
                <div className="logo-circle"><span>K</span></div>
                <div className="logo-s">S</div>
            </div>

            <nav className={`nav-menu ${darkMode ? "dark" : "light"}`}>
                <a href="#home" className='menu-circle'>Home</a>
                <a href="#opensource" className='menu-circle'>Open Source</a>
                <a href="#skills" className='menu-circle'>Skills</a>
                <a href="#projects" className='menu-circle'>Projects</a>
                <a href="#resume" className='menu-circle'>Resume</a>
                <a href="#achievements" className='menu-circle'>Achievements</a>
            </nav>

            <div className='nav-right'>
                <a href="https://github.com/khushi23-crypto" className={`github-link ${darkMode ? "dark" : "light"}`} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="github-icon" />
                </a>


                <button variant={darkMode ? "light" : "dark"} onClick={toggleTheme} className="theme-icon" > {darkMode ? <FaMoon /> : <FaSun />} </button>
            </div>
            <div className="nav-connect">
                Connect With Me
            </div>
        </header>
    )
}

export default NavigationBar