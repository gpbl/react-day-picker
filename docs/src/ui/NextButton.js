import React from 'react';
import PropTypes from 'prop-types';

import LinkButton from './LinkButton';

export default function NextButton(props) {
  return (
    <div>
      <hr />
      <div style={{ textAlign: 'right' }}>
        <LinkButton to={props.to}>
          Next: <strong>{props.label} →</strong>
        </LinkButton>
      </div>
    </div>
  );
}

NextButton.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
