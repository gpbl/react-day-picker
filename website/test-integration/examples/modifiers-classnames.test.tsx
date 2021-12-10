import React from 'react';

import Example from '@examples/modifiers-classnames';
import { getDayCell } from 'react-day-picker/test/po';
import { freezeBeforeAll } from 'react-day-picker/test/utils';
import { render } from '@testing-library/react';

const days = [
  new Date(2021, 5, 8),
  new Date(2021, 5, 9),
  new Date(2021, 5, 11)
];

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

let container: HTMLElement;
beforeEach(() => {
  container = render(<Example />).container;
});

test.each(days)('the day %s should have the `my-booked-class` class', (day) => {
  expect(getDayCell(day).firstChild).toHaveClass('my-booked-class');
});
