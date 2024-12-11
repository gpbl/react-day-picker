import React, { type HTMLAttributes } from "react";

/**
 * Render the button elements in the calendar.
 *
 * @private
 * @deprecated Use `PreviousMonthButton` or `@link NextMonthButton` instead.
 */
export function Button(props: HTMLAttributes<HTMLButtonElement>) {
  return <button {...props} />;
}

export type ButtonProps = Parameters<typeof Button>[0];
