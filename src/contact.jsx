import React from "react";
import "./contact.scss";
import { useState, useEffect } from "react";
import ThreeDButton from "./Compnents/ThreeDButton";

function Contact() {
  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [honeypot, setHoneypot] = useState(''); // Honeypot field
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

      // needs to be filled out before submission
      if (!name || !email || !message) {
          alert('Please fill in all fields.');
          return;
      }
      
       // Check if honeypot field is filled (it should not be)
       if (honeypot) {
        console.log('Spam detected.');
        return;
      }


        // Perform form validation or other logic here
        const formData = {
            access_key: '74ca02bb-c4aa-4580-9a77-c97338f8ad60',
            name,
            email,
            message
        };

        try {
          const response = await fetch('https://api.web3forms.com/submit', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
          });

          const result = await response.json();

          // Handle the response
          console.log(result);
          setFormSubmitted(true); // Set flag for form submission
      } catch (error) {
          console.error('Error submitting form:', error);
      }
  };
  if (formSubmitted) {
    return <div>Thank you for your submission!</div>;
}

  return (
    <div id="contact" class="Contact_Container">
      <div>
        <h1>CONTACT ME</h1>
      </div>
      <div class = "underline_2">
      </div>

      <div class = "form">
      {/* <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
            />
            <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
            />
            <textarea 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                required 
            ></textarea>
            <button type="submit">Submit Form</button>
        </form> */}


        <div class="input-group">
          <input
            type="text"
            value={name}
            id="name"
            name="name"
            placeholder="Enter your name"
            class="text_box"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="input-group">
          <input
            type="email"
            value={email}
            id="email"
            name="email"
            placeholder="Enter your email"
            class="text_box"
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div class="input-group">
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Your Message"
            class="text_box"
            onChange={(e) => setMessage(e.target.value)} 
            required 
          ></textarea>
        </div>

           {/* Honeypot field (hidden) */}
           <div style={{ display: 'none' }}>
                <input
                    type="text"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                />
            </div>

        <div>
          {/* <button type="submit" class="contact-submit">
            SUBMIT
          </button> */}
          <ThreeDButton handleClick={handleSubmit} text="SUBMIT" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
