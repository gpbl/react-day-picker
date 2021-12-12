import React from 'react';
import { queryDayButton } from 'react-day-picker/test/po';
import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/modifiers-hidden';

import { render } from '@testing-library/react';

const days = [
  new Date(2022, 5, 10),
  new Date(2022, 5, 20),
  new Date(2022, 5, 11)
];

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

beforeEach(() => {
  render(<Example />);
});

test.each(days)('the day %s should be hidden', (day) => {
  expect(queryDayButton(day)).not.toBeInTheDocument();
});
