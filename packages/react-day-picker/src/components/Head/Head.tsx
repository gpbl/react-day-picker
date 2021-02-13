import * as React from 'react';

import { HeadProps } from '../../types/HeadProps';
import { getWeekdays } from './utils/getWeekdays';

export function Head(props: HeadProps): JSX.Element {
  const { showWeekNumber, dayPickerProps } = props;
  const {
    classNames,
    styles,
    formatWeekdayName,
    labelsFormatters: ariaLabels,
    locale
  } = dayPickerProps;
  const weekdays = getWeekdays(locale);
  return (
    <thead style={styles?.head} className={classNames?.head}>
      <tr style={styles?.headRow} className={classNames?.headRow}>
        {showWeekNumber && (
          <th
            style={styles?.headWeekNumber}
            className={classNames?.headWeekNumber}
          ></th>
        )}
        {weekdays.map((weekday, i) => (
          <th
            key={i}
            scope="col"
            style={styles?.headWeekName}
            className={classNames?.headWeekName}
            aria-label={ariaLabels.weekday(weekday, dayPickerProps)}
          >
            {formatWeekdayName(weekday, { locale })}
          </th>
        ))}
      </tr>
    </thead>
  );
}
