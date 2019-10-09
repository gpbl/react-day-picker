import React from 'react';
import PropTypes from 'prop-types';

function PropType({ value, name }) {
  switch (name) {
    case 'union':
      return value.map((t, i) => <PropType key={i} type={t} />).join(' | ');
    case 'instanceOf':
      return <code>{value.replace(/'/g, '')}</code>;
    default:
      return <code>{name}</code>;
  }
}

PropType.propTypes = {
  value: PropTypes.any,
  name: PropTypes.string.isRequired,
};

export default PropType;
