import React from "react";

/**
 * Render the previous month button element in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
export function PreviousMonthButton(props: JSX.IntrinsicElements["button"]) {
  return <button {...props} />;
}

export type PreviousMonthButtonProps = Parameters<
  typeof PreviousMonthButton
>[0];
