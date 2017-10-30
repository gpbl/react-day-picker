import React from 'react';
import PropTypes from 'prop-types';

const SIZES = {
  medium: 960,
  large: 1400,
};
export default function Wrap({ children, size }) {
  return (
    <div
      css={{
        maxWidth: SIZES[size],
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '20px',
        paddingRight: '20px',
      }}
    >
      {children}
    </div>
  );
}

Wrap.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(['medium', 'large']),
};

Wrap.defaultProps = {
  size: 'medium',
};
