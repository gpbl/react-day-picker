import React from "react";

import { UI } from "../UI";
import type { CalendarMonth } from "../classes/CalendarMonth";
import { useProps } from "../contexts";

/**
 * Render the grid with the weekday header row and the weeks for the given
 * month.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://daypicker.dev/advanced-guides/custom-components
 */
export function Month(props: {
  /** The month where the grid is displayed. */
  month: CalendarMonth;
  /** The index where this month is displayed. */
  index: number;
  children: React.ReactNode;
}) {
  const { classNames, styles } = useProps();
  return (
    <div
      className={classNames[UI.MonthWrapper]}
      style={styles?.[UI.MonthWrapper]}
    >
      {props.children}
    </div>
  );
}

export type MonthProps = Parameters<typeof Month>[0];
