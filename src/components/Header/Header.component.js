import React, {Component} from 'react';
import styles from './Header.stylesheet.css';

class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <header className={styles.Header}>
        <h2 className="ui center aligned icon header">
          <i className="edit icon"></i>
          Todo-list
        </h2>
      </header>
    )
  }

}

export default Header;