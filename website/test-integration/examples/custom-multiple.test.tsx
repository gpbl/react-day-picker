import React from 'react';

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { getDayButton, getTableFooter } from 'react-day-picker/test/selectors';
import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/custom-multiple';

const user = userEvent.setup();
const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

let container: HTMLElement;
beforeEach(() => {
  container = render(<Example />).container;
});

test('should not have AXE violations', async () => {
  expect(await axe(container)).toHaveNoViolations();
});

describe('when a day is clicked', () => {
  const day1 = new Date(2021, 10, 1);
  beforeEach(() => user.click(getDayButton(day1)));
  test('should appear as selected', () => {
    expect(getDayButton(day1)).toHaveAttribute('aria-selected', 'true');
  });
  test('should update the footer', () => {
    expect(getTableFooter()).toHaveTextContent('You selected 1 days.');
  });
  describe('when a second day is clicked', () => {
    const day2 = new Date(2021, 10, 2);
    beforeEach(() => user.click(getDayButton(day2)));
    test('the first day should appear as selected', () => {
      expect(getDayButton(day1)).toHaveAttribute('aria-selected', 'true');
    });
    test('the second day should appear as selected', () => {
      expect(getDayButton(day2)).toHaveAttribute('aria-selected', 'true');
    });
    test('should update the footer', () => {
      expect(getTableFooter()).toHaveTextContent('You selected 2 days.');
    });
  });
});
