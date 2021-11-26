/* eslint-disable @typescript-eslint/no-var-requires */
import '@codesandbox/sandpack-react/dist/index.css';
import React from 'react';
import pkg from 'react-day-picker/package.json';

import {
  defaultDark,
  defaultLight,
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

/**
 * This CodeBlock component will display code _and_ rendering result when using the `include` tag:
 *
 * Example:
 *
 * ```
 * ```include
 * filename.tsx
 * ```
 * ```
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
  const files = {
    '/public/index.html': html.replace(
      '${theme}',
      isDarkTheme ? 'dark' : 'light'
    ),
    '/src/App.tsx': src,
    '/src/index.tsx': index,
    '/src/styles.css': styles
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
