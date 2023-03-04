import React from 'react';

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import {
  getMonthDropdown,
  getMonthGrid,
  getNextButton,
  getPrevButton,
  getYearDropdown
} from 'react-day-picker/test/selectors';
import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/dropdown-buttons';

const user = userEvent.setup();
const today = new Date(2022, 5, 10);
freezeBeforeAll(today);

let container: HTMLElement;
beforeEach(() => {
  container = render(<Example />).container;
});

test('should not have AXE violations', async () => {
  expect(await axe(container)).toHaveNoViolations();
});

test('should display the year dropdown', () => {
  expect(getYearDropdown()).toBeInTheDocument();
});
test('should display the month dropdown', () => {
  expect(getMonthDropdown()).toBeInTheDocument();
});
test('should render the next month button', () => {
  expect(getNextButton()).toBeInTheDocument();
});
test('should render the previous month button', () => {
  expect(getPrevButton()).toBeInTheDocument();
});

describe('when choosing a month', () => {
  const monthName = 'January';
  beforeEach(() => user.selectOptions(getMonthDropdown(), monthName));
  test('should not have AXE violations', async () => {
    expect(await axe(container)).toHaveNoViolations();
  });
  test('should display the month', () => {
    expect(getMonthGrid()).toHaveAccessibleName(`${monthName} 2022`);
  });
});
