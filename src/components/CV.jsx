import React from 'react';

function CV() {
  return (
    <section id="cv" style={styles.section}>
      <div style={styles.wrapper}>

        <div style={styles.cvContainer}>
          <iframe
            src="/Portfolio/Misasoa-Robison-CV.pdf"
            title="My CV"
            width="100%"
            height="100%"
            style={styles.iframe}
          />
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    minHeight: '100vh',
    width: '100vw',
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: '60px 0',
    boxSizing: "border-box",
  },
  wrapper: {
    width: "100%",
    maxWidth: 900,
    margin: "0 auto",
    padding: "0 16px",
    boxSizing: "border-box",
    textAlign: "center",
  },
  sectionTitle: {
    fontFamily: '"Raleway", cursive',
    background: 'linear-gradient(90deg, rgb(0, 0, 0), rgb(213, 255, 97))',
    padding: '0 4px',
    borderRadius: '50px',
    color: 'white',
    marginBottom: '2rem',
    fontSize: '2rem',
    textShadow: '0 2px 8px #000',
    letterSpacing: '1px',
  },
  cvContainer: {
    width: '100%',
    height: '70vh',
    minHeight: '400px',
    maxHeight: '900px',
    boxShadow: '0 0 10px rgba(0,0,0,0.3)',
    borderRadius: '10px',
    overflow: 'hidden',
    background: '#fff',
    margin: '0 auto',
  },
  iframe: {
    border: 'none',
    width: '100%',
    height: '100%',
    background: '#fff',
    display: 'block',
  },
};

export default CV;