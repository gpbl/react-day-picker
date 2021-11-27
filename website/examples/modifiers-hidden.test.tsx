import React from 'react';

import { queryDayButton } from '@site/src/test/po';
import { freezeBeforeAll } from '@site/src/test/utils';
import { render } from '@testing-library/react';

import Example from './modifiers-hidden';

const days = [
  new Date(2022, 5, 10),
  new Date(2022, 5, 20),
  new Date(2022, 5, 11)
];

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

let container: HTMLElement;
beforeEach(() => {
  container = render(<Example />).container;
});

test.each(days)('the day %s should be hidden', (day) => {
  expect(queryDayButton(day)).not.toBeInTheDocument();
});
