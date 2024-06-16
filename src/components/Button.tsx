import React, { ButtonHTMLAttributes } from "react";

/**
 * Render the button elements in the calendar.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://react-day-picker.js.org/advanced-guides/custom-components
 */
export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props} />;
}

export type ButtonProps = Parameters<typeof Button>[0];
