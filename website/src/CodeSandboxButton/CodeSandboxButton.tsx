import * as React from 'react';

import CodeSandboxer, { GitInfo } from 'react-codesandboxer';

import { dependencies } from './files/dependencies';

const providedFiles = {
  'index.tsx': {
    content: require('!!raw-loader!./files/index.tsx').default
  },
  'index.html': {
    content: require('!!raw-loader!./files/index.html').default
  },
  'style.css': {
    content: require('!!raw-loader!./files/style.css').default
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
  const name = `DayPicker: ${fileName.replace('.tsx', '')} example`;
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
          ↗ {isLoading ? 'Opening pop-up window…' : 'CodeSandbox'}
        </button>
      )}
    </CodeSandboxer>
  );
}
