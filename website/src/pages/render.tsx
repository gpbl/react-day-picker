/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';

import BrowserOnly from '@docusaurus/BrowserOnly';
import { useLocation } from '@docusaurus/router';

import { RenderExample } from '../components/RenderExample';

/**
 * Create a page at `/render` URL that renders the examples from the examples
 * `directory`.
 */
export default function Render(): JSX.Element {
  const location = useLocation();
  return (
    <BrowserOnly>
      {() => {
        const name = new URLSearchParams(location.search).get('example');
        return (
          <RenderExample
            rootStyle={{ padding: 0, borderRadius: 0, minHeight: '100vh' }}
            name={name}
          />
        );
      }}
    </BrowserOnly>
  );
}
