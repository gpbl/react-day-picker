import { screen } from '@testing-library/react';
import * as React from 'react';

import tk from 'timekeeper';

import { customRender } from 'test';
import { CaptionLabel } from './CaptionLabel';

const FrozenDate = new Date(1979, 8);

beforeEach(() => tk.freeze(FrozenDate));
afterEach(() => tk.reset());

test('should render the formatted display month', () => {
  customRender(<CaptionLabel displayMonth={FrozenDate} />);
  const label = screen.getByText(/september 1979/i);
  expect(label).toBeInTheDocument();
});

test('should apply the `caption_label` class name', () => {
  customRender(<CaptionLabel displayMonth={FrozenDate} />, {
    classNames: { caption_label: 'foo' }
  });
  const label = screen.getByText(/september 1979/i);
  expect(label).toHaveClass('foo');
});

test('should apply the `caption_label` style', () => {
  customRender(<CaptionLabel displayMonth={FrozenDate} />, {
    styles: { caption_label: { color: 'red' } }
  });
  const label = screen.getByText(/september 1979/i);
  expect(label).toHaveStyle({ color: 'red' });
});
