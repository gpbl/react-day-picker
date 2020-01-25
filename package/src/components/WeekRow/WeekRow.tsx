import * as React from "react";
import { getUnixTime } from "date-fns";
import { WeekRowProps } from "./types";

/**
 * Render a week row.
 *
 * @category Components
 * @private
 */
export function WeekRow(props: WeekRowProps): JSX.Element {
  const { weekNumber, week, dayPickerProps } = props;
  const { showWeekNumber, classNames, styles, swizzle } = dayPickerProps;
  const { Day, WeekNumber } = swizzle!;
  return (
    <tr className={classNames?.week} style={styles?.week}>
      {showWeekNumber && (
        <th
          className={classNames?.weekWeeknumber}
          style={styles?.weekWeeknumber}
        >
          <WeekNumber
            days={week.map(day => day.date)}
            number={Number(weekNumber)}
            dayPickerProps={dayPickerProps}
          />
        </th>
      )}
      {week.map(day => (
        <td
          className={classNames?.weekDay}
          style={styles?.weekDay}
          key={getUnixTime(day.date)}
        >
          <Day
            day={day.date}
            modifiers={day.modifiers}
            dayPickerProps={dayPickerProps}
          />
        </td>
      ))}
    </tr>
  );
}
