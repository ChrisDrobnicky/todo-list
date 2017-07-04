import React from 'react';
import styles from './Header.stylesheet.css';

const Header = () => (
  <header className={styles.Header}>
    <h2 className="ui center aligned icon header">
      <i className="edit icon"></i>
      Todo-list
    </h2>
  </header>
);

export default Header;