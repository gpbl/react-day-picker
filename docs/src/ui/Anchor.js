import React from 'react';
import PropTypes from 'prop-types';

import styles from './Anchor.module.scss';

/**
 * Create a named anchor that works well with a fixed header.
 */
export default function Anchor({ id }) {
  return <div className={styles.anchor} id={id} />;
}

Anchor.propTypes = {
  id: PropTypes.string.isRequired,
};
