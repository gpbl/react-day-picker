import React from "react";

/**
 * Render the next month button element in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
export function NextMonthButton(props: JSX.IntrinsicElements["button"]) {
  return <button {...props} />;
}

export type NextMonthButtonProps = Parameters<typeof NextMonthButton>[0];
