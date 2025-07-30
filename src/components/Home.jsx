import React from "react";

function Home() {
  return (
    <section id="home" style={styles.home}>
      <div style={styles.container}>
        {/* Colonne image */}
        <img
          src="/Portfolio/welcome1.jpg" // Remplace par ton image
          alt="Welcome"
          style={styles.image}
        />

        {/* Colonne texte */}
        <div style={styles.textSection}>
          <h1 style={styles.h1}>Hello World</h1>
          <h2 style={styles.h2}>Welcome to my website</h2>
          <p style={styles.p}>
            I am <strong>Misasoa Robison</strong>, currently a Master's degree student in{" "}
            <em>“Méthodes Informatiques Appliquées à la Gestion d'Entreprise” (MIAGE)</em> with a specialization
            in Reliable Information Systems and Data Intelligence. I am passionate about the world of IT.
          </p>
          <p style={styles.p}>
            An application, software, or website is not an unchangeable product. It can be optimized again and again
            That's what I love about this field.
          </p>
          <p style={styles.p}>
            I'm always curious about the technologies used in IT and I'm determined to keep learning.
          </p>

          <ul style={styles.list}>
            <li>
              <strong style={{fontFamily: 'cursive'}}>Email:</strong>{" "}
              <a href="mailto:misasoaa.robison@gmail.com" style={styles.link}>
                misasoaa.robison@gmail.com
              </a>
            </li>
            <li>
              <strong style={{fontFamily: 'cursive'}}>GitHub:</strong>{" "}
              <a
                href="https://github.com/MisasoaRobison"
                style={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/MisasoaRobison
              </a>
            </li>
            <li>
              <strong style={{fontFamily: 'cursive'}}>LinkedInn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/misasoa-robison-6494812a2/"
                style={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/misasoa-robison-6494812a2
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

const styles = {
  home: {
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    color: "#fff",
    padding: "80px 20px",
    textAlign: "center",
    minHeight: "75vh",
    display: "flex",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
    width: "100%",
    gap: "40px",
  },
  image: {
    width: "100%",
    borderRadius: "20px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
  },
  textSection: {
    textAlign: "left",
  },
  h1: {
    fontFamily: '"Dancing Script", cursive',
    fontSize: "3rem",
    marginBottom: "0.5rem",
    fontStyle: "italic",
    textAlign: "center",
  },
  h2: {
    fontFamily: "cursive",
    fontSize: "1.8rem",
    color: "#a9cbd9",
    textAlign: "center",
    fontStyle: "italic",
    marginBottom: "1.5rem",
  },
  p: {
    fontFamily: "cursive",
    fontSize: "1.1rem",
    marginBottom: "1rem",
    lineHeight: "1.6",
  },
  list: {
    listStyle: "none",
    padding: 0,
    lineHeight: "2rem",
    fontSize: "1.1rem",
  },
  link: {
    color: "#00bfff",
    textDecoration: "none",
  },
};

export default Home;
