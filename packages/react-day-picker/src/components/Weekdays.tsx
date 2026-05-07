import React, { type HTMLAttributes } from "react";

/**
 * Render the table row containing the weekday names.
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

/** Props accepted by the {@link Weekdays} component. */
export type WeekdaysProps = Parameters<typeof Weekdays>[0];
