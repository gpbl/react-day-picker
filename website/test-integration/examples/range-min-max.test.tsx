import React from 'react';

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { setDate } from 'date-fns';

import { getDayButton } from 'react-day-picker/test/po';
import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/range-min-max';

const today = new Date(2022, 8, 25);
const user = userEvent.setup();
freezeBeforeAll(today);
beforeEach(() => {
  render(<Example />);
});

describe('when the first day is clicked', () => {
  const fromDay = setDate(today, 14);
  beforeEach(async () => user.click(getDayButton(fromDay)));
  test('the clicked day should be selected', () => {
    expect(getDayButton(fromDay)).toHaveAttribute('aria-pressed', 'true');
  });
  test('the days below the min value should be disabled', () => {
    expect(getDayButton(setDate(today, 13))).toBeDisabled();
    expect(getDayButton(setDate(today, 14))).toBeDisabled();
    expect(getDayButton(setDate(today, 15))).toBeDisabled();
  });
  test('the days between max and min should be enabled', () => {
    expect(getDayButton(setDate(today, 9))).not.toBeDisabled();
    expect(getDayButton(setDate(today, 10))).not.toBeDisabled();
    expect(getDayButton(setDate(today, 11))).not.toBeDisabled();
    expect(getDayButton(setDate(today, 12))).not.toBeDisabled();
    expect(getDayButton(setDate(today, 16))).not.toBeDisabled();
    expect(getDayButton(setDate(today, 17))).not.toBeDisabled();
    expect(getDayButton(setDate(today, 18))).not.toBeDisabled();
    expect(getDayButton(setDate(today, 19))).not.toBeDisabled();
  });
  test('the days above the max value should be disabled', () => {
    expect(getDayButton(setDate(today, 7))).toBeDisabled();
    expect(getDayButton(setDate(today, 8))).toBeDisabled();
    expect(getDayButton(setDate(today, 20))).toBeDisabled();
    expect(getDayButton(setDate(today, 21))).toBeDisabled();
  });
});
