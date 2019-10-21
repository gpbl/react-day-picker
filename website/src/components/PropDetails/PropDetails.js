import React from 'react';
import PropTypes from 'prop-types';

// Generate prop types via `yarn build-props`
import PROP_TYPES from './prop_types.json';
import Deprecated from './Deprecated';

import DefaultValue from './DefaultValue';
import PropType from './PropType';

import Description from './Description';

const EMSPACE = ' ';

const style = { margin: '0.5em 0' };

/**
 * Render prop details
 */
function PropDetails({ name }) {
  const prop = PROP_TYPES[name];
  if (!prop) {
    return <p>{name} prop not found</p>;
  }
  const { type, defaultValue, categories, description } = prop;
  return (
    <>
      {categories['@deprecated'] && (
        <p style={style}>
          <small>
            <Deprecated message={categories['@deprecated']} />
          </small>
        </p>
      )}
      <p style={style}>
        <small>
          Type <PropType name={type.name} value={type.value} />
          {EMSPACE}
          {defaultValue && (
            <>
              Default <DefaultValue value={defaultValue.value} />
            </>
          )}
        </small>
      </p>
      <Description>{description}</Description>
    </>
  );
}

PropDetails.propTypes = {
  name: PropTypes.string.isRequired,
};

export default PropDetails;
