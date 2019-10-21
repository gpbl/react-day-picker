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

export default function Description({ as = 'p', children }) {
  const Component = as;

  let result = [];

  if (Array.isArray(children)) {
    return children.map((token, i) => (
      <Description as={as} key={i}>
        {token}
      </Description>
    ));
  }

  // Add new lines
  result = children
    .split(/\n\n/gi)
    .map(token => <Component key={token}>{addCodeBlocks(token)}</Component>);
  return result;
}
