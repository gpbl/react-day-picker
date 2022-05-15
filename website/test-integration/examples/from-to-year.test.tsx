import React from 'react';

import { render } from '@testing-library/react';
import { differenceInMonths } from 'date-fns';

import { clickNextMonth } from 'react-day-picker/test/actions';
import { getNextButton, getPrevButton } from 'react-day-picker/test/po';
import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/from-to-year';

const fromDate = new Date(2015, 0);
const toDate = new Date(2018, 11);
const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

beforeEach(() => {
  render(<Example />);
});

test('the previous month button should be disabled', () => {
  expect(getPrevButton()).toHaveAttribute('aria-disabled', 'true');
});

test('the next month button should not be disabled', () => {
  expect(getNextButton()).not.toHaveAttribute('aria-disabled', 'true');
});

describe('when navigating to the last month', () => {
  const nOfMonths = differenceInMonths(toDate, fromDate);
  beforeEach(() => {
    for (let i = 0; i < nOfMonths; i++) {
      clickNextMonth();
    }
  });

  test('the previous month button should not be disabled', () => {
    expect(getPrevButton()).not.toHaveAttribute('aria-disabled', 'true');
  });

  test('the next month button should be disabled', () => {
    expect(getNextButton()).toHaveAttribute('aria-disabled', 'true');
  });
});
