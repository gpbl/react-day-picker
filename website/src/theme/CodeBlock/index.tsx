import * as React from 'react';
import OriginalCodeBlock from '../OriginalCodeBlock';

import styles from './styles.module.css';

/**
 * Very basic CodeBlock to run an app and show its source.
 *
 * ```include
 * filename
 * ```
 */
export default function CodeBlock(props) {
  if (props.className !== 'language-include') {
    return (
      <OriginalCodeBlock className="language-jsx" {...props}>
        {props.children}
      </OriginalCodeBlock>
    );
  }

  const fileName = props.children.replace(/\n*/gi, '');
  try {
    require(`../../../examples/${fileName}`).Example;
  } catch (e) {
    console.error('Error requiring %s', `../../../examples/${fileName}`, e);
    return <OriginalCodeBlock {...props}>{e.message}</OriginalCodeBlock>;
  }
  const src = require(`!!raw-loader!../../../examples/${fileName}`).default;
  try {
    require(`../../../examples/${fileName}`).Example;
  } catch (e) {
    console.error('Error requiring %s', `../../../examples/${fileName}`, e);
    return <pre>{e.message}</pre>;
  }
  const Component = require(`../../../examples/${fileName}`).Example;

  return (
    <div className={styles.root}>
      <div className={styles.code}>
        <OriginalCodeBlock {...props} className="language-tsx">
          {src}
        </OriginalCodeBlock>
      </div>
      <div className={styles.output}>
        <div>
          <Component />
        </div>
      </div>
    </div>
  );
}
