import * as React from 'react';
import { SharedProps } from '../../types';

import { getWeekdays } from './utils/getWeekdays';

export function Head(props: SharedProps): JSX.Element {
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
    <thead style={styles?.Head} className={classNames?.Head}>
      <tr style={styles?.HeadRow} className={classNames?.HeadRow}>
        {showWeekNumber && (
          <th style={styles?.HeadCell} className={classNames?.HeadCell}></th>
        )}
        {weekdays.map((weekday, i) => (
          <th
            key={i}
            scope="col"
            style={styles?.HeadCell}
            className={classNames?.HeadCell}
            aria-label={labelsFormatters.HeadCell(
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
