import { getUnixTime } from "date-fns/getUnixTime";

import { Week } from "../classes";
import { useDayPicker } from "../contexts/DayPickerContext";
import { WeekNumberRowHeader as DefaultWeekNumberRowHeader } from "./WeekNumberRowHeader";
import { DayGridCellWrapper } from "./DayGridCellWrapper";

/** Render a row in the calendar, with the days and the week number. */
export function WeekRow(props: WeekRowProps) {
  const { styles, classNames, showWeekNumber, components } = useDayPicker();

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
      {props.week.days.map((day, i) => (
        <DayGridCellWrapper
          day={day}
          aria-colindex={showWeekNumber ? i + 2 : i + 1}
          key={getUnixTime(day.date)}
        />
      ))}
    </div>
  );
}

export interface WeekRowProps {
  ["aria-rowindex"]: number;
  week: Week;
}
