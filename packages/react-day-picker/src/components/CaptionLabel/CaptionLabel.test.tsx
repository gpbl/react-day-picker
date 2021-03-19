import * as React from 'react';

import { render, screen } from '@testing-library/react';
import tk from 'timekeeper';

import { ContextProvider as DayPicker } from 'contexts';

import { CaptionLabel } from './CaptionLabel';

const FrozenDate = new Date(1979, 8);

beforeEach(() => tk.freeze(FrozenDate));
afterEach(() => tk.reset());

test('should render the formatted display month', () => {
  render(
    <DayPicker>
      <CaptionLabel displayMonth={FrozenDate} />
    </DayPicker>
  );
  const label = screen.getByText(/september 1979/i);
  expect(label).toBeInTheDocument();
});

test('should apply the `caption_label` class name', () => {
  render(
    <DayPicker classNames={{ caption_label: 'foo' }}>
      <CaptionLabel displayMonth={FrozenDate} />
    </DayPicker>
  );
  const label = screen.getByText(/september 1979/i);
  expect(label).toBeInTheDocument();
});
