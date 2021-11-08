import * as React from 'react';

import tk from 'timekeeper';

import { useDay, UseDay } from './useDay';
import { enUS } from 'date-fns/locale';
import { customRenderHook } from 'test';
import { DayPickerProps } from 'types';

const insideDay = new Date(2021, 8, 1);
const displayMonth = insideDay;
// A date that is not in the current month:
const outsideDay = new Date(2021, 7, 31);

beforeEach(() => {
  tk.freeze(insideDay);
});
afterEach(() => tk.reset());

const runUseDayTest = (
  date: Date,
  month: Date,
  contextValue: DayPickerProps = {}
): UseDay => {
  const { result } = customRenderHook(() => {
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    return useDay(date, month, buttonRef);
  }, contextValue);
  return result.current;
};

describe('when we use a day in the current month', () => {
  const day = runUseDayTest(insideDay, displayMonth, {
    showOutsideDays: true,
    locale: enUS
  });
  test('isOutside should be set to false', () => {
    expect(day.isOutside).toBeFalsy();
  });
});
describe('when we use a day outside the current month', () => {
  test('isOutside should be set to true', () => {
    const day = runUseDayTest(outsideDay, displayMonth, {
      showOutsideDays: true,
      locale: enUS
    });
    expect(day.isOutside).toBeTruthy();
  });
});
