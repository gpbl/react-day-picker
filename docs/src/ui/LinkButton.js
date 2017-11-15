import React from 'react';
import PropTypes from 'prop-types';

import Link from 'gatsby-link';

import styles from './LinkButton.module.scss';

export default function LinkButton(props) {
  return (
    <Link className={styles.LinkButton} {...props}>
      {props.children}
    </Link>
  );
}

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
};
