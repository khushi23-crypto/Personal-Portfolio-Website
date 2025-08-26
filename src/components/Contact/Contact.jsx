import React from 'react'
import './Contact.css'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { IoIosSend } from "react-icons/io";



function Contact({ darkMode }) {
  return (
    <>
      <div className={`contact ${darkMode ? 'contact-light' : 'contact-dark'}`}>
        <h1 className="contact-heading">Let's <span className='diff-color'>Connect</span> with me</h1>
        <p className='c-para'> Explore my latest work and see how I bring ideas to life through code.</p>
        <div className="form">
          <h2>Send a message</h2>
          <Form>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name*</Form.Label>
          <Form.Control required type="text" placeholder="First name" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name*</Form.Label>
          <Form.Control required type="text" placeholder="Last name"/>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address*</Form.Label>
              <Form.Control type="email"  placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message*</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder='Tell me about your project....'/>
            </Form.Group>
            <Button variant="primary"><IoIosSend/>&nbsp; Send message</Button>
          </Form>
        </div>
      </div>

    </>
  )
}

export default Contact