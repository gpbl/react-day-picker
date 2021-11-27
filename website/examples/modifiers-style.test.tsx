import React from 'react';

import { render, screen } from '@testing-library/react';
import tk from 'timekeeper';

import Example from './modifiers-style';
import { getDayCell } from '@site/src/test';

const today = new Date(2021, 5, 1);
const days = [new Date(2021, 5, 23), new Date(2021, 5, 24)];
const style = {
  fontWeight: 900,
  color: 'lightgreen'
};

beforeAll(() => tk.freeze(today));
afterAll(() => tk.reset());

beforeEach(() => {
  render(<Example />);
});

test.each(days)('The day %s should have the proper inline style', (day) => {
  expect(getDayCell(day).firstChild).toHaveStyle(style);
});
