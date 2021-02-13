import * as React from 'react';
import { HeadProps } from 'types';

import { getWeekdays } from './utils/getWeekdays';

export function Head(props: HeadProps): JSX.Element {
  const {
    classNames,
    styles,
    formatWeekdayName,
    labelsFormatters,
    locale,
    showWeekNumber
  } = props.dayPickerProps;
  const weekdays = getWeekdays(locale);
  return (
    <thead style={styles?.head} className={classNames?.head}>
      <tr style={styles?.headRow} className={classNames?.headRow}>
        {showWeekNumber && (
          <th style={styles?.headCell} className={classNames?.headCell}></th>
        )}
        {weekdays.map((weekday, i) => (
          <th
            key={i}
            scope="col"
            style={styles?.headCell}
            className={classNames?.headCell}
            aria-label={labelsFormatters.headCell(
              weekday,
              props.dayPickerProps
            )}
          >
            {formatWeekdayName(weekday, { locale })}
          </th>
        ))}
      </tr>
    </thead>
  );
}
