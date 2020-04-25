import * as React from 'react';
import { getUnixTime } from 'date-fns';
import { WeekRowProps } from './types';

/**
 * Render a week row.
 *
 * @category Components
 * @private
 */
export function WeekRow(props: WeekRowProps): JSX.Element {
  const { showWeekNumber, classNames, styles, swizzle } = dayPickerProps;
  const { Day, WeekNumber } = swizzle!;
  const { weekNumber, week, currentMonth, dayPickerProps } = props;
  return (
    <tr className={classNames?.week} style={styles?.week}>
      {showWeekNumber && (
        <th
          className={classNames?.weekWeeknumber}
          style={styles?.weekWeeknumber}
        >
          <WeekNumber
            days={week}
            number={Number(weekNumber)}
            dayPickerProps={dayPickerProps}
          />
        </th>
      )}
      {week.map((day) => (
        <td
          className={classNames?.weekDay}
          style={styles?.weekDay}
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
