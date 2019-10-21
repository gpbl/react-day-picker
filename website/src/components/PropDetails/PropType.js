import React from 'react';
import PropTypes from 'prop-types';

function PropType({ value, name }) {
  switch (name) {
    case 'union':
      return value.map((t, i) => <PropType key={i} type={t} />).join(' | ');
    case 'instanceOf':
      return <code>{value.replace(/'/g, '')}</code>;
    case 'Locale':
      return (
        <code>
          <a
            href="http://date-fns.org/docs/Locale"
            target="_blank"
            rel="noopener noreferrer"
          >
            Locale
          </a>
        </code>
      );
    default:
      return <code>{name}</code>;
  }
}

PropType.propTypes = {
  value: PropTypes.any,
  name: PropTypes.string.isRequired,
};

export default PropType;
