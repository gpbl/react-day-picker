import React from "react";
import type { HTMLProps } from "react";

/**
 * Component wrapping the month grids.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://react-day-picker.js.org/advanced-guides/custom-components
 */
export function Months(
  props: Pick<HTMLProps<HTMLElement>, "children" | "className" | "style">
) {
  return <div {...props}>{props.children}</div>;
}

export type MonthsProps = Parameters<typeof Months>[0];
