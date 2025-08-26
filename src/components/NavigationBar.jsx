import React from 'react'
import './NavigationBar.css'
import { FaGithub, FaSun, FaMoon } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { BiSolidContact } from "react-icons/bi";
import { FaProjectDiagram } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";
import { Link } from "react-router-dom";


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
                <Link to="/home" className='menu-circle'><IoHomeSharp /> &nbsp;Home</Link>
                <Link to="https://github.com/khushi23-crypto/" className='menu-circle'><FaCodeBranch />&nbsp;Open Source</Link>
                <Link to="/skills" className='menu-circle'><FaTools />&nbsp;Skills</Link>
                <Link to="/projects" className='menu-circle'><FaProjectDiagram />&nbsp;Projects</Link>
                <Link to="/achievements" className='menu-circle'><FaTrophy />&nbsp;Achievements</Link>
                <Link to="/about" className='menu-circle'><FiInfo /> &nbsp;About</Link>
                <Link to="/contact" className='menu-circle'><BiSolidContact />&nbsp;Contact</Link>
            </nav>

            <div className='nav-right'>
                <Link to="https://github.com/khushi23-crypto" className={`github-link ${darkMode ? "dark" : "light"}`} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="github-icon" />
                </Link>


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