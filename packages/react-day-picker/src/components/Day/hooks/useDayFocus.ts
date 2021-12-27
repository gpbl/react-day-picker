import { KeyboardEventHandler, RefObject, useEffect } from 'react';

import { isSameDay } from 'date-fns';

import { useDayPicker } from 'contexts/DayPicker';
import { useFocusContext } from 'contexts/Focus';

export type UseDayFocus = {
  focus: (date: Date) => void;
  blur: () => void;
  onKeyDown: KeyboardEventHandler;
  /** Whether the day should be target of the focus. This day should get tabIndex as `0` */
  isFocusTarget: boolean;
};

/** Handle the focus for the day element. */
export function useDayFocus(
  date: Date,
  buttonRef: RefObject<HTMLButtonElement>
): UseDayFocus {
  const {
    focusedDay,
    focusTarget,
    focusDayAfter,
    focusDayBefore,
    focusWeekAfter,
    focusWeekBefore,
    blur,
    focus,
    focusMonthBefore,
    focusMonthAfter,
    focusYearBefore,
    focusYearAfter,
    focusStartOfWeek,
    focusEndOfWeek
  } = useFocusContext();
  const { dir } = useDayPicker();

  // Focus the HTML element if this is the focused day.
  useEffect(() => {
    if (!focusedDay) return;
    if (isSameDay(focusedDay, date)) {
      buttonRef.current?.focus();
    }
  }, [focusedDay, date, buttonRef]);

  const onKeyDown: KeyboardEventHandler = (e) => {
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
        focusWeekAfter();
        break;
      case 'ArrowUp':
        e.preventDefault();
        e.stopPropagation();
        focusWeekBefore();
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
        focusStartOfWeek();
        break;
      case 'End':
        e.preventDefault();
        e.stopPropagation();
        focusEndOfWeek();
        break;
    }
  };

  const isFocusTarget = Boolean(focusTarget && isSameDay(focusTarget, date));

  return { focus, blur, onKeyDown, isFocusTarget };
}
