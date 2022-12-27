import React from 'react';

import { render } from '@testing-library/react';

import { getDayCell } from 'react-day-picker/test/selectors';
import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/modifiers-classnames';

const days = [
  new Date(2021, 5, 8),
  new Date(2021, 5, 9),
  new Date(2021, 5, 11)
];

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

beforeEach(() => {
  render(<Example />);
});

test.each(days)('the day %s should have the `my-booked-class` class', (day) => {
  expect(getDayCell(day).firstChild).toHaveClass('my-booked-class');
});
