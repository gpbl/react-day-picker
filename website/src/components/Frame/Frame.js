/* eslint-disable import/no-unresolved */
import React, { useState, createRef } from 'react';
import PropTypes from 'prop-types';
import FrameComponent from 'react-frame-component';

// eslint-disable import/no-unresolved
import htmlContent from '!!raw-loader!./content.html';
import styleContent from '!!raw-loader!react-day-picker/lib/style.css';

const initialContent = htmlContent.replace('/* #style */', styleContent);

export default function Frame({ children, initialHeight = 250 }) {
  const [height, setHeight] = useState(initialHeight);
  const iframeRef = createRef();
  const handleResize = iframe => {
    if (
      iframe.current &&
      iframe.current.node.contentDocument &&
      iframe.current.node.contentDocument.body.scrollHeight !== 0
    ) {
      setHeight(iframe.current.node.contentDocument.body.scrollHeight + 7);
    }
  };

  React.useEffect(() => handleResize(iframeRef), [children]);

  return (
    <FrameComponent
      initialContent={initialContent}
      style={{
        width: '100%',
        height,
        border: '3px solid var(--ifm-code-background)',
        borderRadius: 2,
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
  initialHeight: PropTypes.number,
};
