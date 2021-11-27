import React from 'react';

import { render } from '@testing-library/react';
import tk from 'timekeeper';

import Example from './modifiers-hidden';
import { queryDayButton } from '@site/src/test';

const today = new Date(2022, 5, 10);
const days = [
  new Date(2022, 5, 10),
  new Date(2022, 5, 20),
  new Date(2022, 5, 11)
];

beforeAll(() => tk.freeze(today));
afterAll(() => tk.reset());

beforeEach(() => {
  render(<Example />);
});

test.each(days)('the day %s should be hidden', (day) => {
  expect(queryDayButton(day)).not.toBeInTheDocument();
});
