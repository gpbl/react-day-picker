import React from 'react';
import {
  clickNextMonth,
  getNextButton,
  getPrevButton
} from 'react-day-picker/test/po';
import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/from-to-year';

import { render } from '@testing-library/react';
import { differenceInMonths } from 'date-fns';

const fromDate = new Date(2015, 0);
const toDate = new Date(2018, 11);
const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

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
