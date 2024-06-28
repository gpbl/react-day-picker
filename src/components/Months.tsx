import React, { type HTMLProps } from "react";

import type { UIProps } from "../types/index.js";

/**
 * Component wrapping the month grids.
 *
 * @group Components
 * @see https://daypicker.dev/advanced-guides/custom-components
 */
export function Months(
  props: Pick<HTMLProps<HTMLElement>, "children" | "className" | "style"> &
    UIProps
) {
  return <div {...props}>{props.children}</div>;
}

export type MonthsProps = Parameters<typeof Months>[0];
