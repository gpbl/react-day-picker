import React from "react";

/**
 * Render the column header with the weekday name (e.g. "Mo", "Tu", etc.).
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://daypicker.dev/next/advanced-guides/custom-components
 */
export function Weekday(props: JSX.IntrinsicElements["th"]) {
  return <th {...props} />;
}

export type WeekdayProps = Parameters<typeof Weekday>[0];
