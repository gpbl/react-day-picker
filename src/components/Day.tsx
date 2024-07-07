import React from "react";

import type { CalendarDay } from "../classes/index.js";
import type { Modifiers } from "../types/index.js";

/**
 * Render the gridcell of a day in the calendar and handle the interaction and
 * the focus with they day.
 *
 * Use the `components` prop to swap this component with a custom one. If you
 * need to just change the content of the day cell, consider swapping the
 * `DayDate` component instead.
 *
 * @group Components
 * @see https://daypicker.dev/advanced-guides/custom-components
 */
export function Day(
  props: {
    day: CalendarDay;
    modifiers: Modifiers;
  } & JSX.IntrinsicElements["td"]
) {
  const { day, modifiers, ...tdProps } = props;
  return <td {...tdProps} />;
}

export type DayProps = Parameters<typeof Day>[0];
