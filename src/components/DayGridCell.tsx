import type { HTMLAttributes } from "react";

import type { CalendarDay } from "../classes";
import type { DayModifiers } from "../types";

/**
 * Render the gridcell of a day in the calendar.
 *
 * @group Components
 */
export function DayGridCell(props: {
  /** The day to be rendered in the gridcell. */
  day: CalendarDay;
  /** Modifiers for the day. */
  modifiers: DayModifiers;
  /** HTML attributes for the gridcell. */
  htmlAttributes: HTMLAttributes<HTMLElement>;
  /** Children of the gridcell. */
  children?: React.ReactNode;
}) {
  const { children, htmlAttributes } = props;
  return <div {...htmlAttributes}>{children}</div>;
}
