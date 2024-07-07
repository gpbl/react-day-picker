import React from "react";

/**
 * Render the grid of days in a month.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://daypicker.dev/next/advanced-guides/custom-components
 */
export function MonthGrid(props: JSX.IntrinsicElements["table"]) {
  return <table {...props} />;
}

export type MonthGridProps = Parameters<typeof MonthGrid>[0];
