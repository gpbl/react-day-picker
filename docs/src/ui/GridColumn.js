import React from 'react';
import PropTypes from 'prop-types';

export default function GridColumn({ children, span = 1, css }) {
  const flex = `${span} 0 0`;
  return <div css={{ flex, ...css }}>{children}</div>;
}

GridColumn.propTypes = {
  children: PropTypes.node,
  span: PropTypes.number,
  // eslint-disable-next-line react/forbid-prop-types
  css: PropTypes.object,
};
