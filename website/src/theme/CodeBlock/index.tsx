/* eslint-disable @typescript-eslint/no-var-requires */
import { RenderExample } from '@site/src/components';
import * as React from 'react';
import OriginalCodeBlock from '../OriginalCodeBlock';

import styles from './styles.module.css';

/**
 * This CodeBlock component will display code _and_ rendering result when using the `include` tag:
 *
 * Example:
 *
 * ```
 * ```include
 * filename.tsx
 * ```
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

  const src = require(`!!raw-loader!../../../examples/${fileName}`).default;

  return (
    <div className={styles.root}>
      <div className={styles.code}>
        <OriginalCodeBlock {...props} className="language-tsx">
          {src}
        </OriginalCodeBlock>
      </div>
      <div className={styles.output}>
        <RenderExample fileName={fileName} />
      </div>
    </div>
  );
}
