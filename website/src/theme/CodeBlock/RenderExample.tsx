import React, { MouseEvent, useEffect, useRef, useState } from 'react';

import style from './RenderExample.module.css';

export function RenderExample(props: { name: string }) {
  const iframe = useRef<HTMLIFrameElement>();
  const iframeSrc = `/render?example=${props.name}`;

  const handleResizeClick = (e?: MouseEvent<HTMLAnchorElement>) => {
    e?.preventDefault();
    iframe.current.height = String(
      iframe.current.contentWindow.document.body.scrollHeight
    );
  };

  return (
    <div>
      <nav className={style.nav}>
        <a href="#" onClick={handleResizeClick} target="_blank">
          Resize ↓
        </a>
        {' | '}
        <a href={iframeSrc} target="_blank" rel="noreferrer">
          New Window ↗
        </a>
      </nav>
      <iframe width="100%" height="377" ref={iframe} src={iframeSrc} />
    </div>
  );
}
