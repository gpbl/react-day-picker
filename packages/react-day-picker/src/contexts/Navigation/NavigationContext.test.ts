import { act, RenderResult } from '@testing-library/react-hooks';
import { addMonths, startOfMonth, subMonths } from 'date-fns';

import { customRenderHook } from 'test/render/customRenderHook';
import { freezeBeforeAll } from 'test/utils';

import { DayPickerBase } from 'types/DayPickerBase';

import { NavigationContextValue, useNavigation } from './NavigationContext';

const today = new Date(2021, 11, 8);
const todaysMonth = startOfMonth(today);
freezeBeforeAll(today);

let result: RenderResult<NavigationContextValue>;

function setup(dayPickerProps?: DayPickerBase) {
  const view = customRenderHook(() => useNavigation(), dayPickerProps);
  result = view.result;
  return result;
}

describe('when rendered', () => {
  beforeEach(() => {
    setup();
  });
  test('the current month should be the today`s month', () => {
    expect(result.current.currentMonth).toEqual(todaysMonth);
  });
  test('the display months should be the today`s month', () => {
    expect(result.current.displayMonths).toEqual([todaysMonth]);
  });
  test('the previous month should be the month before today`s month', () => {
    expect(result.current.previousMonth).toEqual(subMonths(todaysMonth, 1));
  });
  test('the next month should be the month after today`s month', () => {
    expect(result.current.nextMonth).toEqual(addMonths(todaysMonth, 1));
  });
  describe('when goToMonth is called', () => {
    const newMonth = addMonths(todaysMonth, 10);
    beforeEach(() => {
      act(() => {
        result.current.goToMonth(newMonth);
      });
    });
    test('should go to the specified month', () => {
      expect(result.current.currentMonth).toEqual(newMonth);
    });
    test('the display months should be the today`s month', () => {
      expect(result.current.displayMonths).toEqual([newMonth]);
    });
    test('the previous month should be the month before today`s month', () => {
      expect(result.current.previousMonth).toEqual(subMonths(newMonth, 1));
    });
    test('the next month should be the month after today`s month', () => {
      expect(result.current.nextMonth).toEqual(addMonths(newMonth, 1));
    });
  });
  describe('when goToDate is called with a date from another month', () => {
    const newDate = addMonths(today, 10);
    const onMonthChange = jest.fn();
    beforeEach(() => {
      setup({ onMonthChange });
      act(() => result.current.goToDate(newDate));
    });
    test('should go to the specified month', () => {
      const date = startOfMonth(newDate);
      expect(result.current.currentMonth).toEqual(date);
      expect(onMonthChange).toHaveBeenCalledWith(date);
    });
  });
  describe('when isDateDisplayed is called', () => {
    describe('with a date in the calendar', () => {
      test('should return true', () => {
        expect(result.current.isDateDisplayed(today)).toBe(true);
      });
    });
    describe('with a date not in the calendar', () => {
      test('should return false', () => {
        expect(result.current.isDateDisplayed(addMonths(today, 1))).toBe(false);
      });
    });
  });
});

const numberOfMonths = 2;
describe('when the number of months is ${numberOfMonths}', () => {
  beforeEach(() => {
    setup({ numberOfMonths: 2 });
  });
  test('the current month should be the today`s month', () => {
    expect(result.current.currentMonth).toEqual(todaysMonth);
  });
  test('the display months should be the today`s and next month', () => {
    expect(result.current.displayMonths).toEqual([
      todaysMonth,
      addMonths(todaysMonth, 1)
    ]);
  });
  test('the previous month should be the month before today`s month', () => {
    expect(result.current.previousMonth).toEqual(subMonths(todaysMonth, 1));
  });
  test('the next month should be the month after today`s month', () => {
    expect(result.current.nextMonth).toEqual(addMonths(todaysMonth, 1));
  });
});

describe(`when the number of months is ${numberOfMonths} and the navigation is paged`, () => {
  beforeEach(() => {
    setup({ numberOfMonths, pagedNavigation: true });
  });
  test('the current month should be the today`s month', () => {
    expect(result.current.currentMonth).toEqual(todaysMonth);
  });
  test('the display months should be the today`s and next month', () => {
    expect(result.current.displayMonths).toEqual([
      todaysMonth,
      addMonths(todaysMonth, 1)
    ]);
  });
  test(`the previous month should be the ${numberOfMonths} months before today's month`, () => {
    expect(result.current.previousMonth).toEqual(
      subMonths(todaysMonth, numberOfMonths)
    );
  });
  test(`the next month should be ${numberOfMonths} months after today's month`, () => {
    expect(result.current.nextMonth).toEqual(
      addMonths(todaysMonth, numberOfMonths)
    );
  });
});
