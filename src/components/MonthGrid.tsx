import React, { type TableHTMLAttributes } from "react";

/**
 * Render the grid of days in a month.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
export function MonthGrid(props: TableHTMLAttributes<HTMLTableElement>) {
  return <table {...props} />;
}

export type MonthGridProps = Parameters<typeof MonthGrid>[0];
