import React from 'react';

import { render } from '@testing-library/react';

import { clickDay } from 'react-day-picker/test/actions';
import { getDayButton } from 'react-day-picker/test/po';
import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/range-shift-key';

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

beforeEach(() => {
  render(<Example />);
});

describe('when displaying November 2021', () => {
  describe('when clicking on the 11th', () => {
    const day1 = new Date(2021, 10, 11);
    beforeEach(() => clickDay(day1));
    test('the 11th day should have aria-selected true', () => {
      expect(getDayButton(day1)).toHaveAttribute('aria-selected', 'true');
    });
    describe('when clicking on the 13th', () => {
      const day2 = new Date(2021, 10, 13);
      beforeEach(() => clickDay(day2));

      test('the 11th day should still have aria-selected true', () => {
        expect(getDayButton(day1)).toHaveAttribute('aria-selected', 'true');
      });
      test('the 13th day not should not have aria-selected', () => {
        expect(getDayButton(day2)).toHaveAttribute('aria-selected', 'false');
      });
    });
    describe('when pressing the Shift key', () => {
      const day2 = new Date(2021, 10, 13);
      beforeEach(() => clickDay(day2, { shiftKey: true }));
      test('the 13th day should have aria-selected true', () => {
        expect(getDayButton(day2)).toHaveAttribute('aria-selected', 'true');
      });
    });
  });
});
