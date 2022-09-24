import React from 'react';

import getUnixTime from 'date-fns/getUnixTime';

import { useDayPicker } from 'contexts/DayPicker';

/**
 * The props for the {@link Row} component.
 */
export interface RowProps {
  /** The month where the row is displayed. */
  displayMonth: Date;
  /** The number of the week to render. */
  weekNumber: number;
  /** The days contained in the week. */
  dates: Date[];
}

/** Render a row in the calendar, with the days and the week number. */
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
