/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';

import BrowserOnly from '@docusaurus/BrowserOnly';
import { useLocation } from '@docusaurus/router';
import Layout from '@theme/Layout/Provider';

import { RenderExample } from '../components/RenderExample';

/**
 * Create a page at `/render` URL that renders the examples from the examples
 * `directory`.
 */
export default function Render(): JSX.Element {
  const location = useLocation();
  return (
    <Layout>
      <BrowserOnly>
        {() => {
          const name = new URLSearchParams(location.search).get('example');
          return (
            <RenderExample
              rootStyle={{
                margin: '0 auto 0 auto',
                borderRadius: 0,
                display: 'inline-block',
                padding: '1em'
              }}
              name={name}
            />
          );
        }}
      </BrowserOnly>
    </Layout>
  );
}
