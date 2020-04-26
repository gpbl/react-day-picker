import React, { useState, createRef } from "react";
import PropTypes from "prop-types";
import FrameComponent from "react-frame-component";

import htmlContent from "!!raw-loader!./content.html";
import styleContent from "!!raw-loader!react-day-picker/dist/style.css";
import useTheme from "./hooks/useTheme";

const initialContent = htmlContent.replace("/* #style */", styleContent);

export default function Frame({ children, height }) {
  const [frameHeight, setFrameHeight] = useState(height);
  const iframeRef = createRef();

  let resize;
  React.useEffect(() => {
    resize = (iframe) => {
      if (height) {
        setFrameHeight(height);
        return;
      }
      const scrollHeight =
        iframe && iframe.node
          ? iframe.node.contentDocument.body.scrollHeight
          : 300;
      setFrameHeight(scrollHeight);
    };
  }, [children]);

  const setTheme = useTheme(iframeRef);

  return (
    <FrameComponent
      initialContent={initialContent}
      style={{
        width: "100%",
        height: frameHeight || 280,
        margin: "0 auto",
        border: 0,
      }}
      ref={iframeRef}
      onLoad={() => {
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
