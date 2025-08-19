import React, { useState } from 'react'

import {Navbar,Container,Nav} from 'react-bootstrap';
function NavigationBar() {
  return (
    <div>
        <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <img src={} alt="Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className='nvbar-toggle-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skill">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href='#'><img src={} alt=""/></a>
                <a href='#'><img src={} alt=""/></a>
                <a href='#'><img src={} alt=""/></a>
            </div>
            <button className='vvd' onClick={()=> console.log('connect')}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavigationBar