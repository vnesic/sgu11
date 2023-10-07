import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission or data handling logic here
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Container fluid className="contact-page">
      <Row className="h-100">
        <Col md={4} className="contact-info">
          <h2>Posetite nas</h2>
          <p>Kralja Milana 13, Beograd</p>
        </Col>
        <Col md={4}>
        <div className="razvojna-page">
            <h1>Contact</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  value={name}
                  onChange={handleNameChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  className="form-control"
                  value={message}
                  onChange={handleMessageChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </Col>
        <Col md={4} className="contact-info">
          <h3>Radno vreme</h3>
          <p>Ponedeljak-Petak: 5:30h - 21:30h</p>
          <p>Subota: 5:30h-15h</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
