import React, { HTMLAttributes } from "react";

import { UI } from "../UI.js";
import type { CalendarWeek } from "../classes/index.js";
import type { UIProps } from "../types/shared.js";

/**
 * Render a row in the calendar, with the days and the week number.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://daypicker.dev/advanced-guides/custom-components
 */
export function Week(
  props: {
    week: CalendarWeek;
    children: React.ReactNode;
  } & HTMLAttributes<HTMLTableRowElement>
) {
  return <tr {...props}>{props.children}</tr>;
}

export type WeekProps = Parameters<typeof Week>[0];
