import React from 'react';

import CodeBlock from '@docusaurus/theme-classic/lib-next/theme/CodeBlock';

import { CustomSandPack } from './CustomSandpack';

/**
 * This "swizzled" docusaurus component will display a Sandpack using the example filename.
 * See https://docusaurus.io/docs/swizzling for info about swizzling components.
 * */
export default function CodeBlockWithSandpack(props: {
  children: string;
  className: string;
  dependencies: string;
}) {
  if (props.className !== 'language-include-example') {
    return (
      <CodeBlock className="language-jsx" {...props}>
        {props.children}
      </CodeBlock>
    );
  }
  const fileName = props.children.replace(/\n*/gi, '');
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const src = require(`!!raw-loader!../../../examples/${fileName}`)
    .default as string;

  const dependencies: Record<string, string> = props.dependencies
    ?.split(',')
    .reduce(
      (result, dependency) => ({ ...result, [dependency]: 'latest' }),
      {}
    );
  return <CustomSandPack dependencies={dependencies} src={src} />;
}
