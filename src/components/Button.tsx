import React, { ButtonHTMLAttributes } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { PropsBase } from "../types";

/**
 * The component used to generate the button elements in the calendar.
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
