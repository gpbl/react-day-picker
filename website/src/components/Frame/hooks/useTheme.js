/* eslint-env browser */

import { useEffect } from 'react';

export default function useTheme(iframeRef) {
  function setTheme(iframe) {
    if (!iframe.node) {
      return;
    }
    const theme = document.documentElement.dataset.theme;
    iframe.node.contentDocument.documentElement.setAttribute(
      'data-theme',
      theme || 'light'
    );
  }

  useEffect(() => {
    const iframe = iframeRef.current;
    const observer = new MutationObserver(mutationsList => {
      for (let mutation of mutationsList) {
        if (mutation.attributeName !== 'data-theme') {
          continue;
        }
        setTheme(iframe);
        return;
      }
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);
  return setTheme;
}
