import React from 'react';

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { getDayButton } from 'react-day-picker/test/selectors';
import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/range-shift-key';

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);
const user = userEvent.setup();

let container: HTMLElement;
beforeEach(() => (container = render(<Example />).container));

test('should not have AXE violations', async () => {
  expect(await axe(container)).toHaveNoViolations();
});

describe('when displaying November 2021', () => {
  describe('when clicking on the 11th', () => {
    const day1 = new Date(2021, 10, 11);
    beforeEach(async () => user.click(getDayButton(day1)));
    test('the 11th day should have aria-selected true', () => {
      expect(getDayButton(day1)).toHaveAttribute('aria-selected', 'true');
    });
    test('should not have AXE violations', async () => {
      expect(await axe(container)).toHaveNoViolations();
    });
    describe('when clicking on the 13th', () => {
      const day2 = new Date(2021, 10, 13);
      beforeEach(async () => user.click(getDayButton(day2)));

      test('the 11th day should still have aria-selected true', () => {
        expect(getDayButton(day1)).toHaveAttribute('aria-selected', 'true');
      });
      test('the 13th day not should not have aria-selected', () => {
        expect(getDayButton(day2)).not.toHaveAttribute('aria-selected');
      });
      test('should not have AXE violations', async () => {
        expect(await axe(container)).toHaveNoViolations();
      });
    });
    describe('when pressing the Shift key', () => {
      const day2 = new Date(2021, 10, 13);
      beforeEach(async () => {
        user.keyboard('{Shift>}');
        await user.click(getDayButton(day2));
      });
      test('the 13th day should have aria-selected true', () => {
        expect(getDayButton(day2)).toHaveAttribute('aria-selected', 'true');
      });
      test('should not have AXE violations', async () => {
        expect(await axe(container)).toHaveNoViolations();
      });
    });
  });
});
