import React from "react";

/**
 * Render the button elements in the calendar.
 *
 * @private
 * @deprecated Use `PreviousMonthButton` or `@link NextMonthButton` instead.
 */
export function Button(props: JSX.IntrinsicElements["button"]) {
  return <button {...props} />;
}

export type ButtonProps = Parameters<typeof Button>[0];
