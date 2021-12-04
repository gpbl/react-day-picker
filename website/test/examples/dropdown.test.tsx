import React from 'react';

import {
  getMonthCaption,
  getMonthDropdown,
  getYearDropdown,
  selectMonth
} from '@test/po';
import { freezeBeforeAll } from '@test/utils';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Example from './dropdown';

const today = new Date(2022, 5, 10);
freezeBeforeAll(today);

let container: HTMLElement;
beforeEach(() => {
  container = render(<Example />).container;
});

test('should display the year dropdown', () => {
  expect(getYearDropdown()).toBeInTheDocument();
});
test('should display the month dropdown', () => {
  expect(getMonthDropdown()).toBeInTheDocument();
});

describe('when choosing a month', () => {
  const monthName = 'January';
  beforeEach(() => selectMonth(monthName));
  test('the month should be displayed', () => {
    expect(getMonthCaption(container)).toHaveTextContent(
      monthName
    );
  });
});
