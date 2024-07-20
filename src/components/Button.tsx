import React from "react";

/**
 * Render the button elements in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/next/guides/custom-components
 */
export function Button(props: JSX.IntrinsicElements["button"]) {
  return <button {...props} />;
}

export type ButtonProps = Parameters<typeof Button>[0];
