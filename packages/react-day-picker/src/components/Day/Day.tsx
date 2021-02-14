import { isSameDay } from 'date-fns';
import * as React from 'react';
import { DayProps } from '../../types';

import { getDayComponent } from './getDayComponent';

export function Day(props: DayProps): JSX.Element | null {
  const el = React.useRef<HTMLButtonElement>(null);
  const { day, dayPickerProps, currentMonth } = props;
  const { locale, formatDay, focusedDay, showOutsideDays } = dayPickerProps;

  const { rootProps, modifiers } = getDayComponent(
    day,
    currentMonth,
    dayPickerProps
  );

  if (modifiers.hidden) {
    return null;
  }
  if (modifiers.outside && !showOutsideDays) {
    return null;
  }
  React.useEffect(() => {
    if (focusedDay && isSameDay(focusedDay, day)) {
      el?.current?.focus();
    }
  }, [dayPickerProps.focusedDay]);

  return (
    <button {...rootProps} ref={el}>
      {formatDay(day, { locale })}
    </button>
  );
}
