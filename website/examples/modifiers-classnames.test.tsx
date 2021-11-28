import React from 'react';

import { getDayCell } from '@site/src/test/po';
import { freezeBeforeAll } from '@site/src/test/utils';
import { render } from '@testing-library/react';

import Example from './modifiers-classnames';

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

test.each(days)(
  'the day %s should have the `my-booked-class` class',
  (day) => {
    expect(getDayCell(day).firstChild).toHaveClass(
      'my-booked-class'
    );
  }
);
