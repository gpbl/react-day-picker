import * as React from 'react';

import { defaultLocale } from '../DayPicker/defaults/props';
import { WeekNumberProps } from './types/WeekNumberProps';

/**
 * Render the number of the week when [[showWeekNumber]] is enabled.
 *
 * @category Component
 */
export function WeekNumber(props: WeekNumberProps): JSX.Element {
  const { formatWeekNumber, locale, classNames, styles } = props.dayPickerProps;
  return (
    <span className={classNames?.weekNumber} style={styles?.weekNumber}>
      {formatWeekNumber &&
        formatWeekNumber(props.number, {
          locale: locale || defaultLocale
        })}
    </span>
  );
}
