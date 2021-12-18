import React from 'react';
import {
  getDayButton,
  getFocusedElement,
  getNextButton,
  getPrevButton,
  pressArrowDown,
  pressArrowLeft,
  pressArrowRight,
  pressArrowUp,
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
  // A selection mode is required to test this feature
  render(<Example mode="single" {...props} />);
}

function tabToDayGrid() {
  pressTab();
  pressTab();
  pressTab();
}

describe.each(['ltr', 'rtl'])('when text direction is %s', (dir: string) => {
  describe('when pressing Tab', () => {
    beforeEach(() => {
      renderDayPicker({ dir, defaultMonth: today });
      pressTab();
    });
    test('should focus on the Previous Month button', () => {
      expect(getPrevButton()).toHaveFocus();
    });
    describe('when pressing Tab a second time', () => {
      beforeEach(() => {
        pressTab();
      });
      test('should focus on the Next Month button', () => {
        expect(getNextButton()).toHaveFocus();
      });
      describe('when pressing Tab a third time', () => {
        beforeEach(() => {
          pressTab();
        });
        test('should have the current day selected', () => {
          expect(getDayButton(today)).toHaveFocus();
        });

        const tests: [key: string, handler: () => void][] = [
          ['ArrowDown', pressArrowDown],
          ['ArrowUp', pressArrowUp],
          ['ArrowLeft', pressArrowLeft],
          ['ArrowRight', pressArrowRight]
        ];
        describe.each(tests)(`when pressing %s`, (key, handler) => {
          let focusedElement: Element;
          beforeEach(() => {
            handler();
            focusedElement = getFocusedElement();
          });
          describe('when the next button is focused', () => {
            beforeEach(() => {
              getNextButton().focus();
            });
            test(`the element focused with ${key} should have lost the focus`, () => {
              expect(focusedElement).not.toHaveFocus();
            });
            describe('when Tab is pressed', () => {
              beforeEach(() => {
                pressTab();
              });
              test(`the element focused with ${key} should have focus again`, () => {
                expect(focusedElement).toHaveFocus();
              });
            });
          });
          describe('when navigating to the next month', () => {
            beforeEach(() => {
              pressShiftTab(); // Back to next month button
              pressEnter(); // go to the next month
              pressTab(); // back to day grid
            });
            test('the first active day of the next month should have focus', () => {
              const startOfNextMonth = startOfMonth(addMonths(today, 1));
              expect(getDayButton(startOfNextMonth)).toHaveFocus();
            });
          });
        });
      });
    });
  });

  describe('when a day is selected', () => {
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
