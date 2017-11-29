/* eslint-disable global-require, import/no-dynamic-require */

import React from 'react';
import PropTypes from 'prop-types';

import styles from './CodeSample.module.scss';
import CodeBlock from '../ui/CodeBlock';

export default function CodeSamples({ name, lines, vertical = false }) {
  const source = require(`!raw-loader!../code-samples/${name}.js`);
  const Component = require(`../code-samples/${name}.js`);

  return (
    <div
      className={`${styles.container} ${
        vertical ? styles.vertical : styles.horizontal
      }`}
    >
      <div>
        <h4>Code</h4>
        <hr />
        <CodeBlock data-line={lines}>{source}</CodeBlock>
      </div>
      <div>
        <h4>Result</h4>
        <hr />
        <Component />
      </div>
    </div>
  );
}

CodeSamples.propTypes = {
  name: PropTypes.string.isRequired,
  lines: PropTypes.string,
  vertical: PropTypes.bool,
};
