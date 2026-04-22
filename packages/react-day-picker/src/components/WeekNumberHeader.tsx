import React, { type ThHTMLAttributes } from "react";

/**
 * Render the header cell for the week numbers column.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
export function WeekNumberHeader(
  props: ThHTMLAttributes<HTMLTableCellElement>,
) {
  return <th {...props} />;
}

export type WeekNumberHeaderProps = Parameters<typeof WeekNumberHeader>[0];
