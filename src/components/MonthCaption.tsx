import React from "react";

import type { CalendarMonth } from "../classes/index.js";

/**
 * Render the caption of a month in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
export function MonthCaption(
  props: {
    /** The month where the grid is displayed. */
    calendarMonth: CalendarMonth;
    /** The index where this month is displayed. */
    displayIndex: number;
  } & JSX.IntrinsicElements["div"]
) {
  const { calendarMonth, displayIndex, ...divProps } = props;
  return <div {...divProps} />;
}

export type MonthCaptionProps = Parameters<typeof MonthCaption>[0];
