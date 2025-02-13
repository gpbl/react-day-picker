import React, { type HTMLAttributes } from "react";

import type { CalendarMonth } from "../classes/CalendarMonth.js";

/**
 * Render the grid with the weekday header row and the weeks for the given
 * month.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
export function Month(
  props: {
    /** The month where the grid is displayed. */
    calendarMonth: CalendarMonth;
    /** The index where this month is displayed. */
    displayIndex: number;
  } & HTMLAttributes<HTMLDivElement>
) {
  const { calendarMonth, displayIndex, ...divProps } = props;
  return <div {...divProps}>{props.children}</div>;
}

export type MonthProps = Parameters<typeof Month>[0];
