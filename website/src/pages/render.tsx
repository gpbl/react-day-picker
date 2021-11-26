/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import { useLocation } from '@docusaurus/router';
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
        const params = new URLSearchParams(location.search);
        const component = params.get('file');
        try {
          require(`../../examples/${component}`).default;
        } catch (e) {
          console.error('Error requiring %s', `../../examples/${component}`, e);
          return <pre>{e.message}</pre>;
        }
        const Component = require(`../../examples/${component}`).default;

        return (
          <div className="Render">
            <Component />
          </div>
        );
      }}
    </BrowserOnly>
  );
}
