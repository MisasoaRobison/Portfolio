import React from 'react';

function Projects() {
  return (
    <section id="projects" style={styles.section}>
      <div style={styles.wrapper}>
        <div style={styles.projectList}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Full Stack Project</h3>
            <p style={styles.cardText}>
              Conception and development of a website based on a API REST architecture. The "Client" was developed using React, and the "Server" was implemented in Express, with a database running Atlas MongoDB.
            </p>
            <a href="https://github.com/MisasoaRobison/Projet_Web_Fullstack" style={styles.link} target="_blank" rel="noopener noreferrer">View more</a>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>DevOps Project</h3>
            <p style={styles.cardText}>
              Implementation of a complete infrastructure for a product management platform integrating a database, an event system and connected objects.
            </p>
            <a href="https://github.com/MisasoaRobison/Projet-DevOps" style={styles.link} target="_blank" rel="noopener noreferrer">View more</a>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Data Structure Project</h3>
            <p style={styles.cardText}>
              The project focuses on a reorganization of a fiber optic network. First, we reconstruct the network in three different data structures: linked lists, hash table and quadtree. The network reconstruction is done from the list of chains that make up the network and aims to eliminate redundant points while preserving the list of a node's neighboring nodes. In second, we focus on reorganizing the network using graphs.
            </p>
            <a href="https://github.com/MisasoaRobison/Projet-Structures-de-donn-es" style={styles.link} target="_blank" rel="noopener noreferrer">View more</a>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Jewel Collection Simulation</h3>
            <p style={styles.cardText}>
              Representation of a jewel collection situation on a two-dimensional grid containing jewels and guardians.
            </p>
            <a href="https://github.com/MisasoaRobison/Simulation-Java" style={styles.link} target="_blank" rel="noopener noreferrer">View more</a>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Epidemic Spread Simulation</h3>
            <p style={styles.cardText}>
              Likewise Schelling segregation, this simulation relies on the state of the neighbors. While Schelling segregation has the satisfaction level as its main parameter, here we have the situation of a person (sick or not). Other parameters have also been implemented.
            </p>
            <a href="https://github.com/are-dynamic-2023-g3/epidemie" style={styles.link} target="_blank" rel="noopener noreferrer">View more</a>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    minHeight: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 0,
    boxSizing: "border-box",
  },
  wrapper: {
    width: "100%",
    maxWidth: 1100,
    margin: "0 auto",
    padding: "40px 16px",
    boxSizing: "border-box",
  },
  h1: {
    fontFamily: '"Roboto Slab", sans-serif',
    background: 'linear-gradient(90deg,rgb(0, 0, 0),rgb(213, 255, 97))',
    padding: '0 4px',
    borderRadius: '50px',
    color: 'white',
    margin: '32px 0 32px 0',
    fontSize: '2rem',
    textAlign: 'center',
    letterSpacing: '1px',
    textShadow: '0 2px 8px #000',
  },
  projectList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
    justifyItems: 'center',
    width: '100%',
  },
  card: {
    background: "linear-gradient(135deg,rgb(128, 160, 127), #203a43,rgb(111, 134, 83))",
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '24px 18px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease',
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0,
    minHeight: '260px',
    justifyContent: 'space-between',
  },
  cardTitle: {
    color: '#ffe066',
    fontFamily: '"Roboto Slab", sans-serif',
    fontWeight: 'bold',
    marginBottom: 12,
    fontSize: '1.2rem',
    textShadow: '0 1px 4px #000',
    textAlign: 'center',
  },
  cardText: {
    fontFamily: '"Roboto Slab", sans-serif',
    textAlign: 'justify',
    color: 'white',
    fontSize: '1.08rem',
    lineHeight: 1.7,
    textShadow: '0 1px 4px #000',
    marginBottom: 16,
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginTop: 'auto',
    alignSelf: 'center',
    fontSize: '1.05rem',
    background: 'rgba(255,255,255,0.08)',
    padding: '6px 18px',
    borderRadius: '8px',
    transition: 'background 0.2s, color 0.2s',
  },
};

export default Projects;