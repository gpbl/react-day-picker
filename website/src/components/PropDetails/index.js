import React from 'react';
import PropTypes from 'prop-types';

// Generate prop types via `yarn build-props`
import PROP_TYPES from './prop_types.json';

import Deprecated from './Deprecated';

import formatType from './formatType';
import decorateDescription from './decorateDescription';

const EMSPACE = ' ';

/**
 * Render prop details
 */
function PropDetails({ name }) {
  const prop = PROP_TYPES[name];
  const { type, defaultValue, categories, description } = prop;
  return (
    <>
      {categories['@deprecated'] && (
        <p style={{ marginBottom: '.5em', fontSize: '.8em' }}>
          <Deprecated message={categories['@deprecated']} />
        </p>
      )}
      <p style={{ marginBottom: '1em', fontSize: '.8em' }}>
        Type <code>{formatType(type)}</code>
        {EMSPACE}
        {defaultValue && (
          <>
            Default <code>{defaultValue.value.replace(/'/g, '')}</code>
          </>
        )}
      </p>

      <p>{decorateDescription(description)}</p>
    </>
  );
}

PropDetails.propTypes = {
  name: PropTypes.string.isRequired,
};

export default PropDetails;
