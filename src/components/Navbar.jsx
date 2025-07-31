import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.ul}>
        <li><Link to="/" style={styles.a}>Home</Link></li>
        <li><Link to="/aboutme" style={styles.a}>About Me</Link></li>
        <li><Link to="/mystudies" style={styles.a}>Studies</Link></li>
        <li><Link to="/myprojects" style={styles.a}>Projects</Link></li>
        <li><Link to="/cv" style={styles.a}>CV</Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    background: "linear-gradient(135deg,rgb(13, 153, 212),rgb(110, 132, 230),rgb(58, 60, 197))",
    padding: '1rem 0',
    position: 'sticky',
    top: 0,
    zIndex: 999,
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
  },
  ul: {
    display: 'flex',
    justifyContent: 'center',
    listStyle: 'none',
    gap: '15rem',
    margin: 0,
    padding: 0,
  },
  a: {
    color: 'black',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontFamily: 'cursive',
    fontSize: '1.2rem',
    transition: 'color 0.3s',
  },
};

export default Navbar;