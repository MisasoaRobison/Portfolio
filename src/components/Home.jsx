import React from "react";

function Home() {
  return (
    <section id="home" style={styles.home}>
      <div className="home-container" style={styles.container}>
        <div style={styles.imageWrapper}>
          <img
            src="/Portfolio/welcome1.jpg"
            alt="Welcome"
            style={styles.image}
          />
        </div>
        <div style={styles.textSection}>
          <h1 style={styles.h1}>Hello World</h1>
          <h2 style={styles.h2}>Welcome to my website</h2>
          <p style={styles.p}>
            I am <strong>Misasoa Robison</strong>, currently a Master's degree student in{" "}
            <em>“Méthodes Informatiques Appliquées à la Gestion d'Entreprise” (MIAGE)</em> with a specialization
            in Reliable Information Systems and Data Intelligence. I am passionate about the world of IT.
          </p>
          <p style={styles.p}>
            An application, software, or website is not an unchangeable product. It can be optimized again and again.
            That's what I love about this field.
          </p>
          <p style={styles.p}>
            I'm always curious about the technologies used in IT and I'm determined to keep learning.
          </p>
          <ul style={styles.list}>
            <li>
              <strong style={{ fontFamily: '"roboto slab", sans-serif' }}>Email:</strong>{" "}
              <a href="mailto:misasoaa.robison@gmail.com" style={styles.link}>
                misasoaa.robison@gmail.com
              </a>
            </li>
            <li>
              <strong style={{ fontFamily: '"roboto slab", sans-serif' }}>GitHub:</strong>{" "}
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
              <strong style={{ fontFamily: '"roboto slab", sans-serif' }}>LinkedIn:</strong>{" "}
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
      <style>
        {`
          @media (max-width: 1000px) {
            .home-container {
              display: flex !important;
              flex-direction: column !important;
              gap: 2rem !important;
              width: 94vw !important;
              max-width: 98vw !important;
              padding: 0 2vw !important;
            }
            .home-container > div {
              width: 100% !important;
              max-width: 100vw !important;
            }
            .home-container img {
              width: 100% !important;
              max-width: 100vw !important;
              border-radius: 0 !important;
              margin-bottom: 1.2rem;
            }
            .home-container [style*="textAlign: left"] {
              text-align: center !important;
              padding: 0 4vw;
            }
          }
        `}
      </style>
    </section>
  );
}

const styles = {
  home: {
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    color: "#fff",
    padding: "60px 0",
    textAlign: "center",
    minHeight: "100vh",
    minWidth: "0",
    width: "100%",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    boxSizing: "border-box",
    overflowX: "hidden",
    display: "flex",
    justifyContent: "center",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "1.2fr 1.8fr",
    alignItems: "center",
    width: "80vw",
    maxWidth: 1100,
    gap: "48px",
    background: "rgba(0,0,0,0.10)",
    borderRadius: 24,
    boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
    padding: "40px 40px",
  },
  imageWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    borderRadius: "20px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    maxWidth: "420px",
    height: "auto",
  },
  textSection: {
    textAlign: "left",
  },
  h1: {
    fontFamily: '"Roboto Slab", sans-serif',
    fontSize: "3.2rem",
    marginBottom: "0.7rem",
    fontStyle: "italic",
    textAlign: "center",
  },
  h2: {
    fontFamily: '"Roboto slab", sans-serif',
    fontSize: "2rem",
    color: "#a9cbd9",
    textAlign: "center",
    fontStyle: "italic",
    marginBottom: "1.7rem",
  },
  p: {
    fontFamily: '"Roboto slab", sans-serif',
    fontSize: "1.18rem",
    marginBottom: "1.2rem",
    lineHeight: "1.7",
  },
  list: {
    listStyle: "none",
    padding: 0,
    lineHeight: "2rem",
    fontSize: "1.13rem",
  },
  link: {
    color: "#00bfff",
    textDecoration: "none",
  },
};

export default Home;