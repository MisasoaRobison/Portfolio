import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <>
    <title>Presentation</title>
    <div>
    <section id="aboutme" style={styles.section}>
        <h1 style={{fontFamily:'"Raleway", cursive', background: 'linear-gradient(90deg,rgb(0, 0, 0),rgb(213, 255, 97))',
        padding: '0 4px', borderRadius: '50px', color: 'white'}}>Tools</h1>
      <div style={{
        display: 'flex',
        gap: '2rem',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
            <div style={styles.imagecard}>
                <img src="/Portfolio/python.png" alt="Python" style={{width: '100%', borderRadius:'10px', alignItems:'center',
                objectFit:'cover'
                }}/>
            </div>
            <div style={styles.imagecard}>
                <img src="/Portfolio/public/C.png" alt="C" style={{width: '85%', borderRadius:'10px', alignItems:'center',
                objectFit:'cover'
                }}/>
            </div>
            <div style={styles.imagecard}>
                <img src="/public/javascript.png" alt="JavaScript" style={{width: '100%', borderRadius:'10px', alignItems:'center',
                objectFit:'cover'
                }}/>
            </div>
            <div style={styles.imagecard}>
                <img src="/public/HTML.png" alt="HTML" style={{width: '85%', borderRadius:'10px', alignItems:'center', marginTop:'10px',
                objectFit:'cover'
                }}/>
            </div>
            <div style={styles.imagecard}>
                <img src="/public/Java.png" alt="Java" style={{width: '100%', borderRadius:'10px', alignItems:'center',
                objectFit:'cover'
                }}/>
            </div>
            <div style={styles.imagecard}>
                <img src="/public/Node_express.png" alt="Node+Express" style={{width: '100%', borderRadius:'10px', alignItems:'center', marginTop: '20px',
                objectFit:'cover'
                }}/>
            </div>
            <div style={styles.imagecard}>
                <img src="/public/React.png" alt="React" style={{width: '100%', borderRadius:'10px', alignItems:'center',
                objectFit:'cover'
                }}/>
            </div>
            <div style={styles.imagecard}>
                <img src="/public/css.png" alt="css" style={{width: '60%', borderRadius:'10px', alignItems:'center', marginTop: '10px',
                objectFit:'cover'
                }}/>
            </div>
            <div style={styles.imagecard}>
                <img src="/public/mysql.png" alt="SQL" style={{width: '100%', borderRadius:'10px', alignItems:'center',
                objectFit:'cover'
                }}/>
            </div>
            <div style={styles.imagecard}>
                <img src="/public/github.png" alt="github" style={{width: '100%', borderRadius:'10px', alignItems:'center',
                objectFit:'cover'
                }}/>
            </div>
            <div style={styles.imagecard}>
                <img src="/public/git.png" alt="git" style={{width: '100%', borderRadius:'10px', alignItems:'center',
                objectFit:'cover'
                }}/>
            </div>
            <div style={styles.imagecard}>
                <img src="/public/vscode.png" alt="vscode" style={{width: '100%', borderRadius:'10px', alignItems:'center',
                objectFit:'cover'
                }}/>
            </div>
            <div style={styles.imagecard}>
                <img src="/public/OCaml.png" alt="OCaml" style={{width: '100%', borderRadius:'10px', alignItems:'center',
                objectFit:'cover'
                }}/>
            </div>
            <div style={styles.imagecard}>
                <img src="/public/assembly.png" alt="assembly" style={{width: '100%', borderRadius:'10px', alignItems:'center',
                objectFit:'cover'
                }}/>
            </div>
            <div style={styles.imagecard}>
                <img src="/public/docker.png" alt="docker" style={{width: '100%', borderRadius:'10px', alignItems:'center',
                objectFit:'cover'
                }}/>
            </div>
            <div style={styles.imagecard}>
                <img src="/public/microsoft.png" alt="microsoft" style={{width: '70%', borderRadius:'10px', alignItems:'center', marginTop: '10px',
                objectFit:'cover'
                }}/>
            </div>

      </div>
      <h1 style={{fontFamily:'"Raleway", cursive', background: 'linear-gradient(90deg,rgb(0, 0, 0),rgb(213, 255, 97))',
        padding: '0 4px', borderRadius: '50px', color: 'white'}}>Hard Skils</h1>
      <div style={{
        display: 'flex',
        gap: '2rem',
        justifyContent: 'center',
        margin: '10px',
        flexWrap: 'wrap',
       }}>

        <div style={styles.card}>
          <h4 style={{color:'yellow', fontFamily:'"Roleway", cursive', fontWeight: 'bold'}}>Programming</h4>
          <p style={{fontFamily: 'cursive', textAlign: "justify", color:'white'}}>Mastery of imperative, functional and object-oriented programming paradigms, with a focus on languages such as Python, C, Java, and OCaml.</p>
        </div>
        <div style={styles.card}>
            <h4 style={{color:'yellow', fontFamily:'"Roleway", cursive', fontWeight: 'bold'}}>Web Developement</h4>
            <p style={{fontFamily: 'cursive', textAlign: "justify", color:'white'}}>Proficiency in web development using HTML, CSS, JavaScript, and React, with experience in building responsive and interactive web applications. Mastery of backend implemented in Express and Node.js, with a focus on RESTful API design and integration with databases such as MongoDB and NoSQL.</p>
        </div>
        <div style={styles.card}>
            <h4 style={{color:'yellow', fontFamily:'"Roleway", cursive', fontWeight: 'bold'}}>Database Management</h4>
            <p style={{fontFamily: 'cursive', textAlign: "justify", color:'white'}}>Experience in database management, including SQL and MySQL databases, with a focus on data modeling, query optimization, and performance tuning.</p>
        </div>
        <div style={styles.card}>
            <h4 style={{color:'yellow', fontFamily:'"Roleway", cursive', fontWeight: 'bold'}}>DevOps Practices</h4>
            <p style={{fontFamily: 'cursive', textAlign: "justify", color:'white'}}>Familiarity with DevOps practices, including version control using Git, continuous integration and deployment (CI/CD), and containerization using Docker.</p>
        </div>
        <div style={styles.card}>
            <h4 style={{color:'yellow', fontFamily:'"Roleway", cursive', fontWeight: 'bold'}}>Computer Systemes and Network
            </h4>
            <p style={{fontFamily: 'cursive', textAlign: "justify", color:'white'}}>Understanding of operating systems, such as Linux. Knowledge of computer architecture (CPU, memory, bus systems, etc.) and skills in networking (routing, IP Addressing, etc.)</p>
        </div>
      </div>

      <h1 style={{fontFamily:'"Raleway", cursive', background: 'linear-gradient(90deg,rgb(0, 0, 0),rgb(213, 255, 97))',
        padding: '0 4px', borderRadius: '50px', color: 'white'}}>My Ambition</h1>
      <p style={{fontFamily: 'cursive', textAlign: "justify", color:'white'}}>
            Computer science is constantly evolving today. As a field, developing requires remarkable programming skills, the various courses during my Bachelor's degree prepared me for various types of programming, such as object-oriented porgramming, functional programming, etc. and different languages, while using mathematical tools to ensure perfect optimization of an algorithm's performance. Completing various projects allowed me to discover a practical aspect of this component of computer science, notably with website development, database management, and the use of DevOps practices.
      </p>
        <p style={{fontFamily: 'cursive', textAlign: "justify", color:'white'}}>
            Today, I wish to strengthen my skills and knowledge. I am extremely curious about the world of application, software or website development with a view to continuing towards this door later. Aware of lacking experience, I aspire to work and give my maximum to seize every opportunity that opens up to me. I want to master the entire process of developing a product (application, website, software) and its life cycle in order to be able to make it as a hobby in the years to come. Having the developer hat would indeed allow me to do this, and would allow me to pursue other ambitions outside of IT while having this as a hobby.
      </p>
      
    </section>
    </div>
    </>
  );
}
const styles = {

 home: {
    height: '100%', // prend toute la hauteur de l'écran
    width: '100%',
    margin: 0,
    background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
    color: 'white',
    display: 'flex', // centre verticalement
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    },
  section: {
    background:
      "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    color: '#333',
    padding: '80px 0px',
    marginTop: '0',
    textAlign: 'center',
  },
  h2: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  p: {
    margin: '0 auto',
    lineHeight: 1.6,
    textAlign: 'justify',
  },

  h1: {
    fontSize: '3rem',
  },

  imagecard: {
    width: '100px',
    height: '100px',
    boxShadow: '0 2px px rgba(0,0,0,0.1)',
  borderRadius: '10px',
  overflow: 'hidden',  // pour que l’image arrondisse avec la div
  backgroundColor: '#fff',
  flexShrink: 0,          // empêche de rétrécir en flexbox
  },

   card: {
    background: '#f9f9f9',
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '20px',
    width: '50%',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease',
    },
card: {
  background:
      "linear-gradient(135deg,rgb(128, 160, 127), #203a43,rgb(111, 134, 83))",
  border: '1px solid #ddd',
  borderRadius: '10px',
  color: 'white',
  padding: '20px',
  flex: '1 1 45%',      // pour prendre environ la moitié chacun, responsive
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  transition: 'transform 0.2s ease',
  minWidth: '280px',    // limite la réduction en très petit écran
},
    card2: {
    background: '#f9f9f9',
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '20px',
    width: '30%',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease',
    minWidth: '280px',    // limite la réduction en très petit écran
    },
    acquiredSkills: {
    border: '2px solid #4A90E2',  // couleur du contour
    borderRadius: '8px',           // coins arrondis
    padding: '20px',
    backgroundColor: '#c9f9b9',   // fond très clair bleu
    margin: '20px auto'            // centrage horizontal et marge haut/bas
    },

  button: {
    backgroundColor: '#00bfff',
    color: 'white',
    padding: '12px 24px',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
  },

};

export default AboutMe;
