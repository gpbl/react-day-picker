import * as React from 'react';
import PropTypes from 'prop-types';

import nightOwlTheme from 'prism-react-renderer/themes/nightOwl';

import { Preview } from '../components/Preview';
import Highlight from '../components/Highlight';

const styles = {
  container: {},
  preview: {
    position: 'relative',
    padding: '1.25em 1em 0em 1em'
  }
};

function CodeBlock({
  children,
  className = '',
  preview,
  previewHeight,
  reverse
}) {
  let content = [];
  console.log(preview);
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
        <Preview
          code={children}
          theme={nightOwlTheme}
          height={previewHeight ? Number(previewHeight) : undefined}
        />
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
  previewHeight: PropTypes.string,
  reverse: PropTypes.bool
};

export default CodeBlock;
