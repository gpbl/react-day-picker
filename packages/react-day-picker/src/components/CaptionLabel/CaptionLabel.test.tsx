import * as React from 'react';

import { render, screen } from '@testing-library/react';
import tk from 'timekeeper';

import { ContextProvider } from 'contexts';

import { CaptionLabel } from './CaptionLabel';

const FrozenDate = new Date(1979, 8);

beforeEach(() => tk.freeze(FrozenDate));
afterEach(() => tk.reset());

test('should render the formatted display month', () => {
  render(
    <ContextProvider>
      <CaptionLabel displayMonth={FrozenDate} />
    </ContextProvider>
  );
  const label = screen.getByText(/september 1979/i);
  expect(label).toBeInTheDocument();
});

test('should apply the `caption_label` class name', () => {
  render(
    <ContextProvider classNames={{ caption_label: 'foo' }}>
      <CaptionLabel displayMonth={FrozenDate} />
    </ContextProvider>
  );
  const label = screen.getByText(/september 1979/i);
  expect(label).toHaveClass('foo');
});

test('should apply the `caption_label` style', () => {
  const caption_label = { color: 'red' };
  render(
    <ContextProvider styles={{ caption_label }}>
      <CaptionLabel displayMonth={FrozenDate} />
    </ContextProvider>
  );
  const label = screen.getByText(/september 1979/i);
  expect(label).toHaveStyle(caption_label);
});
