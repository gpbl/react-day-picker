import { getUnixTime } from 'date-fns';
import * as React from 'react';

import { WeekProps } from '../../types/WeekProps';

export function Week(props: WeekProps): JSX.Element {
  const { weekNumber, week, currentMonth, dayPickerProps } = props;
  const { showWeekNumber, classNames, styles, components } = dayPickerProps;
  const { Day, WeekNumber } = components;

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
