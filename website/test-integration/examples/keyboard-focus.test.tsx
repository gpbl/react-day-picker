import React from 'react';

import { render } from '@testing-library/react';
import { addDays, addMonths, startOfMonth } from 'date-fns';
import { DayPickerProps } from 'react-day-picker';

import {
  focusDaysGrid,
  pressArrowDown,
  pressArrowLeft,
  pressArrowRight,
  pressArrowUp,
  pressEnter,
  pressShiftTab,
  pressTab
} from 'react-day-picker/test/actions';
import {
  getDayButton,
  getFocusedElement,
  getNextButton,
  getPrevButton
} from 'react-day-picker/test/po';
import { freezeBeforeAll } from 'react-day-picker/test/utils';

import Example from '@examples/keyboard';

const yesterday = new Date(2022, 5, 9);
const today = new Date(2022, 5, 10);
const tomorrow = new Date(2022, 5, 11);
freezeBeforeAll(today);

function setup(props: DayPickerProps) {
  render(<Example {...props} />);
}

describe.each(['ltr', 'rtl'])('when text direction is %s', (dir: string) => {
  describe('when pressing Tab', () => {
    beforeEach(() => {
      setup({ dir });
      pressTab();
    });
    test('should focus on the Previous Month button', () => {
      expect(getPrevButton()).toHaveFocus();
    });
    describe('when pressing Tab a second time', () => {
      beforeEach(() => pressTab());
      test('should focus on the Next Month button', () => {
        expect(getNextButton()).toHaveFocus();
      });
      describe('when pressing Tab a third time', () => {
        beforeEach(() => pressTab());
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
            beforeEach(() => getNextButton().focus());
            test(`the element focused with ${key} should have lost the focus`, () => {
              expect(focusedElement).not.toHaveFocus();
            });
            describe('when pressing Tab', () => {
              beforeEach(() => pressTab());
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
    const selected = tomorrow;
    beforeEach(() => {
      setup({ dir, selected });
    });
    describe('when focusing the days grid', () => {
      beforeEach(() => focusDaysGrid());
      test('the selected day should have focus', () => {
        expect(getDayButton(tomorrow)).toHaveFocus();
      });
    });
  });

  describe('when multiple days are selected', () => {
    const mode = 'multiple';
    const selected = [yesterday, tomorrow];
    beforeEach(() => {
      setup({ dir, selected, mode });
    });
    describe('when focusing the days grid', () => {
      beforeEach(() => focusDaysGrid());

      test('the first selected day should have focus', () => {
        expect(getDayButton(yesterday)).toHaveFocus();
      });
    });
  });

  describe('when showing multiple months', () => {
    const numberOfMonths = 3;
    describe('when today falls into the last month', () => {
      const defaultMonth = addMonths(today, -numberOfMonths + 1);
      beforeEach(() => {
        setup({ dir, defaultMonth, numberOfMonths });
      });
      describe('when focusing the days grid', () => {
        beforeEach(() => focusDaysGrid());
        test('the today button should have focus', () => {
          expect(getDayButton(today)).toHaveFocus();
        });
      });
    });
  });

  describe('with disabled and hidden days, when no days are selected', () => {
    const firstDayOfMonth = startOfMonth(today);
    const secondDayOfMonth = addDays(firstDayOfMonth, 1);
    const notDisabled = addDays(firstDayOfMonth, 2);
    const disabled = [firstDayOfMonth, today];
    const hidden = secondDayOfMonth;
    const selected = undefined;
    beforeEach(() => {
      setup({ dir, disabled, hidden, selected });
    });
    describe('when focusing the days grid', () => {
      beforeEach(() => focusDaysGrid());
      test('the first not disabled day should have focus', () => {
        expect(getDayButton(notDisabled)).toHaveFocus();
      });
    });
  });
});
