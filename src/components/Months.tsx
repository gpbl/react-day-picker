import React from "react";

/**
 * Component wrapping the month grids.
 *
 * @group Components
 * @see https://daypicker.dev/next/advanced-guides/custom-components
 */
export function Months(props: JSX.IntrinsicElements["div"]) {
  return <div {...props} />;
}

export type MonthsProps = Parameters<typeof Months>[0];
