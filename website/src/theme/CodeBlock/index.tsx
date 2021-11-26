/* eslint-disable @typescript-eslint/no-var-requires */
import '@codesandbox/sandpack-react/dist/index.css';
import React from 'react';

import {
  monokaiProTheme as defaultDark,
  githubLightTheme as defaultLight,
  Sandpack,
  SandpackProps,
  SandpackTheme
} from '@codesandbox/sandpack-react';
import useThemeContext from '@theme/hooks/useThemeContext';

import OriginalCodeBlock from '../OriginalCodeBlock';
import useWindowSize from '@theme/hooks/useWindowSize';

const editorWidthPercentage = 60;

const html = require(`!!raw-loader!./sandbox/index.html`).default;
const index = require(`!!raw-loader!./sandbox/index.tsx`).default;
const styles = require(`!!raw-loader!./sandbox/styles.css`).default;
const stylesDark = require(`!!raw-loader!./sandbox/styles-dark.css`).default;

/**
 * This CodeBlock component will display a Sandpack using the example filename.
 */
export default function CodeBlock(props) {
  const { isDarkTheme } = useThemeContext();
  const windowSize = useWindowSize();

  if (props.className !== 'language-include') {
    return (
      <OriginalCodeBlock className="language-jsx" {...props}>
        {props.children}
      </OriginalCodeBlock>
    );
  }
  const fileName = props.children.replace(/\n*/gi, '');

  const src = require(`!!raw-loader!../../../examples/${fileName}`).default;

  // Include the dark theme in the css, if needed
  const css = `${isDarkTheme ? stylesDark : ''}\n${styles}`;

  const files = {
    '/public/index.html': html,
    '/src/App.tsx': src,
    '/src/index.tsx': index,
    '/src/styles.css': css
  };
  const dependencies = {
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
    editorHeight: windowSize === 'desktop' ? 400 : 'auto',
    showNavigator: false,
    showTabs: false,
    showLineNumbers: true,
    wrapContent: true,
    editorWidthPercentage
  };
  return (
    <Sandpack
      template="react-ts"
      files={files}
      customSetup={{ dependencies }}
      theme={customTheme}
      options={options}
    />
  );
}
