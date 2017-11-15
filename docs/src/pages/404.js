import React from 'react';
import Page from '../ui/Page';
import Wrap from '../ui/Wrap';

export default function HomePage() {
  return (
    <Page>
      <Wrap>
        <h1 style={{ textAlign: 'center', marginTop: '5em' }}>
          <span role="img" aria-label="Dino">
            🦖
          </span>{' '}
          404 Page not found
        </h1>
        <p style={{ textAlign: 'center' }}>
          <a href="/">Go to the home page</a>
        </p>
      </Wrap>
    </Page>
  );
}
