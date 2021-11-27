import React from 'react';

import { getDayButton } from '@site/src/test/po';
import { freezeBeforeAll } from '@site/src/test/utils';
import { render } from '@testing-library/react';
import tk from 'timekeeper';

import Example from './modifiers-disabled';

const days = [
  new Date(2022, 5, 10),
  new Date(2022, 5, 12),
  new Date(2022, 5, 20)
];
const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

let container: HTMLElement;
beforeEach(() => {
  container = render(<Example />).container;
});

test.each(days)('the day %s should be disabled', (day) => {
  expect(getDayButton(day)).toBeDisabled();
});
