import React, { useState } from 'react'
import chatbotReact from '../../images/Screenshot (532).png'
import blackjack from '../../images/Screenshot (551).png'
import FoodReact from '../../images/Screenshot (559).png'
import ChatReact from '../../images/Screenshot (560).png'
import Textutils from '../../images/Screenshot (561).png'
import Badminton from '../../images/Screenshot (562).png'
import Jobboard from '../../images/Screenshot (564).png'
import Quiz from '../../images/Screenshot (563).png'
import './Project.css'
import { FaEye } from "react-icons/fa";



function Project({ darkMode }) {
    return (
        <div className={`project ${darkMode ? 'project-light' : 'project-dark'}`}>
            <h1 className="project-heading">My Projects</h1>
            <p className='p-para'> Explore my latest work and see how I bring ideas to life through code.</p>
            <div className="project-container">
                <div className="project-card">
                    <div className="project-body">
                        <div className="img-wrapper">
                            <img src={chatbotReact} alt="chatbot" className='project-img' />
                            <div className="eye-overlay">
                                <a href="https://chat-bot-react-tau.vercel.app/"><FaEye className='eye-icon' /></a>
                            </div>
                        </div>
                        <h3 className='about-project'>ChatBOT AI</h3>
                        <p></p>
                        <p className='paragraph'>The project enables interactive, natural language conversations with an AI chatbot.</p>
                        <a href="https://chat-bot-react-tau.vercel.app/" className='live-demo'>Live Demo</a>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-body">
                        <div className="img-wrapper">
                            <img src={blackjack} alt="blackjack Game" className='project-img' />
                            <div className="eye-overlay">
                                <a href="https://blackjack-game-js-kappa.vercel.app/"><FaEye className='eye-icon' /></a>
                            </div>
                        </div>
                        <h3 className='about-project'>BlackJack Game</h3>
                        <p></p>
                        <p className='paragraph'>A modern Casino game like Blackjack game built using Javascript for the frontend. </p>
                        <a href="https://blackjack-game-js-kappa.vercel.app/" className='live-demo'>Live Demo</a>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-body">
                        <div className="img-wrapper">
                            <img src={FoodReact} alt="chatbot" className='project-img' />
                            <div className="eye-overlay">
                                <a href="https://food-app-react-livid.vercel.app/"><FaEye className='eye-icon' /></a>
                            </div>
                        </div>
                        <h3 className='about-project'>Food App React</h3>
                        <p></p>
                        <p className='paragraph'>Foodie🍽️ is a user-friendly food delivery web app built with React. Explore popular items like burgers, pizza,etc.</p>
                        <a href="https://food-app-react-livid.vercel.app/" className='live-demo'>Live Demo</a>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-body">
                        <div className="img-wrapper">
                            <img src={Textutils} alt="chatbot" className='project-img' />
                            <div className="eye-overlay">
                                <a href="https://khushi23-crypto.github.io/Textutils-react/"><FaEye className='eye-icon' /></a>
                            </div>
                        </div>
                        <h3 className='about-project'>TextUtils React</h3>
                        <p></p>
                        <p className='paragraph'>TextUtils is a text based utility which includes text transformation, text cleaning, text analysis and more.</p>
                        <a href="https://khushi23-crypto.github.io/Textutils-react/" className='live-demo'>Live Demo</a>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-body">
                        <div className="img-wrapper">
                            <img src={ChatReact} alt="chatbot" className='project-img' />
                            <div className="eye-overlay">
                                <a href="https://github.com/khushi23-crypto/ChatBot-"><FaEye className='eye-icon' /></a>
                            </div>
                        </div>
                        <h3 className='about-project'>Real time chat application</h3>
                        <p></p>
                        <p className='paragraph'>The project enables interactive, natural language conversations with an AI chatbot.</p>
                        <a href="https://github.com/khushi23-crypto/ChatBot-" className='live-demo'>Live Demo</a>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-body">
                        <div className="img-wrapper">
                            <img src={Badminton} alt="chatbot" className='project-img' />
                            <div className="eye-overlay">
                                <a href="https://badminton-smoky.vercel.app/"><FaEye className='eye-icon' /></a>
                            </div>
                        </div>
                        <h3 className='about-project'>Badminton website using Next.js</h3>
                        <p></p>
                        <p className='paragraph'>A website dedicated to badminton enthusiasts. Showcases upcoming launched rackets, shoes, pickball , etc.</p>
                        <a href="https://badminton-smoky.vercel.app/" className='live-demo'>Live Demo</a>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-body">
                        <div className="img-wrapper">
                            <img src={Quiz} alt="chatbot" className='project-img' />
                            <div className="eye-overlay">
                                <a href="https://quiz-steel-two.vercel.app/"><FaEye className='eye-icon' /></a>
                            </div>
                        </div>
                        <h3 className='about-project'>Quiz website Using Next.js</h3>
                        <p></p>
                        <p className='paragraph'>An interactive platform designed for engaging quizzes with instant results.</p>
                        <a href="https://quiz-steel-two.vercel.app/" className='live-demo'>Live Demo</a>

                    </div>
                </div>
                
            </div >
        </div >
    )
}

export default Project