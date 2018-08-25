import React from 'react';
import DayPicker from 'react-day-picker';

import Link from 'gatsby-link';

import Wrap from './Wrap';

import logo from '../images/logo.png';
import github from '../images/github.png';
import styles from './Header.module.scss';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleMenuButtonClick = this.handleMenuButtonClick.bind(this);
  }
  handleMenuButtonClick(e) {
    e.preventDefault();
    this.setState({ showMenu: !this.state.showMenu });
  }
  handleMenuClick() {
    this.setState({ showMenu: false });
  }
  render() {
    const { showMenu } = this.state;
    return (
      <header
        className={`${styles.container} ${showMenu ? styles.menuVisible : ''}`}
      >
        <Wrap>
          <div className={styles.header}>
            <button
              type="button"
              className={styles.headerMenuButton}
              onClick={this.handleMenuButtonClick}
            />
            <a className={styles.headerLogo} href="/">
              <img src={logo} alt="Home page" width={200} height={40} />
            </a>
            <nav>
              <ul>
                <li>
                  <Link
                    to="/docs/getting-started"
                    onClick={this.handleMenuClick}
                    activeClassName={styles.active}
                  >
                    Docs & API
                  </Link>
                </li>
                <li>
                  <Link
                    to="/examples/basic"
                    onClick={this.handleMenuClick}
                    activeClassName={styles.active}
                  >
                    Examples
                  </Link>
                </li>
                <li>
                  <Link
                    to="/support"
                    onClick={this.handleMenuClick}
                    activeClassName={styles.active}
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contributing"
                    onClick={this.handleMenuClick}
                    activeClassName={styles.active}
                  >
                    Contribute
                  </Link>
                </li>
                <li>
                  <Link
                    to="/changelog"
                    onClick={this.handleMenuClick}
                    activeClassName={styles.active}
                  >
                    v{DayPicker.VERSION}
                  </Link>
                </li>
                <li>
                  <a href="https://github.com/gpbl/react-day-picker">
                    <img
                      src={github}
                      width="20"
                      height="20"
                      alt="GitHub logo"
                    />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </Wrap>
      </header>
    );
  }
}
