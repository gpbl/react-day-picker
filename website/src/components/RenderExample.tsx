/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';

/** Renders an example component from the examples directory.  */
export function RenderExample(props: { fileName: string }) {
  try {
    require(`../../examples/${props.fileName}`).default;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('Error requiring %s', `../../examples/${props.fileName}`, e);
    return <pre>{e.message}</pre>;
  }
  const Component = require(`../../examples/${props.fileName}`).default;
  return <Component />;
}
