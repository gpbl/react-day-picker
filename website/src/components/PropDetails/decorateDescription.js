import React from 'react';

import PROP_TYPES from './prop_types.json';

function addCodeBlocks(str) {
  const parts = str.split(/`([^`]*)`/);
  // Replace new lines
  for (var i = 1; i < parts.length; i += 2) {
    if (Object.keys(PROP_TYPES).indexOf(parts[i]) > -1) {
      // Add link to prop
      parts[i] = <a href={`#${parts[i].toLowerCase()}`}>{parts[i]}</a>;
    }
    parts[i] = <code key={i}>{parts[i]}</code>;
  }
  return parts;
}

export default function decorateDescription(str) {
  let result = [];

  if (Array.isArray(str)) {
    return str.map(token => decorateDescription(token));
  }

  // Add new lines
  result = str.split(/\n\n./gi).map(token => (
    <React.Fragment key={token}>
      {addCodeBlocks(token)}
      <br />
    </React.Fragment>
  ));
  return result;
}
