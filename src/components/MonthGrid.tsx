import React from "react";

/**
 * Render the grid of days in a month.
 *
 * @group Components
 * @see https://daypicker.dev/next/guides/custom-components
 */
export function MonthGrid(props: JSX.IntrinsicElements["table"]) {
  return <table {...props} />;
}

export type MonthGridProps = Parameters<typeof MonthGrid>[0];
