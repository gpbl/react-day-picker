import React from 'react';

import { axe } from '@site/test/axe';
import { act, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {
  getMonthDropdown,
  getMonthGrid,
  getYearDropdown
} from 'react-day-picker/test/selectors';
import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/dropdown';

const user = userEvent.setup();
const today = new Date(2022, 5, 10);
freezeBeforeAll(today);

let container: HTMLElement;
beforeEach(() => (container = render(<Example />).container));

test('should not have AXE violations', async () => {
  expect(await axe(container)).toHaveNoViolations();
});

test('should display the year dropdown', () => {
  expect(getYearDropdown()).toBeInTheDocument();
});
test('should display the month dropdown', () => {
  expect(getMonthDropdown()).toBeInTheDocument();
});

describe('when choosing a month', () => {
  const monthName = 'January';
  beforeEach(() =>
    act(() => user.selectOptions(getMonthDropdown(), monthName))
  );
  test('should display the month', () => {
    expect(getMonthGrid()).toHaveAccessibleName(`${monthName} 2022`);
  });
});
