import React from "react";

import type { CalendarWeek } from "../classes/index.js";

/**
 * Render a row in the calendar, with the days and the week number.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
export function Week(
  props: {
    week: CalendarWeek;
  } & JSX.IntrinsicElements["tr"]
) {
  const { week, ...trProps } = props;
  return <tr {...trProps} />;
}

export type WeekProps = Parameters<typeof Week>[0];
