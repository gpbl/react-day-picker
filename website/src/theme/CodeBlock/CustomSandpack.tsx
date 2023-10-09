/* eslint-disable @typescript-eslint/no-var-requires */

import React from 'react';

import { Sandpack } from '@codesandbox/sandpack-react';
import { githubLight, nightOwl } from '@codesandbox/sandpack-themes';
import { useColorMode } from '@docusaurus/theme-common';
import pkg from 'react-day-picker/package.json';

const index = require(`!!raw-loader!./sandpack-app/index.tsx`);
const stylesDark = require(`!!raw-loader!./sandpack-app/dark.css`);
const styles = require(`!!raw-loader!./sandpack-app/light.css`);

// https://sandpack.codesandbox.io/docs/faq#how-to-load-local-or-private-dependencies
const rdpBuild = require(`!!raw-loader!react-day-picker/dist/index.js`);
const rdpBuildMap = require(`!!raw-loader!react-day-picker/dist/index.js.map`);
const rdpStyles = require(`!!raw-loader!react-day-picker/dist/style.css`);
const rdpStylesModule = require(`!!raw-loader!react-day-picker/dist/style.module.css`);
const rdpJson = JSON.stringify({
  name: 'react-day-picker',
  main: './index.js'
});

/** Render the Sandpack for docusaurus, by simulating a small React app with the given source code. */
export function CustomSandPack(props: {
  /** The source code of the app you want to render */
  src: string;
  dependencies?: Record<string, string>;
}) {
  const isDarkTheme = useColorMode().colorMode === 'dark';

  let files = {
    '/App.tsx': props.src,
    '/index.tsx': index.default,
    '/styles.css': isDarkTheme ? stylesDark.default : styles.default
  };

  const fakePkg = {
    '/node_modules/react-day-picker/package.json': rdpJson,
    '/node_modules/react-day-picker/index.js': rdpBuild.default,
    '/node_modules/react-day-picker/index.js.map': rdpBuildMap.default,
    '/node_modules/react-day-picker/dist/style.css': rdpStyles.default,
    '/node_modules/react-day-picker/dist/style.module.css':
      rdpStylesModule.default
  };

  if (process.env.NODE_ENV === 'development') {
    files = { ...files, ...fakePkg };
  }

  const dependencies = {
    'react-day-picker': pkg.version,
    'date-fns': '^2.28.0',
    react: '^17.0.2',
    'react-dom': '^17.0.2',
    ...props.dependencies
  };

  return (
    <Sandpack
      template="react-ts"
      files={files}
      theme={isDarkTheme ? nightOwl : githubLight}
      customSetup={{ dependencies }}
      options={{
        showRefreshButton: true,
        showTabs: false,
        editorHeight: 450,
        externalResources: [
          'https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css'
        ]
      }}
    />
  );
}
