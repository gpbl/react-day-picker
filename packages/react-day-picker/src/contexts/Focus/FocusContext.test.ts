import { act } from '@testing-library/react';
import {
  addDays,
  addMonths,
  addWeeks,
  addYears,
  endOfWeek,
  startOfWeek
} from 'date-fns';

import { renderDayPickerHook } from 'test/render';
import { freezeBeforeAll } from 'test/utils';

import { FocusContextValue, useFocusContext } from 'contexts/Focus';

const today = new Date(2021, 11, 8); // make sure is in the middle of the week for the complete test
freezeBeforeAll(today);

function renderHook() {
  return renderDayPickerHook<FocusContextValue>(useFocusContext);
}

type HookFunction =
  | 'focusDayAfter'
  | 'focusDayBefore'
  | 'focusWeekAfter'
  | 'focusWeekBefore'
  | 'focusMonthBefore'
  | 'focusMonthAfter'
  | 'focusYearBefore'
  | 'focusYearAfter'
  | 'focusStartOfWeek'
  | 'focusEndOfWeek';

let result: FocusContextValue;
beforeEach(() => {
  result = renderHook();
});

test('`focusedDay` should be undefined', () => {
  expect(result.focusedDay).toBeUndefined();
});

const tests: Array<HookFunction> = [
  'focusDayAfter',
  'focusDayBefore',
  'focusWeekAfter',
  'focusWeekBefore',
  'focusMonthBefore',
  'focusMonthAfter',
  'focusYearBefore',
  'focusYearAfter',
  'focusStartOfWeek',
  'focusEndOfWeek'
];
describe.each(tests)('when calling %s', (fn: HookFunction) => {
  beforeEach(() => {
    result[fn];
  });
  test('`focusedDay` should be undefined', () => {
    expect(result.focusedDay).toBeUndefined();
  });
});

describe('when a day is focused', () => {
  const day = today;
  beforeEach(() => {
    act(() => result.focus(day));
  });
  test('should set the focused day', () => {
    expect(result.focusedDay).toEqual(day);
  });
  describe('when "focusDayBefore" is called', () => {
    const dayBefore = addDays(day, -1);
    beforeEach(() => act(() => result.focusDayBefore()));
    test('should focus the day before', () => {
      expect(result.focusedDay).toEqual(dayBefore);
    });
    test.todo('should call the navigation goToDate');
  });
  describe('when "focusDayAfter" is called', () => {
    beforeEach(() => act(() => result.focusDayAfter()));
    test('should focus the day after', () => {
      const dayAfter = addDays(day, 1);
      expect(result.focusedDay).toEqual(dayAfter);
    });
    test.todo('should call the navigation goToDate');
  });
  describe('when "focusWeekBefore" is called', () => {
    beforeEach(() => act(() => result.focusWeekBefore()));
    test('should focus the day in the previous week', () => {
      const prevWeek = addWeeks(day, -1);
      expect(result.focusedDay).toEqual(prevWeek);
    });
    test.todo('should call the navigation goToDate');
  });
  describe('when "focusWeekAfter" is called', () => {
    beforeEach(() => act(() => result.focusWeekAfter()));
    test('should focus the day in the next week', () => {
      const nextWeek = addWeeks(day, 1);
      expect(result.focusedDay).toEqual(nextWeek);
    });
    test.todo('should call the navigation goToDate');
  });
  describe('when "focusStartOfWeek" is called', () => {
    beforeEach(() => act(() => result.focusStartOfWeek()));
    test('should focus the first day of the week', () => {
      const firstDayOfWeek = startOfWeek(day);
      expect(result.focusedDay).toEqual(firstDayOfWeek);
    });
    test.todo('should call the navigation goToDate');
  });
  describe('when "focusEndOfWeek" is called', () => {
    beforeEach(() => act(() => result.focusEndOfWeek()));
    test('should focus the last day of the week', () => {
      const lastDayOfWeek = endOfWeek(day);
      expect(result.focusedDay).toEqual(lastDayOfWeek);
    });
    test.todo('should call the navigation goToDate');
  });
  describe('when "focusMonthBefore" is called', () => {
    beforeEach(() => act(() => result.focusMonthBefore()));
    test('should focus the day in the month before', () => {
      const monthBefore = addMonths(day, -1);
      expect(result.focusedDay).toEqual(monthBefore);
    });
    test.todo('should call the navigation goToDate');
  });
  describe('when "focusMonthAfter" is called', () => {
    beforeEach(() => act(() => result.focusMonthAfter()));
    test('should focus the day in the month after', () => {
      const monthAfter = addMonths(day, 1);
      expect(result.focusedDay).toEqual(monthAfter);
    });
    test.todo('should call the navigation goToDate');
  });
  describe('when "focusYearBefore" is called', () => {
    beforeEach(() => act(() => result.focusYearBefore()));
    test('should focus the day in the year before', () => {
      const prevYear = addYears(day, -1);
      expect(result.focusedDay).toEqual(prevYear);
    });
    test.todo('should call the navigation goToDate');
  });
  describe('when "focusYearAfter" is called', () => {
    beforeEach(() => act(() => result.focusYearAfter()));
    test('should focus the day in the year after', () => {
      const nextYear = addYears(day, 1);
      expect(result.focusedDay).toEqual(nextYear);
    });
    test.todo('should call the navigation goToDate');
  });
  describe('when blur is called', () => {
    beforeEach(() => act(() => result.blur()));
    test('`focusedDay` should be undefined', () => {
      expect(result.focusedDay).toBeUndefined();
    });
  });
});
