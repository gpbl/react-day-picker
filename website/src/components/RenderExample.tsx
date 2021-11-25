import React from 'react';

export function RenderExample(props: { fileName: string }) {
  try {
    require(`../../examples/${props.fileName}`).Example;
  } catch (e) {
    console.error('Error requiring %s', `../../examples/${props.fileName}`, e);
    return <pre>{e.message}</pre>;
  }
  const Component = require(`../../examples/${props.fileName}`).Example;

  return (
    <div>
      <Component />
    </div>
  );
}
