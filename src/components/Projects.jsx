import React from 'react';


function Projects() {
  return (
    <><title>Projects</title>
    <section id="projects" style={styles.section}>
      <div style={styles.projectList}>
        <div style={styles.card}>
          <h3 style={{color:'yellow', fontFamily:'"Roleway", cursive', fontWeight: 'bold'}}>Full Stack Project</h3>
          <p style={{fontFamily: 'cursive', textAlign: 'justify', color:'white'}}>Conception and development of a website based on a API REST architecture. The "Client" was developted using React, and the "Server" was implemented in Express, with a database running Atlas MongoDB.</p>
          <a href="https://github.com/MisasoaRobison/Projet_Web_Fullstack" style={styles.link}>View more</a>
        </div>
        <div style={styles.card}>
          <h3 style={{color:'yellow', fontFamily:'"Roleway", cursive', fontWeight: 'bold'}}>DevOps Project</h3>
          <p style={{fontFamily: 'cursive', textAlign: 'justify', color:'white'}}>Implementation of a complete infrastructure for a product management platform integrating a database, an event system and connected objects.</p>
          <a href="https://github.com/MisasoaRobison/Projet-DevOps" style={styles.link}>View more</a>
      </div>
        <div style={styles.card}>
          <h3 style={{color:'yellow', fontFamily:'"Roleway", cursive', fontWeight: 'bold'}}>Data Structure Project</h3>
          <p style={{fontFamily: 'cursive', textAlign: 'justify', color:'white'}}>The project focuses on a reorganization of a fiber optic network. 
            First, we reconstract the network in three different data structures : linked lists, hash table and quadtree. he network reconstruction is done from the list of chains that make up the network and aims to eliminate redundant points while preserving the list of a node's neighboring nodes. The in second, we focus on reorganizing the network using graphs.
          </p>
          <a href="https://github.com/MisasoaRobison/Projet-Structures-de-donn-es" style={styles.link}>View more</a>
        </div>
        <div style={styles.card}>
            <h3 style={{color:'yellow', fontFamily:'"Roleway", cursive', fontWeight: 'bold'}}>Jewel Collection Simulation</h3>
            <p style={{fontFamily: 'cursive', textAlign: 'justify', alignContent: 'center', alignItems: 'center', color:'white'}}>Representation of a jewel collection situation on a two-dimensional grid containing jewels and guardians</p>
            <a href="https://github.com/MisasoaRobison/Simulation-Java" style={styles.link}>View more</a>
        </div>
        <div style={styles.card}>
            <h3 style={{color:'yellow', fontFamily:'"Roleway", cursive', fontWeight: 'bold'}}>Epidemic Spread Simulation</h3>
            <p style={{fontFamily: 'cursive', textAlign: 'justify', alignContent: 'center', color:'white'}}>Likewise Schelling segregation, this simulation relies on the state of the neighbors. While Schelling segregation has the satisfaction level as its main parameter, here we have the situation of a person (sick or not). Other parameters have also been implemented.</p>
            <a href="https://github.com/are-dynamic-2023-g3/epidemie" style={styles.link}>View more</a>
        </div>
        </div>
    </section>
    </>
  );
}


const styles = {
  section: {
    background:
      "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    padding: '80px 20px',
    textAlign: 'center',
  },
  h2: {
    fontSize: '2rem',
    marginBottom: '2rem',
  },
  projectList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '2rem',
  },
  card: {
    background:
      "linear-gradient(135deg,rgb(128, 160, 127), #203a43,rgb(111, 134, 83))",
    border: '1px solid #ddd',
    justifyContent: 'space-between',
    borderRadius: '10px',
    alignItems: 'center',
    alignContent: 'center',
    padding: '20px',
    width: '300px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
    marginTop: 'auto',
  },
};

export default Projects;
