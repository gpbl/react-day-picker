import * as React from 'react';
import { DayProps } from 'types';

import { getDayComponent } from './getDayComponent';

export function Day(props: DayProps): JSX.Element {
  const { day, dayPickerProps, currentMonth } = props;
  const { locale, formatDay } = dayPickerProps;

  const { rootProps, timeProps, modifiers } = getDayComponent(
    day,
    currentMonth,
    dayPickerProps
  );

  if (modifiers.hidden) {
    return <span />;
  }

  return (
    <span {...rootProps}>
      <time {...timeProps}>{formatDay(day, { locale })}</time>
    </span>
  );
}
