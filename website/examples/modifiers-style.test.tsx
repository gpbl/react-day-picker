import React from 'react';

import { render } from '@testing-library/react';

import { getDayCell } from '../src/test/po';
import { freezeBeforeAll } from '../src/test/utils';
import Example from './modifiers-style';

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

let container: HTMLElement;
beforeEach(() => {
  container = render(<Example />).container;
});

const days = [new Date(2021, 5, 23), new Date(2021, 5, 24)];
const style = {
  fontWeight: 900,
  color: 'lightgreen'
};
test.each(days)(
  'The day %s should have the proper inline style',
  (day) => {
    expect(getDayCell(day).firstChild).toHaveStyle(style);
  }
);
