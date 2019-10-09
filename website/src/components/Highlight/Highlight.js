import React from 'react';
import PropTypes from 'prop-types';

import PrismHighlight, { defaultProps } from 'prism-react-renderer';

// import lightTheme from 'prism-react-renderer/themes/nightOwlLight';
import darkTheme from 'prism-react-renderer/themes/github';

/**
 * Highlight code with PrismHighlight.
 */
function Highlight({ code, language = 'jsx' }) {
  return (
    <PrismHighlight
      {...defaultProps}
      theme={darkTheme}
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
