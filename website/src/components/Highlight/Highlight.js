import React, { useState } from 'react';
import PropTypes from 'prop-types';

import PrismHighlight, { defaultProps } from 'prism-react-renderer';

import lightTheme from 'prism-react-renderer/themes/github';
import darkTheme from 'prism-react-renderer/themes/vsDark';

import useTheme from './hooks/useTheme';
/**
 * Highlight code with PrismHighlight.
 */
function Highlight({ code, language = 'jsx' }) {
  const [theme, setTheme] = useState('light');
  useTheme(newTheme => setTheme(newTheme));
  return (
    <PrismHighlight
      {...defaultProps}
      theme={theme === 'light' ? lightTheme : darkTheme}
      code={code.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </PrismHighlight>
  );
}

Highlight.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string,
};

export default Highlight;
