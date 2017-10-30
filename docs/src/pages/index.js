import React from 'react';
import Page from '../ui/Page';
import Wrap from '../ui/Wrap';
import Hero from '../home/Hero';
import Features from '../home/Features';
import GettingStarted from '../home/GettingStarted';

export default function HomePage() {
  return (
    <Page>
      <Wrap>
        <Hero />
      </Wrap>
      <hr />
      <Wrap>
        <Features />
      </Wrap>
      <hr />
      <GettingStarted />
    </Page>
  );
}
