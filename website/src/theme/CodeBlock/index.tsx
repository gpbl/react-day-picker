import React from 'react';

import {
  githubLightTheme as defaultLight,
  monokaiProTheme as defaultDark,
  Sandpack,
  SandpackProps,
  SandpackTheme
} from '@codesandbox/sandpack-react';
/* eslint-disable @typescript-eslint/no-var-requires */
import '@codesandbox/sandpack-react/dist/index.css';
import useThemeContext from '@theme/hooks/useThemeContext';

import websitePackage from '../../../package.json';
import OriginalCodeBlock from '../OriginalCodeBlock';
import style from './styles.module.css';

const editorWidthPercentage = 60;

const html = require(`!!raw-loader!./sandbox/index.html`).default;
const index = require(`!!raw-loader!./sandbox/index.tsx`).default;
const styles = require(`!!raw-loader!./sandbox/styles.css`).default;
const stylesDark = require(`!!raw-loader!./sandbox/styles-dark.css`).default;

const findImportDependencies = (src: string) => {
  const imports = {};
  src.split('\n').forEach((line) => {
    const match = line.match(/^import .* from '(.*)';$/);
    if (match) {
      const packageName = match[1];
      imports[packageName] =
        websitePackage.devDependencies[packageName] || 'next';
    }
  });
  return imports;
};

/**
 * This CodeBlock component will display a Sandpack using the example filename.
 */
export default function CodeBlock(props) {
  const { isDarkTheme } = useThemeContext();
  if (props.className !== 'language-include') {
    return (
      <OriginalCodeBlock className="language-jsx" {...props}>
        {props.children}
      </OriginalCodeBlock>
    );
  }
  const fileName = props.children.replace(/\n*/gi, '');

  const src = require(`!!raw-loader!../../../examples/${fileName}`).default;

  const srcDependencies = findImportDependencies(src);

  // Include the dark theme in the css, if needed
  const css = `${styles}
  ${isDarkTheme ? stylesDark : ''}`;

  const files = {
    '/public/index.html': html,
    '/src/App.tsx': src,
    '/src/index.tsx': index,
    '/src/styles.css': css
  };
  const dependencies = {
    ...srcDependencies,
    react: '^17.0.2',
    'date-fns': '^2.10.0',
    'react-dom': '^17.0.2',
    'react-day-picker': 'next'
  };
  const theme = isDarkTheme ? defaultDark : defaultLight;
  const customTheme: SandpackTheme = {
    ...theme,
    typography: {
      ...theme.typography,
      fontSize: '13px'
    }
  };

  const options: SandpackProps['options'] = {
    editorHeight: 400,
    showNavigator: false,
    showTabs: false,
    showLineNumbers: true,
    wrapContent: true,
    editorWidthPercentage
  };
  return (
    <div className={style.root}>
      <Sandpack
        template="react-ts"
        files={files}
        customSetup={{ dependencies }}
        theme={customTheme}
        options={options}
      />
      <a
        className={style.externalIcon}
        href={`/render?example=${fileName}`}
        target="render"
        style={{
          left: `calc(${editorWidthPercentage}% - .5rem)`
        }}
      >
        <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
          />
        </svg>
      </a>
    </div>
  );
}
