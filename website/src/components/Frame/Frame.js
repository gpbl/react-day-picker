/* eslint-env browser */
/* eslint-disable import/no-unresolved */
import React, { useState, createRef } from 'react';
import PropTypes from 'prop-types';
import FrameComponent from 'react-frame-component';

import htmlContent from '!!raw-loader!./content.html';
import styleContent from '!!raw-loader!react-day-picker/lib/style.css';
import useTheme from './hooks/useTheme';

const initialContent = htmlContent.replace('/* #style */', styleContent);

export default function Frame({ children, height }) {
  const [frameHeight, setFrameHeight] = useState(height);
  const iframeRef = createRef();

  let resize;
  React.useEffect(() => {
    resize = iframe => {
      if (height) {
        console.log('Frame: setting height from prop');
        setFrameHeight(height);
        return;
      }

      console.log('Frame: setting height from scrollHeight');
      const scrollHeight =
        iframe && iframe.node
          ? iframe.node.contentDocument.body.scrollHeight
          : 280;
      console.log('Frame: setting frame height to: %s', scrollHeight);

      setFrameHeight(scrollHeight);
    };
  }, [children]);

  const setTheme = useTheme(iframeRef);

  return (
    <FrameComponent
      initialContent={initialContent}
      style={{
        width: '100%',
        height: frameHeight || 280,
        margin: '0 auto',
        border: 0,
      }}
      ref={iframeRef}
      onLoad={() => {
        console.log(iframeRef.current.node.contentDocument.body.scrollHeight);
        setTimeout(() => resize(iframeRef.current), 10);
        iframeRef.current && setTheme(iframeRef.current);
      }}
    >
      {children}
    </FrameComponent>
  );
}

Frame.propTypes = {
  children: PropTypes.node,
  height: PropTypes.number,
};
