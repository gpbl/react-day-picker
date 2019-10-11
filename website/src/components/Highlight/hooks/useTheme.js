/* eslint-env browser */

import { useEffect } from 'react';

export default function useTheme(onChange) {
  useEffect(() => {
    const observer = new MutationObserver(mutationsList => {
      for (let mutation of mutationsList) {
        if (mutation.attributeName !== 'data-theme') {
          continue;
        }
        const { theme } = document.documentElement.dataset;
        onChange(theme || 'light');
        return;
      }
    });
    observer.observe(document.documentElement, { attributes: true });

    const { theme } = document.documentElement.dataset;
    onChange(theme || 'light');

    return () => observer.disconnect();
  }, []);
}
