import React from 'react';

import tk from 'timekeeper';
import { addMonths } from 'date-fns';

import { DayPickerProps } from '../../../types';

import { useDay, UseDay } from './useDay';
import { customRenderHook } from '@test/customRenderHook';

const displayMonth = new Date(2021, 8, 1);

function setup(
  date: Date,
  displayMonth: Date,
  contextValue: DayPickerProps
): UseDay {
  const { result } = customRenderHook(() => {
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    return useDay(date, displayMonth, buttonRef);
  }, contextValue);
  return result.current;
}

beforeEach(() => {
  tk.freeze(displayMonth);
});
afterEach(() => {
  tk.reset();
});

describe('when showing the outside days', () => {
  const context: DayPickerProps = { showOutsideDays: true };

  describe('when the date is inside the display month', () => {
    const date = displayMonth;
    const day = setup(date, displayMonth, context);
    test('"isOutside" should be false', () => {
      expect(day.isOutside).toBe(false);
    });
  });

  describe('when the date is outside the display month', () => {
    const date = addMonths(displayMonth, 1);
    const day = setup(date, displayMonth, context);
    test('"isOutside" should be true', () => {
      expect(day.isOutside).toBe(true);
    });
  });
});
