import React from 'react';

import { screen } from '@testing-library/react';

import { customRender } from 'test';

import { Footer } from './Footer';

test('should not render anything as default', () => {
  const { container } = customRender(<Footer />);
  expect(container).toBeEmptyDOMElement();
});

test('should render a table footer when using the `footer` props', () => {
  customRender(<Footer />, { footer: 'footer_foo' });
  const label = screen.getByText(/footer_foo/i);
  expect(label).toBeInTheDocument();
});
