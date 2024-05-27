import { useId } from "react";

import { UI } from "../UI";
import type { CalendarMonth } from "../classes/CalendarMonth";
import { useCalendar, useFocus } from "../contexts";
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
  const calendar = useCalendar();
  const focus = useFocus();

  const reactId = useId();
  const captionId = id ? `${id}-caption-${props.index}` : reactId;
  const gridId = id ? `${id}-grid-${props.index}` : reactId;

  const WeekdaysRow = components?.WeekdaysRow ?? DefaultWeekdaysRow;
  const MonthCaption = components?.MonthCaption ?? DefaultMonthCaption;
  const WeekRow = components?.WeekRow ?? DefaultWeekRow;

  return (
    <div
      className={classNames[UI.MonthGridWrapper]}
      style={styles?.[UI.MonthGridWrapper]}
    >
      <MonthCaption id={captionId} month={props.month} index={props.index} />
      <div
        id={gridId}
        role="grid"
        aria-multiselectable={mode === "multiple" || mode === "range"}
        aria-labelledby={captionId}
        className={classNames[UI.MonthGrid]}
        style={styles?.[UI.MonthGrid]}
      >
        <WeekdaysRow />
        <div
          role="rowgroup"
          className={classNames[UI.WeeksRowGroup]}
          style={styles?.[UI.WeeksRowGroup]}
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
