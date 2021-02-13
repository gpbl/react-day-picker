import { getUnixTime } from 'date-fns';
import * as React from 'react';

import { RowProps } from '../../types/RowProps';

export function Row(props: RowProps): JSX.Element {
  const { weekNumber, week, currentMonth, dayPickerProps } = props;
  const {
    labelsFormatters,
    showWeekNumber,
    formatWeekNumber,
    locale,
    classNames,
    styles,
    components
  } = dayPickerProps;
  const { Day } = components;

  return (
    <tr className={classNames?.Row} style={styles?.Row}>
      {showWeekNumber && (
        <th
          className={classNames?.RowHead}
          style={styles?.RowHead}
          aria-label={labelsFormatters.rowHead(
            Number(weekNumber),
            dayPickerProps
          )}
        >
          {formatWeekNumber(Number(weekNumber), { locale })}
        </th>
      )}
      {week.map((day) => (
        <td
          className={classNames?.Cell}
          style={styles?.Cell}
          key={getUnixTime(day)}
        >
          <Day
            day={day}
            dayPickerProps={dayPickerProps}
            currentMonth={currentMonth}
          />
        </td>
      ))}
    </tr>
  );
}
