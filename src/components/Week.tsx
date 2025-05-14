import React, { type HTMLAttributes } from "react";

import type { CalendarWeek } from "../classes/index.js";

/**
 * Render a table row representing a week in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
export function Week(
  props: {
    /** The week to render. */
    week: CalendarWeek;
  } & HTMLAttributes<HTMLTableRowElement>
) {
  const { week, ...trProps } = props;
  return <tr {...trProps} />;
}

export type WeekProps = Parameters<typeof Week>[0];
