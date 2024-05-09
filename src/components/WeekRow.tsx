import { getUnixTime } from "date-fns";

import { useDayPicker } from "../contexts/DayPicker";

import { Day as DefaultDay } from "./Day";
import { WeekNumberRowHeader as DefaultWeekNumberRowHeader } from "./WeekNumberRowHeader";

export interface WeekRowProps {
  /** The month where the row is displayed. */
  displayMonth: Date;
  /** The number of the week to render. */
  weekNumber: number;
  /** The days contained in the week. */
  dates: Date[];
}

/** Render a row in the calendar, with the days and the week number. */
export function WeekRow(props: WeekRowProps): JSX.Element {
  const { styles, classNames, showWeekNumber, components } = useDayPicker();

  const Day = components?.Day ?? DefaultDay;
  const WeekNumberRowHeader =
    components?.WeekNumberRowHeader ?? DefaultWeekNumberRowHeader;

  let weekNumberCell;
  if (showWeekNumber) {
    weekNumberCell = (
      <td className={classNames.cell} style={styles.cell}>
        <WeekNumberRowHeader number={props.weekNumber} dates={props.dates} />
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
          role="presentation"
        >
          <Day displayMonth={props.displayMonth} date={date} />
        </td>
      ))}
    </tr>
  );
}
