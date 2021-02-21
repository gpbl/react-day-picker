import * as React from 'react';

import { useDayPicker } from '../../hooks';
import { UIElement } from '../../types';
import { getWeekdays } from './utils/getWeekdays';

/**
 * Render the Head component - i.e. the table head with the weekday names.
 */
export function Head(): JSX.Element {
  const {
    locale,
    classNames,
    styles,
    labels,
    showWeekNumber,
    formatters: { formatWeekdayName }
  } = useDayPicker();
  const weekdays = getWeekdays(locale);
  return (
    <thead
      style={styles?.[UIElement.Head]}
      className={classNames[UIElement.Head]}
    >
      <tr
        style={styles?.[UIElement.HeadRow]}
        className={classNames[UIElement.HeadRow]}
      >
        {showWeekNumber && (
          <th
            style={styles?.[UIElement.HeadCell]}
            className={classNames[UIElement.HeadCell]}
          ></th>
        )}
        {weekdays.map((weekday, i) => (
          <th
            key={i}
            scope="col"
            className={classNames[UIElement.HeadCell]}
            style={styles?.[UIElement.HeadCell]}
            aria-label={labels.weekdayLabel(weekday, { locale })}
          >
            {formatWeekdayName(weekday, { locale })}
          </th>
        ))}
      </tr>
    </thead>
  );
}
