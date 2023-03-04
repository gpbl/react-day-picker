import React from 'react';

import { axe } from '@site/test/axe';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { differenceInMonths } from 'date-fns';

import { getNextButton, getPrevButton } from 'react-day-picker/test/selectors';
import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/from-to-year';

const user = userEvent.setup();
const fromDate = new Date(2015, 0);
const toDate = new Date(2018, 11);
const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

let container: HTMLElement;
beforeEach(() => (container = render(<Example />).container));

test('should not have AXE violations', async () => {
  expect(await axe(container)).toHaveNoViolations();
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
  test('should not have AXE violations', async () => {
    expect(await axe(container)).toHaveNoViolations();
  });
  test('the previous month button should not be disabled', () => {
    expect(getPrevButton()).not.toBeDisabled();
  });
  test('the next month button should be disabled', () => {
    expect(getNextButton()).toBeDisabled();
  });
});
