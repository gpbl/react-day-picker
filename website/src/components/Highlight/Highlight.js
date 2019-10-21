/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import PrismHighlight, { defaultProps } from 'prism-react-renderer';

import lightTheme from 'prism-react-renderer/themes/github';
import darkTheme from 'prism-react-renderer/themes/vsDark';

import useTheme from './hooks/useTheme';

function renderTokens({
  className,
  style,
  tokens,
  getLineProps,
  getTokenProps,
}) {
  const renderLine = (line, i) => {
    const lineProps = getLineProps({ line, key: i });
    return (
      <div key={i} {...lineProps}>
        {line.map((token, key) => (
          <span key={key} {...getTokenProps({ token, key })} />
        ))}
      </div>
    );
  };
  return (
    <pre className={className} style={style}>
      {tokens.map(renderLine)}
    </pre>
  );
}

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
      data-line="1,4"
    >
      {renderTokens}
    </PrismHighlight>
  );
}

Highlight.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string,
  style: PropTypes.object,
};

export default Highlight;
