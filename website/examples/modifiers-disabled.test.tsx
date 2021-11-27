import React from 'react';

import { render } from '@testing-library/react';
import tk from 'timekeeper';

import Example from './modifiers-disabled';
import { getDayButton } from '@site/src/test';

const today = new Date(2022, 5, 10);
const days = [
  new Date(2022, 5, 10),
  new Date(2022, 5, 12),
  new Date(2022, 5, 20)
];

beforeAll(() => tk.freeze(today));
afterAll(() => tk.reset());

beforeEach(() => {
  render(<Example />);
});

test.each(days)('the day %s should be disabled', (day) => {
  expect(getDayButton(day)).toBeDisabled();
});
