import React from 'react';
import PropTypes from 'prop-types';

import decorateDescription from './decorateDescription';
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
        }}
      >
        DEPRECATED
      </code>
      {EMSPACE}
      {decorateDescription(message)}
    </>
  );
}

Deprecated.propTypes = {
  /** The message to display */
  message: PropTypes.string,
};

export default Deprecated;
