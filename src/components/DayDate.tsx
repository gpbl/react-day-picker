import React from "react";

import type { CalendarDay } from "../classes";
import type { Modifiers } from "../types/shared";

/**
 * Render the date as string inside the day grid cell.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://react-day-picker.js.org/advanced-guides/custom-components
 */
export function DayDate(props: {
  day: CalendarDay;
  /** The date to display. */
  formattedDate: string;
  /** The modifiers for the day. */
  modifiers: Modifiers;
  /** The HTML attributes for the root element. */
  rootProps: {
    className: string;
    style?: React.CSSProperties;
  };
}) {
  return <span {...props.rootProps}>{props.formattedDate}</span>;
}

export type DayDateProps = Parameters<typeof DayDate>[0];
