import * as React from 'react';
import { DayProps } from 'types';

import { defaultProps } from '../DayPicker/defaultProps';
import { getDayComponent } from './getDayComponent';

export function Day(props: DayProps): JSX.Element {
  const { day, dayPickerProps, currentMonth } = props;
  const locale = dayPickerProps.locale ?? defaultProps.locale;
  const formatDay = dayPickerProps.formatDay ?? defaultProps.formatDay;

  const { rootProps, wrapperProps, modifiers } = getDayComponent(
    day,
    currentMonth,
    dayPickerProps
  );

  if (modifiers.hidden) {
    return <span />;
  }

  return (
    <span {...rootProps}>
      <time {...wrapperProps}>{formatDay(day, { locale })}</time>
    </span>
  );
}
