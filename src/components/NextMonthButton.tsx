import React, { type ButtonHTMLAttributes } from "react";

/**
 * Render the button to navigate to the next month in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
export function NextMonthButton(
  props: ButtonHTMLAttributes<HTMLButtonElement>,
) {
  return <button {...props} />;
}

export type NextMonthButtonProps = Parameters<typeof NextMonthButton>[0];
