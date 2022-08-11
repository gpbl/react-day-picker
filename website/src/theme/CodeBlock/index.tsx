/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';

import { RenderExample } from '@site/src/components/RenderExample';
import CodeBlock from '@theme-original/CodeBlock';

import styles from './CodeBlock.module.css';
import { CustomSandPack } from './CustomSandpack';

/**
 * This "swizzled" docusaurus component will display a Sandpack using the example filename.
 *
 * See https://docusaurus.io/docs/swizzling for info about swizzling components.
 * */
export default function CodeBlockWithSandpack(props: {
  children: string;
  className: string;
  title?: string;
  dependencies?: string;
  /** Toggle between editor or preview in the codeblock example. */
  show?: 'editor' | 'preview';
  /** Show the toolbar with the toggle links. Defaults to 'true'. */
  toolbar: 'true' | 'false';
}) {
  const [edit, toggleEdit] = React.useState(props.show === 'editor');
  if (props.className !== 'language-include-example') {
    return (
      <CodeBlock
        metastring={undefined}
        title={props.title}
        language="jsx"
        {...props}
      >
        {props.children}
      </CodeBlock>
    );
  }
  const fileName = props.children.replace(/\n*/gi, '');
  const src = require(`!!raw-loader!@site/examples/${fileName}`)
    .default as string;
  const dependencies: Record<string, string> = props.dependencies
    ?.split(',')
    .reduce(
      (result, dependency) => ({ ...result, [dependency]: 'latest' }),
      {}
    );

  return (
    <div className={styles.root}>
      {props['toolbar'] !== 'false' && (
        <div className={styles.toolbar}>
          <button onClick={() => toggleEdit(!edit)}>
            {edit ? 'Toggle Preview' : 'Toggle Editor'}
          </button>
          {' | '}
          <button
            title="Open the rendered example in a new window."
            onClick={() => {
              const win = window.open(`/render?example=${fileName}`, '_blank');
              win.focus();
            }}
          >
            New Window ↗
          </button>
        </div>
      )}
      {!edit && (
        <div className={styles.container}>
          <CodeBlock
            metastring={undefined}
            title={props.title}
            language="jsx"
            {...props}
          >
            {src}
          </CodeBlock>
          <div>
            <RenderExample name={fileName} />
          </div>
        </div>
      )}
      {edit && <CustomSandPack dependencies={dependencies} src={src} />}
    </div>
  );
}
