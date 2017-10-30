import React from 'react';
import PropTypes from 'prop-types';

import { LINK } from '../constants/color';

export default function LinkButton(props) {
  return (
    <a
      css={{
        display: 'inline-block',
        verticalAlign: 'middle',
        border: `1px solid ${LINK}`,
        padding: '.5em 1em',
        textTransform: 'uppercase',
        fontSize: '.75rem',
        margin: '.25em 1em',
        borderRadius: 4,
        '&:hover': {
          backgroundColor: LINK,
          color: 'white',
        },
      }}
      {...props}
    >
      {props.children}
    </a>
  );
}

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
};
