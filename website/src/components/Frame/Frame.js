/* eslint-disable import/no-unresolved */
import React, { useState, createRef } from 'react';
import PropTypes from 'prop-types';
import fastdom from 'fastdom';
import get from 'lodash/get';

import FrameComponent from 'react-frame-component';

// eslint-disable import/no-unresolved
import htmlContent from '!!raw-loader!./content.html';
import styleContent from '!!raw-loader!react-day-picker/lib/style.css';

const initialContent = htmlContent.replace('/* #style */', styleContent);

export default function Frame({ children, height }) {
  const [frameHeight, setFrameHeight] = useState(height);
  const iframeRef = createRef();

  const resize = iframe => {
    if (height) {
      setFrameHeight(height);
      return;
    }
    fastdom.measure(() => {
      const scrollHeight =
        get(iframe, 'current.node.contentDocument.body.scrollHeight') || 280;
      setFrameHeight(scrollHeight + 10);
    });
  };

  React.useEffect(() => resize(iframeRef), [children]);

  return (
    <FrameComponent
      initialContent={initialContent}
      style={{
        width: '100%',
        height: frameHeight,
        margin: '0 auto',
        border: 0,
      }}
      ref={iframeRef}
      onLoad={() => resize(iframeRef)}
    >
      {children}
    </FrameComponent>
  );
}

Frame.propTypes = {
  children: PropTypes.node,
  height: PropTypes.number,
};
