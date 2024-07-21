import React from "react";

import type { CalendarWeek } from "../classes/index.js";

/**
 * Render the cell with the number of the week.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
export function WeekNumber(
  props: {
    /** The week to render. */
    week: CalendarWeek;
  } & JSX.IntrinsicElements["td"]
) {
  const { week, ...tdProps } = props;
  return <td {...tdProps} />;
}

export type WeekNumberProps = Parameters<typeof WeekNumber>[0];
