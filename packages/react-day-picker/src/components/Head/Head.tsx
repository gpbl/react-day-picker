import * as React from 'react';
import { getWeekdaysNames } from './getWeekdaysNames';
import { HeadProps } from './types';

/**
 * Render the head of the month table, including the weekday names (Mon, Tue,
 * etc.).
 * @category Components
 */
export function Head(props: HeadProps): JSX.Element {
  const { locale, showWeekNumber, dayPickerProps } = props;
  const { classNames, styles, formatWeekdayName } = dayPickerProps;
  const weekdayNames = getWeekdaysNames(locale, formatWeekdayName);
  return (
    <thead style={styles?.head} className={classNames?.head}>
      <tr style={styles?.headRow} className={classNames?.headRow}>
        {showWeekNumber && (
          <th
            style={styles?.headWeekNumber}
            className={classNames?.headWeekNumber}
          ></th>
        )}
        {weekdayNames.map((name, i) => (
          <th
            key={i}
            scope="col"
            style={styles?.headWeekName}
            className={classNames?.headWeekName}
          >
            {name}
          </th>
        ))}
      </tr>
    </thead>
  );
}
