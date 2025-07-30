import React from 'react';

function Studies() {
  return (
    <>
    <title>Studies</title>
    <section id="mystudies" style={styles.section}>
              <h1 style={{fontFamily:'"Raleway", cursive', background: 'linear-gradient(90deg,rgb(0, 0, 0),rgb(213, 255, 97))',
        padding: '0 4px', borderRadius: '50px', color: 'white'}}>Ongoing Studies</h1>
      <p style={{fontFamily: 'cursive', textAlign: 'justify', color:'white'}}>
        The Master's degree in "Méthodes Informatiques Appliquées à la Gestion d'Entreprise" (MIAGE) is a specialized program that combines computer science and management. 
        The specialization “Reliable Information Systems and Data Intelligence” trains future professionals capable of supporting and leading digital and strategic transformations within organizations.
      </p>
      <p style={{fontFamily: 'cursive', textAlign: 'justify', color:'white'}}>
        This program is built on the complementary skills of computer scientists, mathematicians, and business experts. It provides students with the technical, analytical, and methodological tools needed to design and implement information systems, from strategic planning to technical execution.
    </p>
    <p style={{fontFamily: 'cursive', textAlign: 'justify', color:'white'}}>
        The program is structured around three main modules:
    </p>
    <div style={{
        display: 'flex',
        gap: '3rem',
        justifyContent: 'center',
        margin: '10px',
        flexWrap: 'wrap',
    }}>
        <div style={styles.card2}>
            <h4 style={{color:'yellow', fontFamily:'"Roleway", cursive', fontWeight: 'bold'}}>Computer Science</h4>
            <p style={{fontFamily: 'cursive', textAlign: 'justify', color:'white'}}>
                Focuses on information systems architecture and design, software and data quality, and big data analysis. It also includes mathematics and optimization tools to manage performance and complexity.
            </p>
        </div>
        <div style={styles.card2}>
            <h4 style={{color:'yellow', fontFamily:'"Roleway", cursive', fontWeight: 'bold'}}>Business Management</h4>
            <p style={{fontFamily: 'cursive', textAlign: 'justify', color:'white'}}>
                Covers business strategy to ensure the alignment of information systems with organizational goals. Students learn to analyze existing business processes, design improved ones aligned with strategy, and continuously optimize them.
            </p>
        </div>
        <div style={styles.card2}>
            <h4 style={{color:'yellow', fontFamily:'"Roleway", cursive', fontWeight: 'bold'}}>Languages and Communication</h4>
            <p style={{fontFamily: 'cursive', textAlign: 'justify', color:'white'}}>
                Offers both theoretical and practical training to strengthen English language skills and oral/written communication techniques essential in modern professional environments.
            </p>
        </div>
    </div>
    <div style={{
    border: '2px solid #4A90E2',  // couleur du contour
    borderRadius: '8px',           // coins arrondis
    padding: '20px',
    background:
      "linear-gradient(135deg,rgb(241, 65, 147),rgb(236, 134, 143),rgb(204, 118, 97))",
    margin: '20px auto' ,           // centrage horizontal et marge haut/bas
    }
    }>
  <h3 style={{fontFamily: 'cursive', textAlign: 'center' }}>Future Skills</h3>
  <ul>
    <li style={{fontFamily: 'cursive', textAlign: "justify"}}>
      <strong>Information System Architecture:</strong> Ability to design and manage reliable, scalable, and strategic IT systems aligned with business needs.
    </li>
    <li style={{fontFamily: 'cursive', textAlign: "justify"}}>
      <strong>Software Quality and Data Analysis:</strong> Skills in ensuring software quality, processing and analyzing large datasets, and applying optimization techniques.
    </li>
    <li style={{fontFamily: 'cursive', textAlign: "justify"}}>
      <strong>Business Process Management:</strong> Capacity to model, analyze, and optimize business processes in line with company strategy.
    </li>
    <li style={{fontFamily: 'cursive', textAlign: "justify"}}>
      <strong>Project and Performance Management:</strong> Mastery of tools and methods for managing complex projects and evaluating system performance.
    </li>
    <li style={{fontFamily: 'cursive', textAlign: "justify"}}>
      <strong>Communication and Collaboration:</strong> Proficiency in professional communication, teamwork, and English for international contexts.
    </li>
    <li style={{fontFamily: 'cursive', textAlign: "justify"}}>
      <strong>Adaptability and Innovation:</strong> Prepared to anticipate digital transformation and support strategic and technological changes.
    </li>
  </ul>
</div>

      <h1 style={{fontFamily:'"Raleway", cursive', background: 'linear-gradient(90deg,rgb(0, 0, 0),rgb(213, 255, 97))',
        padding: '0 4px', borderRadius: '50px', color: 'white'}}>Academic Background</h1>
      <h2 style={{fontFamily: '"Playfair Display", cursive', background: 'linear-gradient(90deg,rgb(10, 19, 70),rgb(221, 217, 233))',
        padding: '0 4px', borderRadius: '50px', color: 'white'}}>2022-2025: Bachelor's Dregree in Computer Science</h2>
      <p style={{fontFamily: 'cursive', textAlign: 'justify', color:'white'}}>
        I completed my Bachelor's degree in Computer Science at Sorbonne University, where I gained a solid foundation in programming, algorithms, and software development.
      </p>
      <p style={{fontFamily: 'cursive', textAlign: 'justify', color:'white'}}>
        In order to acquire multiple skills, I followed a bi-disciplinary course in Computer Science and Management. 
      </p>
      <h3 style={{fontFamily: '"Playfair Display", cursive', background: 'linear-gradient(90deg,rgb(10, 19, 70),rgb(221, 217, 233))',
        padding: '0 4px', borderRadius: '50px', color: 'white'}}>The bi-disciplinary program</h3>
      <p style={{fontFamily: 'cursive', textAlign: 'justify', color:'white'}}>
        The bi-disciplinary program allows students to pursue a Bachelor's degree in science by choosing a major from among eight disciplines, while combining it with a minor. This minor can be either:</p>
        <ul>
            <li style={{textAlign: "justify", color:'white'}}>
                <strong>Disciplinary:</strong> in another scientific discipline (any combination is possible),
            </li>
            <li style={{textAlign: "justify", color:'white'}}>
                <strong>Thematically transdisciplinary: </strong>on a topic combining science and humanities, such as design, the environment, management, or scientific mediation.
            </li>
        </ul>
        <p style={{fontFamily: 'cursive', textAlign: 'justify', color:'white'}}> This course, which awards a bachelor's degree in computer science, opens the way to master's degrees where bi-disciplinary training is appreciated. Students also followed English and Orientation courses.</p>

        <div style={{
            display: 'flex',
            gap: '2rem',
            justifyContent: 'center',
        }}>
            <div style={styles.card}>
                <h4 style={{color:'yellow', fontFamily:'"Roleway", cursive', fontWeight: 'bold'}}>Major in Computer Science</h4>
                <p style={{fontFamily: 'cursive', textAlign: 'justify', color:'white'}}>
                    The computer science major allows students to acquire some important aspects of computer science.
                </p>
                <ul>
                <li style={{fontFamily: 'cursive', textAlign: "justify", color:'white'}}>                   
                  <strong>Programming:</strong> Introduction to programming languages such as Python, C, Java and OCaml.Initiation in algorithms, and data structures.
                </li>
                <li style={{fontFamily: 'cursive', textAlign: "justify", color:'white'}}>
                    <strong>Web technologies:</strong> Learning web development methodologies focusing in the front-end and back-end aspects.
                </li>
                <li style={{fontFamily: 'cursive', textAlign: "justify", color:'white'}}>
                    <strong>Computer Systems:</strong> Introduction to computer architecture, operating systems, and networks.
                </li>
                <li style={{fontFamily: 'cursive', textAlign: "justify", color:'white'}}>
                    <strong>Databases:</strong> Introduction to database design, SQL, and data management.
                </li>
                <li style={{fontFamily: 'cursive', textAlign: "justify", color:'white'}}>
                    <strong>DevOps: </strong>
                    Introduction to DevOps practices, including continuous integration and deployment, version control, and automation.
                </li>
            </ul>
                

            </div>
            <div style={styles.card}>
                <h4 style={{color:'yellow', fontFamily:'"Roleway", cursive', fontWeight: 'bold'}}>Minor in Management</h4>
                <p style={{fontFamily: 'cursive', textAlign: "justify", color:'white'}}>
                    The Management minor allows students to acquire the same skills as a student pursuing a Bachelor's degree in Management Sciences.
                </p>
                <ul>
                    <li style={{fontFamily: 'cursive', textAlign: "justify", color:'white'}}>
                        <strong>Business Fundamentals: </strong>
                        Understanding economic principles, the evolution of companies, and key business models.
                    </li>
                    <li style={{fontFamily: 'cursive', textAlign: "justify", color:'white'}}>
                        <strong>Financial & Accounting: </strong>
                        Introduction to accounting, financial analysis, budgeting, and investment decision-making.
                    </li>
                    <li style={{fontFamily: 'cursive', textAlign: "justify", color:'white'}}>
                        <strong>Marketing & Strategic Thinking: </strong>
                        Market analysis, brand positioning, communication strategies, and long-term business planning.
                    </li>
                    <li style={{fontFamily: 'cursive', textAlign: "justify", color:'white'}}>
                        <strong>Innovation & Entrepreneurship: </strong>
                        Managing innovation processes, developing business plans, and exploring startup ecosystems.
                    </li>
                
            </ul>
            </div>
        </div>
        <div>
    <div style={styles.acquiredSkills}>
    <h3 style={{fontFamily: 'cursive', textAlign: 'center' }}>Acquired Skills</h3>
    <ul textAlign="justify">
        <li style={{fontFamily: 'cursive', textAlign: "justify"}}>
        <strong>Mastery of fundamentals:</strong> Solid understanding of key models, concepts, and core principles in computer science.
        </li>
        <li style={{fontFamily: 'cursive', textAlign: "justify"}}> 
        <strong>Problem-solving and analysis:</strong> Ability to analyze complex problems and design effective computing solutions.
        </li>
        <li style={{fontFamily: 'cursive', textAlign: "justify"}}>
        <strong>Software development tools:</strong> Experience with development environments, deployment workflows, and application lifecycle management.
        </li>
        <li style={{fontFamily: 'cursive', textAlign: "justify"}}>
        <strong>Technological watch:</strong> Ability to stay current with emerging technologies and learn autonomously.
        </li>
        <li style={{fontFamily: 'cursive', textAlign: "justify"}}>
        <strong>Environmental responsibility:</strong> Awareness of the environmental impact of digital technologies.
        </li>
        <li style={{fontFamily: 'cursive', textAlign: "justify"}}>
        <strong>Teamwork:</strong> Comfortable working in collaborative, team-based environments.
        </li>
        <li style={{fontFamily: 'cursive', textAlign: "justify"}}>
        <strong>Communication:</strong> Strong verbal and written communication skills.
        </li>
        <li style={{fontFamily: 'cursive', textAlign: "justify"}}>
        <strong>English proficiency</strong> 
        </li>
    </ul>
    </div>
</div>

      <h2 style={{fontFamily: '"Playfair Display", cursive', background: 'linear-gradient(90deg,rgb(10, 19, 70),rgb(221, 217, 233))',
        padding: '0 4px', borderRadius: '50px', color: 'white'}}>2022: High School Degree</h2>
      <p style={{fontFamily: 'cursive', textAlign: 'justify', color:'white'}}>
        I obtained my high school degree in a french system education high school in Madagascar, La Cllairefontaine. 
        I followed the general program of the French baccalaureate within Mathematics, Physic-Chemestry and "Sciences de la Vie et de la Terre" specialities. I also followed optional courses such as Expert Mathematics. 
      </p>
      <div>
      <div style={styles.acquiredSkills}>
        <h3 style={{fontFamily: 'cursive', textAlign: 'center' }}>Acquired Skills</h3>
        <ul textAlign="justify">
            <li style={{fontFamily: 'cursive', textAlign: "justify"}}>
                <strong >Mathematical skills:</strong> Strong foundation in mathematics, including calculus, algebra, and geometry.
            </li>
            <li style={{fontFamily: 'cursive', textAlign: "justify"}}>
                <strong>Scientific reasoning:</strong> Ability to apply scientific methods and critical thinking to solve problems.
            </li>
            <li style={{fontFamily: 'cursive', textAlign: "justify"}}> 
                <strong>Analytical skills:</strong> Proficient in analyzing data and drawing conclusions based on evidence.
            </li>
            <li style={{fontFamily: 'cursive', textAlign: "justify"}}>
                <strong>Language Proficiency:</strong> Mastery of French language and literature, with emphasis on critical thinking and writing.
            </li>
            <li style={{fontFamily: 'cursive', textAlign: "justify"}}>
                <strong>Humanities and Social Sciences:</strong> Courses in history, geography, philosophy, and economics.
            </li>
            <li style={{fontFamily: 'cursive', textAlign: "justify"}}>
                <strong>Preparation for University:</strong> Development of analytical, reasoning, and problem-solving skills essential for higher education.
            </li>
      </ul>
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
    
    color: '#333',
    padding: '80px 20px',
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
    marginBottom: '20px',
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
  padding: '20px',
  flex: '1 1 45%',      // pour prendre environ la moitié chacun, responsive
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  transition: 'transform 0.2s ease',
  minWidth: '280px',    // limite la réduction en très petit écran
},
    card2: {
      background:
      "linear-gradient(135deg,rgb(128, 160, 127), #203a43,rgb(111, 134, 83))",
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '10px',
    width: '25%',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease',
    },
    acquiredSkills: {
    border: '2px solid #4A90E2',  // couleur du contour
    borderRadius: '8px',           // coins arrondis
    padding: '20px',
    background:
      "linear-gradient(135deg,rgb(65, 241, 88),rgb(141, 255, 196),rgb(93, 233, 33))",
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

export default Studies;
