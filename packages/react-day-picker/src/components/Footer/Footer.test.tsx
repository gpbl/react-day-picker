import React from 'react';

import { render, screen } from '@testing-library/react';

import { ContextProvider } from 'contexts';

import { Footer } from './Footer';

test('should not render anything as default', () => {
  const { container } = render(
    <ContextProvider>
      <Footer />
    </ContextProvider>
  );
  expect(container).toBeEmptyDOMElement();
});

test('should render a table footer when using the `footer` props', () => {
  render(
    <ContextProvider footer="footer_foo">
      <Footer />
    </ContextProvider>
  );
  const label = screen.getByText(/footer_foo/i);
  expect(label).toBeInTheDocument();
});
