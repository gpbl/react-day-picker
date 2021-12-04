import React from 'react';

import { clickDay, getDayButton, getTableFooter } from '@test/po';
import { render } from '@testing-library/react';

import Example from './modifiers-custom';

const bookedDays = [new Date(2021, 5, 8), new Date(2021, 5, 9)];
const bookedStyle = {
  border: '2px solid currentColor'
};
let container: HTMLElement;
beforeEach(() => {
  container = render(<Example />).container;
});

test.each(bookedDays)(
  '%s should have the booked style',
  (day) => {
    expect(getDayButton(day)).toHaveStyle(bookedStyle);
  }
);

describe('when the booked day is clicked', () => {
  beforeEach(() => {
    clickDay(bookedDays[1]);
  });
  test('the footer should be updated', () => {
    expect(getTableFooter()).toHaveTextContent(
      'This day is already booked!'
    );
  });
});
