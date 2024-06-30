import React, { type HTMLProps } from "react";

import type { UIProps } from "../types/index.js";

/**
 * Component wrapping the month grids.
 *
 * @group Components
 * @see https://daypicker.dev/advanced-guides/custom-components
 */
export function Months(props: HTMLProps<HTMLDivElement>) {
  return (
    <div className={props.className} style={props.style}>
      {props.children}
    </div>
  );
}

export type MonthsProps = Parameters<typeof Months>[0];
