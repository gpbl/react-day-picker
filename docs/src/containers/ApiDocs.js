import React from 'react';
import PropTypes from 'prop-types';

import styles from './ApiDocs.module.scss';

export default function ApiDocs({ children }) {
  return <div className={styles.container}>{children}</div>;
}

ApiDocs.propTypes = {
  children: PropTypes.node,
};
