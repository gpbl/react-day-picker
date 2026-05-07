import React, { type TableHTMLAttributes } from "react";

/**
 * Render the grid of days for a specific month.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
export function MonthGrid(props: TableHTMLAttributes<HTMLTableElement>) {
  return <table {...props} />;
}

/** Props accepted by the {@link MonthGrid} component. */
export type MonthGridProps = Parameters<typeof MonthGrid>[0];
