// Header.js

import React from 'react';
import { Link } from 'react-router-dom';

const Header = (isAdmin,isLoggedIn) => {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link to="/" style={styles.navLink}>Home</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="../pages/ProjectList" style={styles.navLink}>Projects</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/tasks" style={styles.navLink}>Tasks</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/members" style={styles.navLink}>Members</Link>
          </li>
          {/* You can conditionally render additional links based on the user's role (admin or regular user) */}
          {/* For example: */}
          {isAdmin ? (
            <>
              <li style={styles.navItem}>
                <Link to="/create-project" style={styles.navLink}>Create Project</Link>
              </li>
              <li style={styles.navItem}>
                <Link to="/create-task" style={styles.navLink}>Create Task</Link>
              </li>
              <li style={styles.navItem}>
                <Link to="/create-member" style={styles.navLink}>Create Member</Link>
              </li>
            </>
          ) : null}
          {/* Add the Logout link if the user is logged in */}
          {isLoggedIn ? (
            <li style={styles.navItem}>
              <Link to="/logout" style={styles.navLink}>Logout</Link>
            </li>
          ) : null}
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '1rem',
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: '0 1rem',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
  },
};

export default Header;
