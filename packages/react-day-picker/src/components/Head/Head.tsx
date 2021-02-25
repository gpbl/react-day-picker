import React from 'react';

import { useDayPicker } from '../../hooks';
import { UIElement } from '../../types';

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
    labels: { labelWeekday },
    weekdays
  } = useDayPicker();
  return (
    <thead
      style={styles[UIElement.Head]}
      className={classNames[UIElement.Head]}
    >
      <tr
        style={styles[UIElement.HeadRow]}
        className={classNames[UIElement.HeadRow]}
      >
        {showWeekNumber && (
          <th
            style={styles[UIElement.HeadCell]}
            className={classNames[UIElement.HeadCell]}
          ></th>
        )}
        {weekdays.map((weekday, i) => (
          <th
            key={i}
            scope="col"
            className={classNames[UIElement.HeadCell]}
            style={styles[UIElement.HeadCell]}
            aria-label={labelWeekday(weekday, { locale })}
          >
            {formatWeekdayName(weekday, { locale })}
          </th>
        ))}
      </tr>
    </thead>
  );
}
