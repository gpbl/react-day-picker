import React from 'react';

import logo from '../images/logo.png';

import GitHubButton from '../ui/GitHubButton';
import Wrap from '../ui/Wrap';

import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Wrap>
        <div className={styles.container}>
          <div>
            <a href="/">
              <img src={logo} alt="Home page" height={30} />
            </a>
          </div>
          <div>
            <GitHubButton />
          </div>
          <div>
            <p>
              Created by <a href="https://github.com/gpbl">gpbl</a> and{' '}
              <a href="https://github.com/gpbl/react-day-picker/graphs/contributors">
                contributors
              </a>. Licensed under the{' '}
              <a href="https://github.com/gpbl/react-day-picker/blob/master/LICENSE">
                MIT License
              </a>.
            </p>
          </div>
        </div>
      </Wrap>
    </footer>
  );
}
