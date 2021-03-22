import * as React from 'react';

import OriginalCodeBlock from '@theme-original/CodeBlock';
import { CodeSandboxButton } from '../CodeSandboxButton';

// Default implementation, that you can customize
/**
 * Very basic CodeBlock to run an app and show its source.
 *
 * ```include
 * filename
 * ```
 */
export default function CodeBlock(props) {
  const { children, className } = props;

  if (className !== 'language-include') {
    return (
      <OriginalCodeBlock className="language-jsx" {...props}>
        {children}
      </OriginalCodeBlock>
    );
  }

  const fileName = children.replace(/\n*/gi, '');

  try {
    require(`../../docs/${fileName}`).default;
  } catch (e) {
    return <OriginalCodeBlock {...props}>{e.message}</OriginalCodeBlock>;
  }

  const Component = require(`../../docs/${fileName}`).default;
  const src = require(`!!raw-loader!../../docs/${fileName}`).default;

  return (
    <div className="rdp-codeblock" style={{ position: 'relative' }}>
      <OriginalCodeBlock {...props} title="test" className="language-tsx">
        {src}
      </OriginalCodeBlock>
      <CodeSandboxButton fileName={fileName} />
      <details open>
        <summary>Output</summary>
        <div>
          <Component />
        </div>
      </details>
    </div>
  );
}
