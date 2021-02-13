import * as React from 'react';
import { DayProps } from 'types';

import { getDayComponent } from './getDayComponent';

export function Day(props: DayProps): JSX.Element | null {
  const { day, dayPickerProps, currentMonth } = props;
  const { locale, formatDay } = dayPickerProps;

  const { rootProps, modifiers } = getDayComponent(
    day,
    currentMonth,
    dayPickerProps
  );

  if (modifiers.hidden) {
    return null;
  }

  return <time {...rootProps}>{formatDay(day, { locale })}</time>;
}
