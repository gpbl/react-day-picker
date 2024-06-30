import React, { HTMLAttributes } from "react";

import type { CalendarWeek } from "../classes/index.js";

/**
 * Render the cell with the number of the week.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://daypicker.dev/advanced-guides/custom-components
 */
export function WeekNumber(
  props: {
    /** The week to render */
    week: CalendarWeek;
  } & JSX.IntrinsicElements["div"]
) {
  const { week, ...divProps } = props;
  return <div {...divProps} />;
}

export type WeekNumberProps = Parameters<typeof WeekNumber>[0];
