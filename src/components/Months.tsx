import React, { type HTMLProps } from "react";

/**
 * Component wrapping the month grids.
 *
 * @group Components
 * @see https://daypicker.dev/advanced-guides/custom-components
 */
export function Months(props: JSX.IntrinsicElements["div"]) {
  return <div {...props} />;
}

export type MonthsProps = Parameters<typeof Months>[0];
