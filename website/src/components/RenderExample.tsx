import * as React from 'react';

import styles from './RenderExample.module.css';

export function RenderExample(props: {
  name: string;
  rootStyle?: React.CSSProperties;
}) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const Component = require(`@site/examples/${props.name}`).default;
  return (
    <div className={styles.example}>
      <Component />
    </div>
  );
}
