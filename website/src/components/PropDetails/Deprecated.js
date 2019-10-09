import React from 'react';
import PropTypes from 'prop-types';

import Description from './Description';
const EMSPACE = ' ';

/**
 * Display a styled deprecated message.
 */
function Deprecated({ message }) {
  return (
    <>
      <code
        style={{
          verticalAlign: 'middle',
          display: 'inline-block',
          color: 'var(--ifm-color-danger)',
          textTransform: 'uppercase',
        }}
      >
        Deprecated
      </code>
      {EMSPACE}
      <Description as="span">{message}</Description>
    </>
  );
}

Deprecated.propTypes = {
  /** The message to display */
  message: PropTypes.string,
};

export default Deprecated;
