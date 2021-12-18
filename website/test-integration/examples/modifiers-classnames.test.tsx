import React from 'react';
import { getDayCell } from 'react-day-picker/test/po';
import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/modifiers-classnames';

import { render } from '@testing-library/react';

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
