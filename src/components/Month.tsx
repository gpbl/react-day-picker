import React from "react";

import type { CalendarMonth } from "../classes/CalendarMonth.js";

/**
 * Render the grid with the weekday header row and the weeks for the given
 * month.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://daypicker.dev/next/guides/custom-components
 */
export function Month(
  props: {
    /** The month where the grid is displayed. */
    calendarMonth: CalendarMonth;
    /** The index where this month is displayed. */
    displayIndex: number;
  } & JSX.IntrinsicElements["div"]
) {
  const { calendarMonth, displayIndex, ...divProps } = props;
  return <div {...divProps}>{props.children}</div>;
}

export type MonthProps = Parameters<typeof Month>[0];
