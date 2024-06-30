import React, { HTMLProps } from "react";

import type { CalendarMonth } from "../classes/index.js";

/**
 * Render the caption of a month in the calendar.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://daypicker.dev/advanced-guides/custom-components
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
