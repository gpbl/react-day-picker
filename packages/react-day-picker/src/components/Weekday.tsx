import React, { type ThHTMLAttributes } from "react";

/**
 * Render a table header cell with the name of a weekday (e.g., "Mo", "Tu").
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
export function Weekday(props: ThHTMLAttributes<HTMLTableCellElement>) {
  return <th {...props} />;
}

export type WeekdayProps = Parameters<typeof Weekday>[0];
