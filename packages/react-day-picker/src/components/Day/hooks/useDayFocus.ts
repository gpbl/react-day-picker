import * as React from 'react';

import { isSameDay } from 'date-fns';

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
} {
  const [
    focusedDay,
    {
      focusDayAfter,
      focusDayBefore,
      focusWeekAfterDay,
      focusWeekBeforeDay,
      blur,
      focus
    }
  ] = useFocus();

  // Focus the HTML element if this is the focused day.
  React.useEffect(() => {
    if (!focusedDay) return;
    if (isSameDay(focusedDay, date)) {
      buttonRef.current?.focus();
    }
  }, [focusedDay]);

  const focusOnKeyDown: React.KeyboardEventHandler = (e) => {
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        e.stopPropagation();
        focusDayBefore();
        break;
      case 'ArrowRight':
        e.preventDefault();
        e.stopPropagation();
        focusDayAfter();
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
    }
  };

  const isFocused = Boolean(focusedDay && !isSameDay(focusedDay, date));

  return { focus, blur, focusOnKeyDown, isFocused };
}
