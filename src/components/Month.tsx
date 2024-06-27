import React from "react";

import { UI } from "../UI.js";
import type { CalendarMonth } from "../classes/CalendarMonth.js";
import { useProps } from "../contexts/index.js";

import { MonthCaption as DefaultMonthCaption } from "./MonthCaption.js";
import { Week as DefaultWeek } from "./Week.js";
import { Weekdays as DefaultWeekdays } from "./Weekdays.js";

/**
 * Render the grid with the weekday header row and the weeks for the given
 * month.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://daypicker.dev/advanced-guides/custom-components
 */
export function Month(props: {
  /** The month where the grid is displayed. */
  month: CalendarMonth;
  /** The index where this month is displayed. */
  index: number;
}) {
  const { id, mode, hideWeekdayRow, components, classNames, styles } =
    useProps();

  const reactId = React.useId();
  const captionId = id ? `${id}-caption-${props.index}` : reactId;
  const gridId = id ? `${id}-grid-${props.index}` : reactId;

  const Weekdays = components?.Weekdays ?? DefaultWeekdays;
  const MonthCaption = components?.MonthCaption ?? DefaultMonthCaption;
  const Week = components?.Week ?? DefaultWeek;

  return (
    <div
      className={classNames[UI.MonthWrapper]}
      style={styles?.[UI.MonthWrapper]}
    >
      <MonthCaption id={captionId} month={props.month} index={props.index} />
      <div
        id={gridId}
        role="grid"
        aria-multiselectable={mode === "multiple" || mode === "range"}
        aria-labelledby={captionId}
        className={classNames[UI.Month]}
        style={styles?.[UI.Month]}
      >
        <Weekdays />
        <div
          role="rowgroup"
          className={classNames[UI.Weeks]}
          style={styles?.[UI.Weeks]}
        >
          {props.month.weeks.map((week, i) => (
            <Week
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

export type MonthProps = Parameters<typeof Month>[0];
