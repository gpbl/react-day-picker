import React from 'react';
import PropTypes from 'prop-types';

import nightOwlTheme from 'prism-react-renderer/themes/nightOwl';

import Preview from '../../components/Preview';
import Highlight from '../../components/Highlight';

const styles = {
  container: {},
  preview: {
    position: 'relative',
    margin: '1em 0',
    borderRadius: 'var(--ifm-pre-border-radius)',
  },
};

function CodeBlock({ children, className = '', preview, reverse, ...props }) {
  let content = [];

  content.push(
    <Highlight
      key="highlight"
      code={children}
      language={className.replace('language-', '')}
      style={{ borderTopLeftRadius: 0 }}
    />
  );

  if (preview) {
    content.push(
      <div key="preview" style={styles.preview}>
        <Preview code={children} theme={nightOwlTheme} {...props} />
        {/* <hr style={{ margin: 0 }} /> */}
      </div>
    );
  }
  if (reverse) {
    content = content.reverse();
  }
  return <div style={styles.container}>{content}</div>;
}

CodeBlock.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  layout: PropTypes.oneOf(['row', 'column']),
  preview: PropTypes.bool,
  reverse: PropTypes.bool,
};

export default CodeBlock;
