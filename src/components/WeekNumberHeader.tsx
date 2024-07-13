import React from "react";

/**
 * Render the column header for the week numbers.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://daypicker.dev/next/guides/custom-components
 */
export function WeekNumberHeader(props: JSX.IntrinsicElements["th"]) {
  return <th {...props} />;
}

export type WeekNumberHeaderProps = Parameters<typeof WeekNumberHeader>[0];
