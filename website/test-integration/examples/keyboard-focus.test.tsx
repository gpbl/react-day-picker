import React from 'react';
import {
  getDayButton,
  getFocusedElement,
  getNextButton,
  getPrevButton,
  pressArrowDown,
  pressEnter,
  pressShiftTab,
  pressTab
} from 'react-day-picker/test/po';
import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/keyboard';

import { render } from '@testing-library/react';
import { addDays, addMonths, startOfMonth } from 'date-fns';

const yesterday = new Date(2022, 5, 9);
const today = new Date(2022, 5, 10);
const tomorrow = new Date(2022, 5, 11);
freezeBeforeAll(today);

function renderDayPicker(props) {
  render(<Example {...props} />);
}

function tabToDayGrid() {
  pressTab();
  pressTab();
  pressTab();
}

describe.each(['ltr', 'rtl'])('when text direction is %s', (dir: string) => {
  describe('pressing tab once', () => {
    beforeEach(() => {
      renderDayPicker({ dir, defaultMonth: today });
      pressTab();
    });
    test('should focus on the previous month button', () => {
      expect(getPrevButton()).toHaveFocus();
    });
    describe('pressing tab again (twice)', () => {
      beforeEach(() => {
        pressTab();
      });
      test('should focus on the next month button', () => {
        expect(getNextButton()).toHaveFocus();
      });
      describe('pressing tab again (three times)', () => {
        beforeEach(() => {
          pressTab();
        });
        test('should have the current day selected', () => {
          expect(getDayButton(today)).toHaveFocus();
        });
        describe('when using the arrow keys', () => {
          beforeEach(() => {
            pressArrowDown();
          });
          test('the last focused day should be remembered and receive the focus', () => {
            const lastFocusedDay = getFocusedElement();
            getNextButton().focus();
            (lastFocusedDay as HTMLButtonElement).onblur;
            expect(lastFocusedDay).toHaveBeenCalled;
            expect(lastFocusedDay).not.toHaveFocus();
            pressTab();
            expect(lastFocusedDay).toHaveFocus();
          });
          describe('when the last focused day is no longer in the day grid', () => {
            beforeEach(() => {
              pressShiftTab(); // Back to next month button
              pressEnter(); // go to the next month
              pressTab(); // back to day grid
            });
            test('the first active day of the month should receive focus', () => {
              const startOfNextMonth = startOfMonth(addMonths(today, 1));
              expect(getDayButton(startOfNextMonth)).toHaveFocus();
            });
          });
        });
      });
    });
  });

  describe('when there is a selected day', () => {
    beforeEach(() => {
      renderDayPicker({ dir, defaultMonth: today, selected: tomorrow });
      tabToDayGrid();
    });
    test('the selected day should have focus', () => {
      expect(getDayButton(tomorrow)).toHaveFocus();
    });
  });

  describe('when there are multiple selected days', () => {
    beforeEach(() => {
      renderDayPicker({
        dir,
        defaultMonth: today,
        mode: 'multiple',
        selected: [yesterday, tomorrow]
      });
      tabToDayGrid();
    });
    test('the first selected day should have focus', () => {
      expect(getDayButton(yesterday)).toHaveFocus();
    });
  });

  describe('when there are multiple months', () => {
    beforeEach(() => {
      renderDayPicker({
        dir,
        defaultMonth: addMonths(today, -2),
        numberOfMonths: 3
      });
      tabToDayGrid();
    });
    test('it should be possible for a day in the last month to be the focus target', () => {
      expect(getDayButton(today)).toHaveFocus();
    });
  });

  describe('when there are disabled or hidden days and no selected days', () => {
    const firstDay = startOfMonth(today);
    const secondDay = addDays(firstDay, 1);
    const thirdDay = addDays(firstDay, 2);
    beforeEach(() => {
      renderDayPicker({
        dir,
        disabled: [firstDay, today],
        hidden: secondDay
      });
      tabToDayGrid();
    });
    test('the first non-disabled day should receive the focus', () => {
      expect(getDayButton(thirdDay)).toHaveFocus();
    });
  });
});
