import React from 'react';
import 'react-day-picker/style';
import OriginalCodeBlock from '@theme-original/CodeBlock';

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
    <>
      <OriginalCodeBlock {...props} className="language-tsx">
        {src}
      </OriginalCodeBlock>
      <details open>
        <summary>Output</summary>
        <div>
          <Component />
        </div>
      </details>
    </>
  );
}
