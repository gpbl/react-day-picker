import { useId } from "react";

import type { CalendarMonth } from "../classes/CalendarMonth";
import { useProps } from "../contexts/props";

import { MonthCaption as DefaultMonthCaption } from "./MonthCaption";
import { WeekRow as DefaultWeekRow } from "./WeekRow";
import { WeekdaysRow as DefaultWeekdaysRow } from "./WeekdaysRow";

/**
 * Render the grid with the weekday header row and the weeks for the given
 * month.
 *
 * @group Components
 */
export function MonthGrid(props: {
  /** The month where the grid is displayed. */
  month: CalendarMonth;
  /** The index where this month is displayed. */
  index: number;
}) {
  const { id, mode, hideWeekdayRow, components, classNames, styles } =
    useProps();

  const reactId = useId();
  const captionId = id ? `${id}-caption-${props.index}` : reactId;
  const gridId = id ? `${id}-grid-${props.index}` : reactId;

  const WeekdaysRow = components?.WeekdaysRow ?? DefaultWeekdaysRow;
  const MonthCaption = components?.MonthCaption ?? DefaultMonthCaption;
  const WeekRow = components?.WeekRow ?? DefaultWeekRow;

  return (
    <div
      className={classNames.month_grid_wrapper}
      style={styles?.month_grid_wrapper}
    >
      <MonthCaption id={captionId} month={props.month} index={props.index} />
      <div
        id={gridId}
        role="grid"
        aria-multiselectable={mode === "multiple" || mode === "range"}
        aria-labelledby={captionId}
        className={classNames.month_grid}
        style={styles?.month_grid}
      >
        <WeekdaysRow />
        <div
          role="rowgroup"
          className={classNames.month_rowgroup}
          style={styles?.month_rowgroup}
        >
          {props.month.weeks.map((week, i) => (
            <WeekRow
              key={week.weekNumber}
              week={week}
              aria-rowindex={i + (hideWeekdayRow ? 1 : 2)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
