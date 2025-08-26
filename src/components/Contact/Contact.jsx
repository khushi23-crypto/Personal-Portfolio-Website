import React from 'react'

function Contact({darkMode}) {
  return (
    <div className={`contact ${darkMode ? 'contact-light' : 'contact-dark'}`}>
            <h1 className="contact-heading">Let's Connect with me</h1>
            <p className='c-para'> Explore my latest work and see how I bring ideas to life through code.</p>
            </div>
  )
}

export default Contact