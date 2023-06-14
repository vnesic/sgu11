import React, { useState } from 'react';

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
    <div>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" value={message} onChange={handleMessageChange} required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactPage;
