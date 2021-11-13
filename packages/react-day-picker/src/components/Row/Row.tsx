import * as React from 'react';

import { getUnixTime } from 'date-fns';

import { useDayPicker } from '../../contexts/DayPicker';

import { RowProps } from './RowProps';

/**
 * Render a row in the calendar, with the days and optionally the week number.
 */
export function Row(props: RowProps): JSX.Element {
  const {
    styles,
    classNames,
    showWeekNumber,
    components: { Day, WeekNumber }
  } = useDayPicker();

  let weekNumberCell;
  if (showWeekNumber) {
    weekNumberCell = (
      <td className={classNames.cell} style={styles.cell}>
        <WeekNumber number={props.weekNumber} dates={props.dates} />
      </td>
    );
  }

  return (
    <tr className={classNames.row} style={styles.row}>
      {weekNumberCell}
      {props.dates.map((date) => (
        <td
          className={classNames.cell}
          style={styles.cell}
          key={getUnixTime(date)}
        >
          <Day displayMonth={props.displayMonth} date={date} />
        </td>
      ))}
    </tr>
  );
}
