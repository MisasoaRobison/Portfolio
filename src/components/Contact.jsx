import React from 'react';

function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.title}>Contact Me</h2>
      <form 
        action="https://formspree.io/f/your-form-id" // Remplace par ton ID Formspree
        method="POST" 
        style={styles.form}
      >
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          style={styles.input}
        />
        <textarea
          name="message"
          placeholder="Your message"
          rows="5"
          required
          style={styles.textarea}
        />
        <button type="submit" style={styles.button}>Send</button>
      </form>
    </section>
  );
}

const styles = {
  section: {
    padding: '60px 20px',
    backgroundColor: '#f2f2f2',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '2rem',
  },
  form: {
    maxWidth: '500px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '6px',
  },
  textarea: {
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '6px',
    resize: 'vertical',
  },
  button: {
    padding: '12px',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background 0.3s',
  },
};

export default Contact;
