/* eslint-disable global-require, import/no-dynamic-require */

import React from 'react';
import PropTypes from 'prop-types';
import CodeSandboxer from 'react-codesandboxer';

import styles from './CodeSample.module.scss';
import CodeBlock from './CodeBlock';

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
        <h4>
          Code
          <CodeSandboxer
            dependencies={{
              'react-day-picker': 'latest',
              'react-helmet': 'latest',
              moment: 'latest',
              'date-fns': 'latest',
            }}
            gitInfo={{
              account: 'gpbl',
              branch: 'v7',
              repository: 'react-day-picker',
              host: 'github',
            }}
            name={`react-day-picker ${name}`}
            examplePath={`docs/src/code-samples/${name}.js`}
          >
            {() => (
              <button type="submit" style={{ backgroundColor: 'transparent' }}>
                ↗ CodeSandbox
              </button>
            )}
          </CodeSandboxer>
        </h4>
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
