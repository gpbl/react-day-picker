import React from "react";

/**
 * Render the row with the weekday names.
 *
 * @group Components
 * @see https://daypicker.dev/next/guides/custom-components
 */
export function Weekdays(props: JSX.IntrinsicElements["tr"]) {
  return (
    <thead>
      <tr {...props} />
    </thead>
  );
}

export type WeekdaysProps = Parameters<typeof Weekdays>[0];
