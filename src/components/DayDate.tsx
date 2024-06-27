import React from "react"

import type { CalendarDay } from "../classes/index.js"
import type { Modifiers } from "../types/index.js"

/**
 * Render the date as string inside the day grid cell.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://daypicker.dev/advanced-guides/custom-components
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

/**
 * @deprecated The component has been renamed. Use `DayDate` instead.
 * @protected
 */
export const DayContent = DayDate;
/**
 * @deprecated The type has been renamed. Use `DayDateProps` instead.
 * @protected
 */
export type DayContentProps = DayDateProps;
