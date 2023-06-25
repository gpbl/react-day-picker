import React from 'react';

export function RenderExample(props: {
  name: string;
  rootStyle?: React.CSSProperties;
}) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const Component = require(`@site/examples/${props.name}`).default;
  return <Component />;
}
