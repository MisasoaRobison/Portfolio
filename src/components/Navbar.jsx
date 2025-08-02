import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.ul} className="navbar-ul">
        <li><Link to="/" style={styles.a}>Home</Link></li>
        <li><Link to="/aboutme" style={styles.a}>About Me</Link></li>
        <li><Link to="/mystudies" style={styles.a}>Studies</Link></li>
        <li><Link to="/myprojects" style={styles.a}>Projects</Link></li>
        <li><Link to="/cv" style={styles.a}>CV</Link></li>
      </ul>
            <style>
        {`
          @media (max-width: 700px) {
            .navbar-ul {
              flex-direction: column !important;
              gap: 0 !important;
              align-items: stretch !important;
              width: 100vw !important;
              min-width: 0 !important;
              max-width: 100vw !important;
              padding: 0 !important;
              margin: 0 auto !important;
            }
            .navbar-ul li {
              width: 100vw !important;
              min-width: 0 !important;
              max-width: 100vw !important;
              text-align: center !important;
              border-bottom: 1px solid rgba(0,0,0,0.08);
              padding-left: 0;
              padding-right: 0;
              box-sizing: border-box;
            }
            .navbar-ul li:last-child {
              border-bottom: none;
            }
          }
        `}
      </style>
    </nav>
  );
}

const styles = {
  navbar: {
    background: "rgba(32, 58, 100, 0.55)", // fond sombre et transparent
    padding: '1rem 0',
    position: 'relative',
    top: 0,
    left: 0,
    width: '100vw', // couvre toute la largeur de l'écran
    minWidth: '100vw',
    zIndex: 999,
    boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
  },
  ul: {
    display: 'flex',
    justifyContent: 'center',
    listStyle: 'none',
    gap: '4rem',
    margin: 0,
    padding: 0,
  },
  a: {
    color: 'black',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontFamily: '"Roboto slab", sans-serif',
    fontSize: '1.2rem',
    transition: 'color 0.3s',
    display: 'block',
    padding: '12px 0',
    background: 'transparent',
  },
};

export default Navbar;