import React from 'react'

function Skills({ darkMode }) {
    return (
        <div>
            <div className={`skills ${darkMode ? 'skills-light' : 'skills-dark'}`}>
                <h1 className="about-skills">Skills </h1>

                <div className={`skill ${darkMode ? 'skill-dark' : 'skill-light'}`}>

                    <div className="skill-card">
                        <div className="skill-body">
                            <div className="about-skill"><h3>HTML & CSS</h3></div>
                            <button className="level">Advanced</button>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div className="skill-body">
                            <div className="about-skill"><h3>Javascript</h3></div>
                            <button className="level">Intermediate</button>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div className="skill-body">
                            <div className="about-skill"><h3>React</h3></div>
                            <button className="level">Advanced</button>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div className="skill-body">
                            <div className="about-skill"><h3>Next js</h3></div>
                            <button className="level">Intermediate</button>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div className="skill-body">
                            <div className="about-skill"><h3>Node.js</h3></div>
                            <button className="level">Intermediate</button>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div className="skill-body">
                            <div className="about-skill"><h3>MongoDB</h3></div>
                            <button className="level">Advanced</button>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div className="skill-body">
                            <div className="about-skill"><h3>Django</h3></div>
                            <button className="level">Intermediate</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills