import React from 'react';

import { render, screen } from '@testing-library/react';
import tk from 'timekeeper';

import Example from './modifiers-classnames';
import { getDayCell } from '@site/src/test';

const today = new Date(2021, 5, 1);

const days = [
  new Date(2021, 5, 8),
  new Date(2021, 5, 9),
  new Date(2021, 5, 11)
];

beforeAll(() => tk.freeze(today));
afterAll(() => tk.reset());

beforeEach(() => {
  render(<Example />);
});

test.each(days)('the day %s should have the `my-booked-class` class', (day) => {
  expect(getDayCell(day).firstChild).toHaveClass('my-booked-class');
});
