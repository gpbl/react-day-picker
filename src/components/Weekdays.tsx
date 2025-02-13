import React, { type HTMLAttributes } from "react";

/**
 * Render the row with the weekday names.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
export function Weekdays(props: HTMLAttributes<HTMLTableRowElement>) {
  return (
    <thead aria-hidden>
      <tr {...props} />
    </thead>
  );
}

export type WeekdaysProps = Parameters<typeof Weekdays>[0];
