import './Header.css'
import React, { useState, useEffect } from 'react'
import Photo from '../../images/my photo1.jpg'
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

function Header({ darkMode }) {

  const texts = ["Frontend Developer", "Web Developer", "React Developer"]
  const [currentText, setCurrentText] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 2000); // change every 2 seconds
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <header className={`header ${darkMode ? 'header-light' : 'header-dark'}`}>
        <div className="sidebar">
          <h1 className="fancy-name">𝒦𝒶𝒿𝒶𝓁 𝒮𝒶𝒾𝓃𝒾</h1>
          <img src={Photo} alt='photo' className='profile-pic' />
        </div>
        <div className='rightside'>
          <div className='home'>Hi!,  I'm
            <span className='name'> Kajal Saini </span>
          </div>
          <div className="animated-role">
            <span>I'm a &nbsp;</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={currentText}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="role-text"
              >
                {texts[currentText]}
              </motion.span>
            </AnimatePresence>
            <motion.span
              className="cursor"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              |
            </motion.span>
          </div>
          <div>
            <p className='myself'>I'm a passionate Web Designer and Developer with a strong foundation in creating modern, responsive, and user-friendly websites. Currently, I’m pursuing my Bachelor of Technology in Information Technology at Rajkiya Engineering College, Azamgarh (2022-2026).</p>
          </div>
          <div className="flex">
            <Link to='/resume' className={`openresume ${darkMode ? 'openresume-light' : 'openresume-dark'}`}>
              Open Resume&nbsp;<MdOutlineArrowOutward />
            </Link>
            <Link to="/contact" className={`nav-connect ${darkMode ? 'nav-connect-light' : 'nav-connect-dark'}`}>
              Connect With Me
            </Link>
          </div>
        </div>
      </header >
      <div className={`experience ${darkMode ? 'experience-light' : 'experience-dark'}`}>
        <h1 className='feedback'><span className='color'>Achievements </span>in the tech industries</h1>
        <div className='card-container'>
          <div className='card'>
            <div className="card-body">
              <h3 className="card-title">⭐⭐⭐⭐⭐</h3>
              <p className="card-text">❛❛Kajal Saini shows excellent growth in frontend development, demonstrating strong skills in React, CSS, and UI design with consistent improvement, creativity, and dedication to learning modern practices.❞</p>
              <h3 className='company'>~CODEXINTERN</h3>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h3 className="card-title">⭐⭐⭐⭐</h3>
              <p className="card-text">❛❛Kajal Saini performs excellently in full-stack development, managing both frontend and backend efficiently, with great problem-solving skills, database handling, API integration, and consistent focus on scalable, maintainable applications.❞</p>
              <h3 className='company'>~GNCPIL</h3>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h3 className="card-title">⭐⭐⭐⭐</h3>
              <p className="card-text">❛❛Kajal Saini exhibits strong potential in machine learning, showcasing analytical skills, model-building expertise, data handling capabilities, and continuous learning attitude to develop intelligent, efficient, and innovative solutions effectively.❞</p>
              <h3 className='company'>~ProdigyInfo Tech</h3>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h3 className="card-title">⭐⭐⭐⭐⭐​​</h3>
              <p className="card-text">❛❛Kajal Saini excels in web development, demonstrating expertise in modern frameworks, responsive design, clean coding practices, optimization techniques, and a proactive approach to delivering user-friendly and high-performing websites.❞</p>
              <h3 className='company'>~Codsoft</h3>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Header