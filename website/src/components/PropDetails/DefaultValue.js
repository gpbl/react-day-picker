import React from 'react';
import PropTypes from 'prop-types';

function DefaultValue({ value }) {
  return <code>{value.replace(/'/g, '')}</code>;
}

DefaultValue.propTypes = {
  value: PropTypes.any,
};

export default DefaultValue;
