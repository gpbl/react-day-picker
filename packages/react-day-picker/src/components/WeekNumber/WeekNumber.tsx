import * as React from 'react';
import { WeekNumberProps } from 'types';

import { defaultProps } from '../DayPicker/defaultProps';

export function WeekNumber(props: WeekNumberProps): JSX.Element {
  const { formatWeekNumber, locale, classNames, styles } = props.dayPickerProps;
  return (
    <span className={classNames?.weekNumber} style={styles?.weekNumber}>
      {formatWeekNumber &&
        formatWeekNumber(props.number, {
          locale: locale ?? defaultProps.locale
        })}
    </span>
  );
}
