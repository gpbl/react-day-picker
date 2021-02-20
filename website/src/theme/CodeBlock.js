import React from 'react';
import 'react-day-picker/style.css';
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
    return <OriginalCodeBlock {...props}>{children}</OriginalCodeBlock>;
  }
  const fileName = children.replace(/\n*/gi, '');
  try {
    require(`../../${fileName}`).default;
  } catch (e) {
    return (
      <OriginalCodeBlock className={className}>{e.message}</OriginalCodeBlock>
    );
  }
  const Component = require(`../../${fileName}`).default;
  const src = require(`!!raw-loader!../../${fileName}`).default;

  return (
    <>
      <OriginalCodeBlock className="language-tsx">{src}</OriginalCodeBlock>
      <details>
        <summary>Show output</summary>
        <Component />
      </details>
    </>
  );
}
