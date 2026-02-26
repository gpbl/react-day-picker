import React, { type ButtonHTMLAttributes } from "react";

/**
 * Render the button to navigate to the previous month in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
export function PreviousMonthButton(
  props: ButtonHTMLAttributes<HTMLButtonElement>,
) {
  return <button {...props} />;
}

export type PreviousMonthButtonProps = Parameters<
  typeof PreviousMonthButton
>[0];
