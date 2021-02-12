import * as React from 'react';

import { defaultFormatDay, defaultLocale } from '../DayPicker/defaults/DefaultProps';
import { getDayProps } from './getDayProps';
import { getModifiers } from './getModifiers';
import { DayProps } from './types';

export function Day(props: DayProps): JSX.Element {
  const { day, dayPickerProps, currentMonth } = props;
  const locale = dayPickerProps.locale ?? defaultLocale;
  const formatDay = dayPickerProps.formatDay ?? defaultFormatDay;

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
      <time {...wrapperProps}>{formatDay(day, { locale })}</time>
    </span>
  );
}
