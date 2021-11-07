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
  fileName,
  className
}: {
  className: string;
  fileName: string;
}): JSX.Element {
  const name = `DayPicker: ${fileName.replace('.tsx', '')} example`;
  return (
    <CodeSandboxer
      examplePath={`website/examples/${fileName}`}
      dependencies={dependencies}
      gitInfo={gitInfo}
      providedFiles={providedFiles}
      name={name}
    >
      {() => (
        <button type="submit" className={className}>
          Open in CodeSandbox
        </button>
      )}
    </CodeSandboxer>
  );
}
