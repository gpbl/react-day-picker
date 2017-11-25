import React from 'react';
import PropTypes from 'prop-types';

import styles from './Wrap.module.scss';

export default function Wrap({ children }) {
  return <div className={styles.container}>{children}</div>;
}

Wrap.propTypes = {
  children: PropTypes.node,
};
