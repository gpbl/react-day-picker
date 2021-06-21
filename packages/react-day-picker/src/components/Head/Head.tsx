import * as React from 'react';

import { useDayPicker } from 'contexts/DayPicker';

import { getWeekdays } from './utils';

/**
 * Render the Head component - i.e. the table head with the weekday names.
 */
export function Head(): JSX.Element {
  const {
    classNames,
    styles,
    showWeekNumber,
    locale,
    formatters: { formatWeekdayName },
    labels: { labelWeekday }
  } = useDayPicker();

  const weekdays = getWeekdays(locale);

  return (
    <thead style={styles.head} className={classNames.head}>
      <tr style={styles.head_row} className={classNames.head_row}>
        {showWeekNumber && (
          <th
            scope="col"
            style={styles.head_cell}
            className={classNames.head_cell}
          ></th>
        )}
        {weekdays.map((weekday, i) => (
          <th
            key={i}
            scope="col"
            className={classNames.head_cell}
            style={styles.head_cell}
          >
            <span className={classNames.vhidden} aria-label="">
              {labelWeekday(weekday, { locale })}
            </span>
            <span aria-hidden={true}>
              {formatWeekdayName(weekday, { locale })}
            </span>
          </th>
        ))}
      </tr>
    </thead>
  );
}
