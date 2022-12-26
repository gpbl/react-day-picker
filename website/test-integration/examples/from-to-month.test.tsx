import React from 'react';

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { differenceInMonths } from 'date-fns';

import { getNextButton, getPrevButton } from 'react-day-picker/test/po';

import Example from '@examples/from-to-month';

const fromDate = new Date(2015, 5);
const toDate = new Date(2015, 10);
const user = userEvent.setup();

beforeEach(() => {
  render(<Example />);
});

test('the previous month button should be disabled', () => {
  expect(getPrevButton()).toBeDisabled();
});

test('the next month button should not be disabled', () => {
  expect(getNextButton()).not.toBeDisabled();
});

describe('when navigating to the last month', () => {
  const nOfMonths = differenceInMonths(toDate, fromDate);
  beforeEach(async () => {
    for (let i = 0; i < nOfMonths; i++) {
      await user.click(getNextButton());
    }
  });

  test('the previous month button should not be disabled', () => {
    expect(getPrevButton()).not.toBeDisabled();
  });

  test('the next month button should be disabled', () => {
    expect(getNextButton()).toBeDisabled();
  });
});
