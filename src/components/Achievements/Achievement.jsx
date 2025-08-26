import React from 'react'
import './Achievement.css'
function Achievement({darkMode}) {
  return (
    <div>
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
    </div>
  )
}

export default Achievement

