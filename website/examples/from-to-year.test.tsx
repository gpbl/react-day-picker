import React from 'react';

import { render } from '@testing-library/react';
import { differenceInMonths } from 'date-fns';

import {
  clickNextMonth,
  getNextButton,
  getPrevButton
} from '../src/test/po';
import { freezeBeforeAll } from '../src/test/utils';
import Example from './from-to-year';

const fromDate = new Date(2015, 0);
const toDate = new Date(2018, 11);
const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

let container: HTMLElement;
beforeEach(() => {
  container = render(<Example />).container;
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
