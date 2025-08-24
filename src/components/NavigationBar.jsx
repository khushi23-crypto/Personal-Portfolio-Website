import React from 'react'
import './NavigationBar.css'
import { FaGithub, FaSun, FaMoon } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { SiGoogledocs } from "react-icons/si";
import { BiSolidContact } from "react-icons/bi";
import { FaProjectDiagram } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa";


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
                <a href="#home" className='menu-circle'><IoHomeSharp /> &nbsp;Home</a>
                <a href="https://github.com/khushi23-crypto/" className='menu-circle'><FaCodeBranch />&nbsp;Open Source</a>
                <a href="#skills" className='menu-circle'><FaTools />&nbsp;Skills</a>
                <a href="#projects" className='menu-circle'><FaProjectDiagram />&nbsp;Projects</a>
                <a href="#resume" className='menu-circle'><SiGoogledocs />&nbsp;Resume</a>
                <a href="#achievements" className='menu-circle'><FaTrophy />&nbsp;Achievements</a>
                <a href="#contact" className='menu-circle'><BiSolidContact />&nbsp;Contact</a>
            </nav>

            <div className='nav-right'>
                <a href="https://github.com/khushi23-crypto" className={`github-link ${darkMode ? "dark" : "light"}`} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="github-icon" />
                </a>


                <div className={`theme-toggle ${darkMode ? "dark" : ""}`} onClick={toggleTheme}>
                    <div className="toggle-thumb">
                        {darkMode ? <FaMoon size={16} /> : <FaSun size={16} />}
                    </div>
                </div>
            </div>
            
        </header>
    )
}

export default NavigationBar