import React from 'react';

import { isSameDay } from 'date-fns';

import { useDayPicker } from '../../../contexts/DayPicker';
import { useFocus } from '../../../contexts/Focus';

/** Handle the focus for the day element. */
export function useDayFocus(
  date: Date,
  buttonRef: React.RefObject<HTMLButtonElement>
): {
  focus: (date: Date) => void;
  blur: () => void;
  focusOnKeyDown: React.KeyboardEventHandler;
  isFocused: boolean;
  changeInitialFocus: (date: Date) => void;
} {
  const [
    focusedDay,
    {
      focusDayAfter,
      focusDayBefore,
      focusWeekAfterDay,
      focusWeekBeforeDay,
      blur,
      focus,
      changeInitialFocus,
      focusMonthBefore,
      focusMonthAfter,
      focusYearBefore,
      focusYearAfter,
      focusFirstDayOfWeek,
      focusLastDayOfWeek
    }
  ] = useFocus();
  const { dir } = useDayPicker();

  // Focus the HTML element if this is the focused day.
  React.useEffect(() => {
    if (!focusedDay) return;
    if (isSameDay(focusedDay, date)) {
      buttonRef.current?.focus();
    }
  }, [focusedDay, date, buttonRef]);

  const focusOnKeyDown: React.KeyboardEventHandler = (e) => {
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        e.stopPropagation();
        dir === 'rtl' ? focusDayAfter() : focusDayBefore();
        break;
      case 'ArrowRight':
        e.preventDefault();
        e.stopPropagation();
        dir === 'rtl' ? focusDayBefore() : focusDayAfter();
        break;
      case 'ArrowDown':
        e.preventDefault();
        e.stopPropagation();
        focusWeekAfterDay();
        break;
      case 'ArrowUp':
        e.preventDefault();
        e.stopPropagation();
        focusWeekBeforeDay();
        break;
      case 'PageUp':
        e.preventDefault();
        e.stopPropagation();
        e.shiftKey ? focusYearBefore() : focusMonthBefore();
        break;
      case 'PageDown':
        e.preventDefault();
        e.stopPropagation();
        e.shiftKey ? focusYearAfter() : focusMonthAfter();
        break;
      case 'Home':
        e.preventDefault();
        e.stopPropagation();
        focusFirstDayOfWeek();
        break;
      case 'End':
        e.preventDefault();
        e.stopPropagation();
        focusLastDayOfWeek();
        break;
    }
  };

  const isFocused = Boolean(focusedDay && !isSameDay(focusedDay, date));

  return { focus, changeInitialFocus, blur, focusOnKeyDown, isFocused };
}
