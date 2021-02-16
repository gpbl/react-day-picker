import * as React from 'react';

import { useProps } from '../../hooks';
import { getWeekdays } from './utils/getWeekdays';

export function Head(): JSX.Element {
  const {
    locale,
    classNames,
    styles,
    labels,
    showWeekNumber,
    formatters: { formatWeekdayName }
  } = useProps();
  const weekdays = getWeekdays(locale);
  return (
    <thead style={styles?.Head} className={classNames.Head}>
      <tr style={styles?.HeadRow} className={classNames.HeadRow}>
        {showWeekNumber && (
          <th style={styles?.HeadCell} className={classNames.HeadCell}></th>
        )}
        {weekdays.map((weekday, i) => (
          <th
            key={i}
            scope="col"
            className={classNames.HeadCell}
            style={styles?.HeadCell}
            aria-label={labels.weekdayLabel(weekday, { locale })}
          >
            {formatWeekdayName(weekday, { locale })}
          </th>
        ))}
      </tr>
    </thead>
  );
}
