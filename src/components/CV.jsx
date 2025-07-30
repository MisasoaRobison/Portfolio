import React from 'react';

function CV() {
  return (
    <section id="cv" style={styles.section}>
  <h1 style={styles.sectionTitle}>My CV</h1>
  <div style={styles.cvContainer}>
    <iframe
      src="/Portfolio/Misasoa-Robison-CV.pdf"
      title="My CV"
      width="100%"
      height="100%"
      style={styles.iframe}
    />
  </div>
</section>
  );
}

const styles = {
  section: {
    padding: '60px 20px',
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '2rem',
  },

  sectionTitle: {
    fontFamily: '"Raleway", cursive',
    background: 'linear-gradient(90deg, rgb(0, 0, 0), rgb(213, 255, 97))',
    padding: '0 4px',
    borderRadius: '50px',
    color: 'white',
    marginBottom: '1rem',
  },

  cvContainer: {
    width: '100%',
    height: '600px',
    boxShadow: '0 0 10px rgba(0,0,0,0.3)',
    borderRadius: '10px',
    overflow: 'hidden',
  },

  iframe: {
    border: 'none',
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

export default CV;
