import React from 'react';

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { getDayButton, getTableFooter } from 'react-day-picker/test/selectors';

import Example from '@examples/modifiers-custom';

const user = userEvent.setup();
const bookedDays = [new Date(2021, 5, 8), new Date(2021, 5, 9)];
const bookedStyle = {
  border: '2px solid currentColor'
};
beforeEach(() => {
  render(<Example />);
});

test.each(bookedDays)('%s should have the booked style', (day) => {
  expect(getDayButton(day)).toHaveStyle(bookedStyle);
});

describe('when the booked day is clicked', () => {
  beforeEach(async () => {
    await user.click(getDayButton(bookedDays[1]));
  });
  test('the footer should be updated', () => {
    expect(getTableFooter()).toHaveTextContent('This day is already booked!');
  });
});
