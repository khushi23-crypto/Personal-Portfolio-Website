import './Header.css'
import React, { useState, useEffect } from 'react'
import Photo from '../../images/my photo1.jpg'
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

function Header({ darkMode }) {
  

  return (
    <>
      <header className={`header ${darkMode ? 'header-light' : 'header-dark'}`}>
        <div className="sidebar">
          <h1 className="fancy-name">𝒦𝒶𝒿𝒶𝓁 𝒮𝒶𝒾𝓃𝒾</h1>
          <img src={Photo} alt='photo' className='profile-pic' />
        </div>
        <div className={`rightside ${darkMode ? 'rightside-light' : 'rightside-dark'}`}>
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
            <p className='myself'>I'm a passionate Web Designer and Developer with a strong foundation in creating modern, responsive, and user-friendly websites. Currently, I’m pursuing my Bachelor of Technology in Information Technology at Rajkiya Engineering College, Azamgarh (2022-2026). I specialize in building interactive web applications using modern technologies such as React, Next.js, TypeScript, and JavaScript.My goal is to create web experiences that are both visually appealing and technically robust.</p>
          </div>
          <div className="flex">
            <a href='#resume' className={`openresume ${darkMode ? 'openresume-light' : 'openresume-dark'}`}>
              Open Resume&nbsp;<MdOutlineArrowOutward />
            </a>
            <div className={`nav-connect ${darkMode ? 'nav-connect-light' : 'nav-connect-dark'}`}>
              Connect With Me
            </div>

          </div>
        </div>

      </header >
    </>
  )
}

export default Header