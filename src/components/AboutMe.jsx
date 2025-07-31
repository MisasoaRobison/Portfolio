import React from 'react';

function AboutMe() {
  return (
    <div style={styles.bg}>
      <section id="aboutme" style={styles.section}>
        <h1 style={styles.h1}>Tools</h1>
        <div style={styles.toolsGrid}>
          {[
            { src: "/Portfolio/python.png", alt: "Python" },
            { src: "/Portfolio/C.png", alt: "C", style: { width: '85%' } },
            { src: "/Portfolio/javascript.png", alt: "JavaScript" },
            { src: "/Portfolio/HTML.png", alt: "HTML", style: { width: '85%', marginTop: '10px' } },
            { src: "/Portfolio/Java.png", alt: "Java" },
            { src: "/Portfolio/Node_express.png", alt: "Node+Express", style: { marginTop: '20px' } },
            { src: "/Portfolio/React.png", alt: "React" },
            { src: "/Portfolio/css.png", alt: "css", style: { width: '60%', marginTop: '10px' } },
            { src: "/Portfolio/mysql.png", alt: "SQL" },
            { src: "/Portfolio/github.png", alt: "github" },
            { src: "/Portfolio/git.png", alt: "git" },
            { src: "/Portfolio/vscode.png", alt: "vscode" },
            { src: "/Portfolio/OCaml.png", alt: "OCaml" },
            { src: "/Portfolio/assembly.png", alt: "assembly" },
            { src: "/Portfolio/docker.png", alt: "docker" },
            { src: "/Portfolio/microsoft.png", alt: "microsoft", style: { width: '70%', marginTop: '10px' } },
          ].map((img, i) => (
            <div key={i} style={styles.imagecard}>
              <img
                src={img.src}
                alt={img.alt}
                style={{
                  width: img.style?.width || '100%',
                  borderRadius: '10px',
                  alignItems: 'center',
                  objectFit: 'cover',
                  marginTop: img.style?.marginTop || 0,
                }}
              />
            </div>
          ))}
        </div>

        <h1 style={styles.h1}>Hard Skills</h1>
        <div style={styles.skillsGrid}>
          <div style={styles.card}>
            <h4 style={styles.cardTitle}>Programming</h4>
            <p style={styles.cardText}>Mastery of imperative, functional and object-oriented programming paradigms, with a focus on languages such as Python, C, Java, and OCaml.</p>
          </div>
          <div style={styles.card}>
            <h4 style={styles.cardTitle}>Web Development</h4>
            <p style={styles.cardText}>Proficiency in web development using HTML, CSS, JavaScript, and React, with experience in building responsive and interactive web applications. Mastery of backend implemented in Express and Node.js, with a focus on RESTful API design and integration with databases such as MongoDB and NoSQL.</p>
          </div>
          <div style={styles.card}>
            <h4 style={styles.cardTitle}>Database Management</h4>
            <p style={styles.cardText}>Experience in database management, including SQL and MySQL databases, with a focus on data modeling, query optimization, and performance tuning.</p>
          </div>
          <div style={styles.card}>
            <h4 style={styles.cardTitle}>DevOps Practices</h4>
            <p style={styles.cardText}>Familiarity with DevOps practices, including version control using Git, continuous integration and deployment (CI/CD), and containerization using Docker.</p>
          </div>
          <div style={styles.card}>
            <h4 style={styles.cardTitle}>Computer Systems and Network</h4>
            <p style={styles.cardText}>Understanding of operating systems, such as Linux. Knowledge of computer architecture (CPU, memory, bus systems, etc.) and skills in networking (routing, IP Addressing, etc.)</p>
          </div>
        </div>

        <h1 style={styles.h1}>My Ambition</h1>
        <p style={styles.ambitionText}>
          Computer science is constantly evolving today. As a field, developing requires remarkable programming skills, the various courses during my Bachelor's degree prepared me for various types of programming, such as object-oriented programming, functional programming, etc. and different languages, while using mathematical tools to ensure perfect optimization of an algorithm's performance. Completing various projects allowed me to discover a practical aspect of this component of computer science, notably with website development, database management, and the use of DevOps practices.
        </p>
        <p style={styles.ambitionText}>
          Today, I wish to strengthen my skills and knowledge. I am extremely curious about the world of application, software or website development with a view to continuing towards this door later. Aware of lacking experience, I aspire to work and give my maximum to seize every opportunity that opens up to me. I want to master the entire process of developing a product (application, website, software) and its life cycle in order to be able to make it as a hobby in the years to come. Having the developer hat would indeed allow me to do this, and would allow me to pursue other ambitions outside of IT while having this as a hobby.
        </p>
      </section>
      <style>
        {`
          @media (max-width: 700px) {
            #aboutme .toolsGrid,
            #aboutme .skillsGrid {
              justify-items: center !important;
              justify-content: center !important;
            }
          }
        `}
      </style>
    </div>
  );
}

const styles = {
  bg: {
    minHeight: '100vh',
    width: '100vw',
    background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 0,
    boxSizing: 'border-box',
  },
  section: {
    width: '100%',
    maxWidth: 1000,
    margin: '0 auto',
    padding: '40px 16px',
    background: 'rgba(0,0,0,0.15)',
    borderRadius: 24,
    boxSizing: 'border-box',
  },
  h1: {
    fontFamily: '"Raleway", cursive',
    background: 'linear-gradient(90deg,rgb(0, 0, 0),rgb(213, 255, 97))',
    padding: '0 4px',
    borderRadius: '50px',
    color: 'white',
    margin: '32px 0 24px 0',
    fontSize: '2rem',
    textAlign: 'center',
  },
  toolsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(90px, 1fr))',
    gap: '1.2rem',
    justifyItems: 'center',
    justifyContent: 'center',
    marginBottom: '32px',
  },
  imagecard: {
    width: '90px',
    height: '90px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    borderRadius: '10px',
    overflow: 'hidden',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '1.5rem',
    margin: '32px 0',
    justifyItems: 'center',
    justifyContent: 'center',
  },
  card: {
    background: 'linear-gradient(135deg,rgb(128, 160, 127), #203a43,rgb(111, 134, 83))',
    border: '1px solid #ddd',
    borderRadius: '10px',
    color: 'white',
    padding: '20px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease',
    minWidth: '0',
    maxWidth: '100%',
  },
  cardTitle: {
    color: 'yellow',
    fontFamily: '"Raleway", cursive',
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  cardText: {
    fontFamily: 'cursive',
    textAlign: 'justify',
    color: 'white',
    fontSize: '1rem',
  },
  ambitionText: {
    fontFamily: 'cursive',
    textAlign: 'justify',
    color: 'white',
    margin: '16px 0',
    fontSize: '1rem',
  },
};

export default AboutMe;