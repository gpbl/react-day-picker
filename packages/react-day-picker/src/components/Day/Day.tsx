import { isSameDay } from 'date-fns';
import * as React from 'react';
import { DayProps } from 'types';

import { getDayComponent } from './getDayComponent';

export function Day(props: DayProps): JSX.Element | null {
  const el = React.useRef<HTMLTimeElement>(null);
  const { day, dayPickerProps, currentMonth } = props;
  const { locale, formatDay, focusedDay } = dayPickerProps;

  const { rootProps, modifiers } = getDayComponent(
    day,
    currentMonth,
    dayPickerProps
  );

  if (modifiers.hidden) {
    return null;
  }
  React.useEffect(() => {
    if (focusedDay && isSameDay(focusedDay, day)) {
      el?.current?.focus();
    }
  }, [dayPickerProps.focusedDay]);

  return (
    <time {...rootProps} ref={el}>
      {formatDay(day, { locale })}
    </time>
  );
}
