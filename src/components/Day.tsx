import React from "react";
import type { HTMLAttributes, ReactNode } from "react";

import type { CalendarDay } from "../classes";
import type { DayModifiers } from "../types";

/**
 * Render the gridcell of a day in the calendar.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://react-day-picker.js.org/advanced-guides/custom-components
 */
export function Day(props: {
  /** The day to be rendered in the gridcell. */
  day: CalendarDay;
  /** Modifiers for the day. */
  modifiers: DayModifiers;
  /** HTML attributes for the gridcell. */
  htmlAttributes: HTMLAttributes<HTMLElement>;
  /** Children of the gridcell. */
  children?: ReactNode;
}) {
  const { children, htmlAttributes } = props;
  return <div {...htmlAttributes}>{children}</div>;
}

export type DayProps = Parameters<typeof Day>[0];
