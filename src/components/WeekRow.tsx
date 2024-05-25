import { getUnixTime } from "date-fns/getUnixTime";

import { CalendarDay, type CalendarWeek } from "../classes";
import { useProps } from "../contexts/props";

import { DayGridCellWrapper } from "./DayGridCellWrapper";
import { WeekNumberRowHeader as DefaultWeekNumberRowHeader } from "./WeekNumberRowHeader";

/**
 * Render a row in the calendar, with the days and the week number.
 *
 * @group Components
 */
export function WeekRow(props: {
  ["aria-rowindex"]: number;
  week: CalendarWeek;
}) {
  const { styles, classNames, showWeekNumber, components } = useProps();

  const WeekNumberRowHeader =
    components?.WeekNumberRowHeader ?? DefaultWeekNumberRowHeader;

  return (
    <div
      role="row"
      aria-rowindex={props["aria-rowindex"]}
      className={classNames.week_row}
      style={styles?.week_row}
    >
      {showWeekNumber && <WeekNumberRowHeader week={props.week} />}
      {props.week.days.map((day: CalendarDay, i: number) => (
        <DayGridCellWrapper
          day={day}
          aria-colindex={showWeekNumber ? i + 2 : i + 1}
          key={getUnixTime(day.date)}
        />
      ))}
    </div>
  );
}
