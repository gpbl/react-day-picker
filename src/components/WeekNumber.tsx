import React from "react";

import { UI, WeekNumberFlag } from "../UI.js";
import type { CalendarWeek } from "../classes/index.js";
import type { UIProps } from "../types/index.js";

/**
 * Render the cell with the number of the week.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://daypicker.dev/advanced-guides/custom-components
 */
export function WeekNumber(props: { week: CalendarWeek } & UIProps) {
  const {
    classNames,
    formatters: { formatWeekNumber },
    labels: { labelWeekNumber },
    locale,
    styles,
    onWeekNumberClick
  } = props.props;

  const isInteractive = Boolean(onWeekNumberClick);

  return (
    <div
      role="rowheader"
      aria-colindex={1}
      aria-label={labelWeekNumber(props.week.weekNumber, { locale })}
      className={[
        classNames[UI.WeekNumber],
        isInteractive ? classNames[WeekNumberFlag.week_number_interactive] : ""
      ].join(" ")}
      style={styles?.[UI.WeekNumber]}
      tabIndex={isInteractive ? 0 : undefined}
      onClick={(e) =>
        onWeekNumberClick?.(
          props.week.weekNumber,
          props.week.days.map((day) => day.date),
          e
        )
      }
    >
      {formatWeekNumber(props.week.weekNumber)}
    </div>
  );
}

export type WeekNumberProps = Parameters<typeof WeekNumber>[0];
