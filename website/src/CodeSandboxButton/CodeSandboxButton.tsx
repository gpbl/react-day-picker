import * as React from 'react';

import CodeSandboxer, { GitInfo } from 'react-codesandboxer';
import pkg from 'react-day-picker/package.json';

import dependencies from './files/dependencies.json';

const providedFiles = {
  'index.tsx': {
    content: require('!!raw-loader!./files/index.tsx').default
  },
  'index.html': {
    content: require('!!raw-loader!./files/index.html').default
  }
};

const gitInfo: GitInfo = {
  account: 'gpbl',
  branch: 'master',
  repository: 'react-day-picker',
  host: 'github'
};

export function CodeSandboxButton({
  fileName
}: {
  fileName: string;
}): JSX.Element {
  const name = `DayPicker v${pkg.version}: ${fileName.replace('.tsx', '')}`;
  return (
    <CodeSandboxer
      examplePath={`website/docs/${fileName}`}
      dependencies={dependencies}
      gitInfo={gitInfo}
      providedFiles={providedFiles}
      name={name}
    >
      {({ isLoading }) => (
        <button type="submit" style={{ padding: '.4em .8em' }}>
          ↗ {isLoading ? 'Uploading...' : 'CodeSandbox'}
        </button>
      )}
    </CodeSandboxer>
  );
}
