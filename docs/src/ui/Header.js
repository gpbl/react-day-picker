import React from 'react';
import DayPicker from 'react-day-picker';

import Link from 'gatsby-link';

import Wrap from './Wrap';

import logo from '../images/logo.png';
import github from '../images/github.png';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.container}>
      <Wrap>
        <div className={styles.header}>
          <a className={styles.headerLogo} href="/">
            <img src={logo} alt="Home page" width={200} height={40} />
          </a>
          <nav>
            <ul>
              <li>
                <Link to="/docs" activeClassName={styles.active}>
                  Docs & API
                </Link>
              </li>
              <li>
                <Link to="/examples" activeClassName={styles.active}>
                  Examples
                </Link>
              </li>
              <li>
                <Link to="/support" activeClassName={styles.active}>
                  Support
                </Link>
              </li>
              <li>
                <Link to="/contributing" activeClassName={styles.active}>
                  Contribute
                </Link>
              </li>
              <li>
                <Link to="/changelog" activeClassName={styles.active}>
                  v{DayPicker.VERSION}
                </Link>
              </li>
              <li>
                <a href="https://github.com/gpbl/react-day-picker">
                  <img src={github} width="20" height="20" alt="Github logo" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </Wrap>
    </header>
  );
}
