import React, { useState, createRef } from 'react';
import PropTypes from 'prop-types';
import FrameComponent from 'react-frame-component';

// eslint-disable-next-line import/no-unresolved
import style from '!!raw-loader!react-day-picker/lib/style.css';

const initialContent = `<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        margin: 0;
        font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji','Segoe UI Emoji', 'Segoe UI Symbol';
      }
      pre, code {
        font-size: .875em;
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
      ${style}
    </style>
  </head>
  <body>
    <div></div>
  </body>
</html>`;

export default function Frame({ children, initialHeight, code }) {
  const [height, setHeight] = useState(initialHeight);
  const iframeRef = createRef();
  const handleResize = iframe => {
    if (
      iframe.current &&
      iframe.current.node.contentDocument &&
      iframe.current.node.contentDocument.body.scrollHeight !== 0
    ) {
      setHeight(iframe.current.node.contentDocument.body.scrollHeight);
    }
  };

  React.useEffect(() => handleResize(iframeRef), [children, code]);

  return (
    <FrameComponent
      initialContent={initialContent}
      style={{
        border: 0,
        width: '100%',
        height,
      }}
      ref={iframeRef}
      onLoad={() => handleResize(iframeRef)}
    >
      {children}
    </FrameComponent>
  );
}

Frame.propTypes = {
  children: PropTypes.node,
};
