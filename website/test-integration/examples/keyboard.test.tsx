import React from 'react';

import Example from '@examples/keyboard';
import {
  clickNextMonth,
  clickPrevMonth,
  focusDay,
  getDayButton,
  getFocusedElement,
  getMonthCaption,
  pressArrowDown,
  pressArrowLeft,
  pressArrowRight,
  pressArrowUp,
  pressEnd,
  pressHome,
  pressPageDown,
  pressPageUp,
  pressShiftPageDown,
  pressShiftPageUp
} from 'react-day-picker/test/po';
import { freezeBeforeAll } from 'react-day-picker/test/utils';
import { render } from '@testing-library/react';
import {
  addDays,
  addMonths,
  addWeeks,
  addYears,
  endOfWeek,
  lastDayOfMonth,
  setDate,
  startOfWeek
} from 'date-fns';

const today = new Date(2022, 5, 10);
freezeBeforeAll(today);

let container: HTMLElement;
function setup(dir?: string) {
  container = render(<Example dir={dir} />).container;
}

describe.each(['ltr', 'rtl'])('when text direction is %s', (dir: string) => {
  beforeEach(() => {
    setup(dir);
  });

  describe('when clicking the previous month button', () => {
    beforeEach(() => clickPrevMonth());
    test('should display the previous month', () => {
      expect(getMonthCaption(container)).toHaveTextContent('May 2022');
    });
  });
  describe('when clicking the next month button', () => {
    beforeEach(() => clickNextMonth());

    test('should display the next month', () => {
      expect(getMonthCaption(container)).toHaveTextContent('July 2022');
    });
  });
  describe('when the first day is focused', () => {
    const day = setDate(today, 1);
    const nextDay = addDays(day, 1);
    const prevDay = addDays(day, -1);
    const nextMonth = addMonths(day, 1);
    const prevMonth = addMonths(day, -1);
    const nextYear = addYears(day, 1);
    const prevYear = addYears(day, -1);
    const prevWeekDay = addWeeks(day, -1);
    const nextWeekDay = addWeeks(day, 1);
    const startOfWeekDay = startOfWeek(day);
    const endOfWeekDay = endOfWeek(day);

    beforeEach(() => focusDay(day));
    test('the day button should be focused', () => {
      expect(getFocusedElement()).toBe(getDayButton(day));
    });
    describe('when the Arrow Left is pressed', () => {
      beforeEach(pressArrowLeft);
      if (dir === 'rtl') {
        test('should focus the next day', () => {
          expect(getDayButton(nextDay)).toHaveFocus();
        });
      } else {
        test('should display the previous month', () => {
          expect(getMonthCaption(container)).toHaveTextContent('May 2022');
        });
        test('should focus the previous day', () => {
          expect(getDayButton(prevDay)).toHaveFocus();
        });
      }
    });
    describe('when the Arrow Right is pressed', () => {
      beforeEach(pressArrowRight);
      if (dir === 'rtl') {
        test('should display the previous month', () => {
          expect(getMonthCaption(container)).toHaveTextContent('May 2022');
        });
        test('should focus the previous day', () => {
          expect(getDayButton(prevDay)).toHaveFocus();
        });
      } else {
        test('should focus the next day', () => {
          expect(getDayButton(nextDay)).toHaveFocus();
        });
      }
    });
    describe('when the Arrow Up is pressed', () => {
      beforeEach(pressArrowUp);
      test('should display the previous month', () => {
        expect(getMonthCaption(container)).toHaveTextContent('May 2022');
      });
      test('should focus the day in the previous week', () => {
        expect(getDayButton(prevWeekDay)).toHaveFocus();
      });
    });
    describe('when the Arrow Down is pressed', () => {
      beforeEach(pressArrowDown);
      test('should display the same month', () => {
        expect(getMonthCaption(container)).toHaveTextContent('June 2022');
      });
      test('should focus the day in the next week', () => {
        expect(getDayButton(nextWeekDay)).toHaveFocus();
      });
    });
    describe('when Page Up is pressed', () => {
      beforeEach(pressPageUp);
      it('should display the previous month', () => {
        expect(getMonthCaption(container)).toHaveTextContent('May 2022');
      });
      it('should focus the day in the previous month', () => {
        expect(getDayButton(prevMonth)).toHaveFocus();
      });
    });
    describe('when Page Down is pressed', () => {
      beforeEach(pressPageDown);
      it('should display the next month', () => {
        expect(getMonthCaption(container)).toHaveTextContent('July 2022');
      });
      it('should focus the day in the next month', () => {
        expect(getDayButton(nextMonth)).toHaveFocus();
      });
    });
    describe('when Shift + Page Up is pressed', () => {
      beforeEach(pressShiftPageUp);
      it('should display the previous year', () => {
        expect(getMonthCaption(container)).toHaveTextContent('June 2021');
      });
      it('should focus the day in the previous year', () => {
        expect(getDayButton(prevYear)).toHaveFocus();
      });
    });
    describe('when Shift + Page Down is pressed', () => {
      beforeEach(pressShiftPageDown);
      it('should display the next year', () => {
        expect(getMonthCaption(container)).toHaveTextContent('June 2023');
      });
      it('should focus the day in the next yeaer', () => {
        expect(getDayButton(nextYear)).toHaveFocus();
      });
    });
    describe('when Home is pressed', () => {
      beforeEach(pressHome);
      it('should focus the start of the week', () => {
        expect(getDayButton(startOfWeekDay)).toHaveFocus();
      });
    });
    describe('when End is pressed', () => {
      beforeEach(pressEnd);
      it('should focus the end of the week', () => {
        expect(getDayButton(endOfWeekDay)).toHaveFocus();
      });
    });
  });

  describe('when the last day is focused', () => {
    const day = lastDayOfMonth(today);
    const nextDay = addDays(day, 1);
    const prevDay = addDays(day, -1);

    beforeEach(() => focusDay(day));
    describe('when the Arrow Right is pressed', () => {
      beforeEach(pressArrowRight);
      if (dir === 'rtl') {
        test('should focus the previous day', () => {
          expect(getDayButton(prevDay)).toHaveFocus();
        });
      } else {
        test('should display the next month', () => {
          expect(getMonthCaption(container)).toHaveTextContent('July 2022');
        });
        test('should focus the next day', () => {
          const nextDay = addDays(day, 1);
          expect(getDayButton(nextDay)).toHaveFocus();
        });
      }
    });
    describe('when the Arrow Left is pressed', () => {
      beforeEach(pressArrowLeft);
      if (dir === 'rtl') {
        test('should display the next month', () => {
          expect(getMonthCaption(container)).toHaveTextContent('July 2022');
        });
        test('should focus the next day', () => {
          const nextDay = addDays(day, 1);
          expect(getDayButton(nextDay)).toHaveFocus();
        });
      } else {
        test('should display the same month', () => {
          expect(getMonthCaption(container)).toHaveTextContent('June 2022');
        });
        test('should focus the previous day', () => {
          const prevDay = addDays(day, -1);
          expect(getDayButton(prevDay)).toHaveFocus();
        });
      }
    });
    describe('when the Arrow Up is pressed', () => {
      beforeEach(pressArrowUp);
      test('should display the same month', () => {
        expect(getMonthCaption(container)).toHaveTextContent('June 2022');
      });
      test('should focus the day in the previous week', () => {
        const prevDay = addWeeks(day, -1);
        expect(getDayButton(prevDay)).toHaveFocus();
      });
    });
    describe('when the Arrow Down is pressed', () => {
      beforeEach(pressArrowDown);
      test('should display the next month', () => {
        expect(getMonthCaption(container)).toHaveTextContent('July 2022');
      });
      test('should focus the day in the next week', () => {
        const nextDay = addWeeks(day, 1);
        expect(getDayButton(nextDay)).toHaveFocus();
      });
    });
  });
});
