import React from 'react';

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { getDayButton } from 'react-day-picker/test/po';
import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/range-shift-key';

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);
const user = userEvent.setup();
beforeEach(() => {
  render(<Example />);
});

describe('when displaying November 2021', () => {
  describe('when clicking on the 11th', () => {
    const day1 = new Date(2021, 10, 11);
    beforeEach(async () => user.click(getDayButton(day1)));
    test('the 11th day should have aria-pressed true', () => {
      expect(getDayButton(day1)).toHaveAttribute('aria-pressed', 'true');
    });
    describe('when clicking on the 13th', () => {
      const day2 = new Date(2021, 10, 13);
      beforeEach(async () => user.click(getDayButton(day2)));

      test('the 11th day should still have aria-pressed true', () => {
        expect(getDayButton(day1)).toHaveAttribute('aria-pressed', 'true');
      });
      test('the 13th day not should not have aria-pressed', () => {
        expect(getDayButton(day2)).not.toHaveAttribute('aria-pressed');
      });
    });
    describe('when pressing the Shift key', () => {
      const day2 = new Date(2021, 10, 13);
      beforeEach(async () => {
        user.keyboard('{Shift>}');
        await user.click(getDayButton(day2));
      });
      test('the 13th day should have aria-pressed true', () => {
        expect(getDayButton(day2)).toHaveAttribute('aria-pressed', 'true');
      });
    });
  });
});
