import React from 'react';

import { render } from '@testing-library/react';

import { getDayButton } from 'react-day-picker/test/selectors';
import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/modifiers-disabled';

const days = [
  new Date(2022, 5, 10),
  new Date(2022, 5, 12),
  new Date(2022, 5, 20)
];
const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

beforeEach(() => {
  render(<Example />);
});

test.each(days)('the day %s should be disabled', (day) => {
  expect(getDayButton(day)).toBeDisabled();
});
