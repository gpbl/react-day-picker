import React, { type ThHTMLAttributes } from "react";

import type { CalendarWeek } from "../classes/index.js";

/**
 * Render a table cell displaying the number of the week.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
export function WeekNumber(
  props: {
    /** The week to display. */
    week: CalendarWeek;
  } & ThHTMLAttributes<HTMLTableCellElement>
) {
  const { week, ...thProps } = props;
  return <th {...thProps} />;
}

export type WeekNumberProps = Parameters<typeof WeekNumber>[0];
