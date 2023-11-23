import React, { useState } from 'react';
import styles from './ContactForm.module.css'; // Import the styles

function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        value={formState.name}
        onChange={handleInputChange}
        className={styles.inputField}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        value={formState.email}
        onChange={handleInputChange}
        className={styles.inputField}
      />
      <label htmlFor="message">Message</label>
      <textarea
        name="message"
        value={formState.message}
        onChange={handleInputChange}
        className={styles.inputField}
      />
      <button type="submit" className={styles.submitButton}>Submit</button>
    </form>
  );
}

export default ContactForm;
