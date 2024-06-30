import React, { HTMLAttributes } from "react";

/**
 * Render the grid of days in a month.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://daypicker.dev/advanced-guides/custom-components
 */
export function MonthGrid(props: HTMLAttributes<HTMLTableElement>) {
  return <table {...props} />;
}

export type MonthGridProps = Parameters<typeof MonthGrid>[0];
