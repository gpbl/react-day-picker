import * as React from 'react';

import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';

import OriginalCodeBlock from '../OriginalCodeBlock';

// Default implementation, that you can customize
/**
 * Very basic CodeBlock to run an app and show its source.
 *
 * ```include
 * filename
 * ```
 */
export default function CodeBlock(props) {
  const iframe = React.useRef<HTMLIFrameElement>();
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
    require(`../../../examples/${fileName}`).Example;
  } catch (e) {
    console.error('Error requiring %s', `../../../examples/${fileName}`, e);
    return <OriginalCodeBlock {...props}>{e.message}</OriginalCodeBlock>;
  }
  const src = require(`!!raw-loader!../../../examples/${fileName}`).default;
  const iframeSrc = `/render?component=${fileName}`;
  try {
    require(`../../../examples/${fileName}`).Example;
  } catch (e) {
    console.error('Error requiring %s', `../../../examples/${fileName}`, e);
    return <pre>{e.message}</pre>;
  }
  const Component = require(`../../../examples/${fileName}`).Example;

  return (
    <div className="codeBlock">
      <Tabs className="unique-tabs">
        <TabItem value="Example">
          <div className="Render">
            <Component />
          </div>
        </TabItem>
        <TabItem value="Code">
          <OriginalCodeBlock
            {...props}
            className="language-tsx"
            codeSandboxFilename={fileName}
          >
            {src.replace(`import React from 'react';\n`, '')}
          </OriginalCodeBlock>
        </TabItem>
      </Tabs>
    </div>
  );
}
