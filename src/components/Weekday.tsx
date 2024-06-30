import React, { HTMLProps } from "react";

/**
 * Render the column header with the weekday name (e.g. "Mo", "Tu", etc.).
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://daypicker.dev/advanced-guides/custom-components
 */
export function Weekday(props: HTMLProps<HTMLTableCellElement>) {
  return <th {...props} />;
}

export type WeekdayProps = Parameters<typeof Weekday>[0];
