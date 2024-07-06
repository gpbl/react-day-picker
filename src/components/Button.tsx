import React from "react";

/**
 * Render the button elements in the calendar.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://daypicker.dev/advanced-guides/custom-components
 */
export function Button(props: JSX.IntrinsicElements["button"]) {
  return <button {...props} />;
}

export type ButtonProps = Parameters<typeof Button>[0];
