/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import { useLocation } from 'react-router-dom';

import BrowserOnly from '@docusaurus/BrowserOnly';

/**
 * Create a page at `/render` URL that renders the examples from the examples
 * `directory`.
 * */
export default function Render(): JSX.Element {
  const location = useLocation();
  return (
    <BrowserOnly>
      {() => {
        const fileName = new URLSearchParams(location.search).get('example');
        try {
          require(`../../examples/${fileName}`).default;
        } catch (e) {
          // eslint-disable-next-line no-console
          console.error('Error requiring %s', `../../examples/${fileName}`, e);
          return <pre>{e.message}</pre>;
        }
        const Component = require(`../../examples/${fileName}`).default;
        return (
          <main>
            <Component />
          </main>
        );
      }}
    </BrowserOnly>
  );
}
