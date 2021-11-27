import React from 'react';

import { render, screen } from '@testing-library/react';
import tk from 'timekeeper';

import Example from './modifiers-classnames';
import { getDayCell } from '@site/src/test';

let container: HTMLElement;

const today = new Date(2021, 5, 1);

const bookedDays = [
  new Date(2021, 5, 8),
  new Date(2021, 5, 9),
  new Date(2021, 5, 11)
];

beforeAll(() => tk.freeze(today));
afterAll(() => tk.reset());

beforeEach(() => {
  const renderResult = render(<Example />);
  container = renderResult.container;
});

test.each(bookedDays)(
  'The booked days %s should have the `my-booked-class` class',
  (bookedDay) => {
    expect(getDayCell(bookedDay).firstChild).toHaveClass('my-booked-class');
  }
);
