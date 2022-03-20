/* eslint-disable @typescript-eslint/no-var-requires */

import React from 'react';

import {
  defaultDark,
  defaultLight,
  Sandpack,
  SandpackProps
} from '@codesandbox/sandpack-react';
import '@codesandbox/sandpack-react/dist/index.css';
import { useColorMode } from '@docusaurus/theme-common';
import pkg from 'react-day-picker/package.json';

const htmlIndex = require(`!!raw-loader!./sandpack-app/index.html`);
const index = require(`!!raw-loader!./sandpack-app/index.tsx`);
const stylesDark = require(`!!raw-loader!./sandpack-app/styles-dark.css`);
const styles = require(`!!raw-loader!./sandpack-app/styles.css`);

// https://sandpack.codesandbox.io/docs/faq#how-to-load-local-or-private-dependencies
const rdpBuild = require(`!!raw-loader!react-day-picker/dist/index.js`);
const rdpStyles = require(`!!raw-loader!react-day-picker/dist/style.css`);
const rdpJson = JSON.stringify({
  name: 'react-day-picker',
  main: './index.js'
});

/** Render the Sandpack for docusaurus, by simulating a small React app with the given source code. */
export function CustomSandPack(props: {
  /** The source code of the app you want to render */
  src: string;
}) {
  const { isDarkTheme } = useColorMode();

  let files = {
    '/public/index.html': htmlIndex.default,
    '/App.tsx': props.src,
    '/index.tsx': index.default,
    '/styles.css': `${styles.default}\n${isDarkTheme ? stylesDark.default : ''}`
  };

  const fakePkg = {
    '/node_modules/react-day-picker/package.json': rdpJson,
    '/node_modules/react-day-picker/index.js': rdpBuild.default,
    '/node_modules/react-day-picker/dist/style.css': rdpStyles.default
  };

  if (process.env.NODE_ENV === 'development') {
    files = { ...files, ...fakePkg };
  }

  const options: SandpackProps['options'] = {
    editorHeight: 400,
    showNavigator: false,
    showTabs: false,
    showLineNumbers: false,
    wrapContent: false
  };

  const dependencies = {
    'react-day-picker': 'next',
    ...pkg.peerDependencies
  };
  const theme = isDarkTheme ? defaultDark : defaultLight;

  return (
    <Sandpack
      template="react-ts"
      theme={{ ...theme, typography: { fontSize: '13px' } }}
      files={files}
      customSetup={{ dependencies }}
      options={options}
    />
  );
}
