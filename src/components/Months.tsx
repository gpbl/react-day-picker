import React, { type HTMLAttributes } from "react";

/**
 * Render a container wrapping the month grids.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
export function Months(props: HTMLAttributes<HTMLDivElement>) {
  return <div {...props} />;
}

export type MonthsProps = Parameters<typeof Months>[0];
