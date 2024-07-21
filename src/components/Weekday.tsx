import React from "react";

/**
 * Render the column header with the weekday name (e.g. "Mo", "Tu", etc.).
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
export function Weekday(props: JSX.IntrinsicElements["th"]) {
  return <th {...props} />;
}

export type WeekdayProps = Parameters<typeof Weekday>[0];
