import * as React from 'react';
import PropTypes from 'prop-types';

import InitialCodeBlock from '@theme-init/CodeBlock';

import { CodeOutput } from './CodeOutput';

const styles = {
  container: {},
  output: {
    position: 'relative',
    padding: '1.25em 1em 0em 1em'
  }
};

export default function CodeBlock(props) {
  const { children, showOutput, reverse = false, open = true } = props;

  let content = [];
  content.push(<InitialCodeBlock {...props} key="code" />);

  if (showOutput) {
    let outputContent = <CodeOutput code={children} key="output" />;
    if (typeof open === 'string') {
      // TODO: to improve performance, render content only when open is yes.
      outputContent = (
        <details key="output" open={open === 'yes'}>
          <summary>
            <strong>Show Output</strong>
          </summary>
          {outputContent}
        </details>
      );
    }
    content.push(outputContent);
  }
  if (reverse) content = content.reverse();
  return content;
}
