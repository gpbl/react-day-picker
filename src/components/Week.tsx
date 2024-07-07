import React from "react";

import type { CalendarWeek } from "../classes/index.js";

/**
 * Render a row in the calendar, with the days and the week number.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://daypicker.dev/next/advanced-guides/custom-components
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
