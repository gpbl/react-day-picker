import * as React from 'react';

import { getModifiers } from './getModifiers';
import { getDayProps } from './getDayProps';
import { DayProps } from './types';

export function Day(props: DayProps): JSX.Element {
  const { day, dayPickerProps, currentMonth } = props;
  const { locale, formatDay } = dayPickerProps;

  const modifiers = getModifiers(day, currentMonth, dayPickerProps);

  if (modifiers.hidden) {
    return <span aria-hidden />;
  }

  const { containerProps, wrapperProps } = getDayProps(
    day,
    modifiers,
    dayPickerProps
  );

  return (
    <span {...containerProps}>
      <time {...wrapperProps}>{formatDay?.(day, { locale })}</time>
    </span>
  );
}
