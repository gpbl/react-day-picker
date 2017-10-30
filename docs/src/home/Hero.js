import React from 'react';
import LinkButton from '../ui/LinkButton';
import GithubButton from '../ui/GithubButton';

export default function Hero() {
  return (
    <div css={{ textAlign: 'center', padding: '1em 0' }}>
      <h1 css={{ marginBottom: '0.1em', fontSize: '2rem', fontWeight: 300 }}>
        react-day-picker
      </h1>
      <h2
        css={{
          marginTop: 0,
          fontWeight: 300,
          marginBottom: '.1em',
          fontSize: '.875rem',
          textTransform: 'uppercase',
        }}
      >
        Date picker component for{' '}
        <a href="https://facebook.github.io/react/">React</a>
      </h2>

      <p>Flexible, highly customizable, localizable and with ARIA support.</p>

      <p>
        <LinkButton href="/docs">Read the docs</LinkButton>
        <LinkButton href="/examples">Browse the examples</LinkButton>
      </p>
      <GithubButton />
    </div>
  );
}
