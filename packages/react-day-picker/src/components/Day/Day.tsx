import * as React from 'react';

import { useModifiers } from '../../hooks/useModifiers/useModifiers';
import { getDayProps } from './getDayProps';
import { DayProps } from './types';

export function Day(props: DayProps): JSX.Element {
  const { day, dayPickerProps, currentMonth } = props;
  const { locale, formatDay } = dayPickerProps;

  const modifiers = useModifiers(day, currentMonth, dayPickerProps);

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
