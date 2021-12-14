import React from 'react';
import {
  clickNextMonth,
  getNextButton,
  getPrevButton
} from 'react-day-picker/test/po';

import Example from '@examples/from-to-month';

import { render } from '@testing-library/react';
import { differenceInMonths } from 'date-fns';

const fromDate = new Date(2015, 5);
const toDate = new Date(2015, 10);

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
  beforeEach(() => {
    for (let i = 0; i < nOfMonths; i++) {
      clickNextMonth();
    }
  });

  test('the previous month button should not be disabled', () => {
    expect(getPrevButton()).not.toBeDisabled();
  });

  test('the next month button should be disabled', () => {
    expect(getNextButton()).toBeDisabled();
  });
});
