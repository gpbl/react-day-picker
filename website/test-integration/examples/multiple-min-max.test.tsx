import React from 'react';

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { addDays } from 'date-fns';
import { axe } from 'jest-axe';

import { getDayButton, getTableFooter } from 'react-day-picker/test/selectors';
import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/multiple-min-max';

const user = userEvent.setup();
const today = new Date(2021, 10, 10);
freezeBeforeAll(today);

const days = [
  today,
  addDays(today, 1),
  addDays(today, 2),
  addDays(today, 3),
  addDays(today, 4)
];

let container: HTMLElement;
beforeEach(() => (container = render(<Example />).container));

test('should not have AXE violations', async () => {
  expect(await axe(container)).toHaveNoViolations();
});

describe('when a day is clicked', () => {
  beforeEach(async () => user.click(getDayButton(days[0])));
  test('should appear as selected', () => {
    expect(getDayButton(days[0])).toHaveAttribute('aria-selected', 'true');
  });
  test('should update the footer', () => {
    expect(getTableFooter()).toHaveTextContent('You selected 1 day(s).');
  });
  test('should not have AXE violations', async () => {
    expect(await axe(container)).toHaveNoViolations();
  });
  describe('when a second day is clicked', () => {
    beforeEach(async () => user.click(getDayButton(days[1])));
    test('the first day should appear as selected', () => {
      expect(getDayButton(days[0])).toHaveAttribute('aria-selected', 'true');
    });
    test('the second day should appear as selected', () => {
      expect(getDayButton(days[1])).toHaveAttribute('aria-selected', 'true');
    });
    test('should update the footer', () => {
      expect(getTableFooter()).toHaveTextContent('You selected 2 day(s).');
    });
    test('should not have AXE violations', async () => {
      expect(await axe(container)).toHaveNoViolations();
    });
    describe('when clicked again', () => {
      beforeEach(async () => user.click(getDayButton(days[1])));
      test('the first day should still appear as selected', () => {
        expect(getDayButton(days[0])).toHaveAttribute('aria-selected', 'true');
      });
      test('the second day should still appear as selected', () => {
        expect(getDayButton(days[1])).toHaveAttribute('aria-selected', 'true');
      });
      test('should update the footer', () => {
        expect(getTableFooter()).toHaveTextContent('You selected 2 day(s).');
      });
      test('should not have AXE violations', async () => {
        expect(await axe(container)).toHaveNoViolations();
      });
    });
  });
});

describe('when the first 5 days are clicked', () => {
  beforeEach(async () => {
    const promises = [];
    days.forEach((day) => promises.push(user.click(getDayButton(day))));
    await Promise.all(promises);
  });
  test.each(days)('the %s day should appear as selected', (day) => {
    expect(getDayButton(day)).toHaveAttribute('aria-selected', 'true');
  });
  describe('when a sixth day is clicked', () => {
    const day6 = addDays(today, 5);
    test('it should not appear as selected', () => {
      expect(getDayButton(day6)).not.toHaveAttribute('aria-selected');
    });
  });
});
