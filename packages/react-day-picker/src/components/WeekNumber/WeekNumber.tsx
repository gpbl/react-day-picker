import * as React from 'react';
import { WeekNumberProps } from 'types';

export function WeekNumber(props: WeekNumberProps): JSX.Element {
  const { formatWeekNumber, locale, classNames, styles } = props.dayPickerProps;
  return (
    <span className={classNames?.weekNumber} style={styles?.weekNumber}>
      {formatWeekNumber(props.number, { locale })}
    </span>
  );
}
