import React from "react";

/**
 * Render the row with the weekday names.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://daypicker.dev/next/advanced-guides/custom-components
 */
export function Weekdays(props: JSX.IntrinsicElements["tr"]) {
  return (
    <thead>
      <tr {...props} />
    </thead>
  );
}

export type WeekdaysProps = Parameters<typeof Weekdays>[0];
