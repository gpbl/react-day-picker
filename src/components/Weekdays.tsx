import React, { HTMLProps } from "react";

/**
 * Render the row with the weekday names.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://daypicker.dev/advanced-guides/custom-components
 */
export function Weekdays(props: JSX.IntrinsicElements["tr"]) {
  return <tr {...props} />;
}

export type WeekdaysProps = Parameters<typeof Weekdays>[0];
