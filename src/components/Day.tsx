import React from "react";
import type { ReactNode } from "react";

import { UI } from "../UI";
import type { CalendarDay } from "../classes";
import { useProps } from "../contexts";
import type { Modifiers } from "../types";

/**
 * Render the gridcell of a day in the calendar and handle the interaction and
 * the focus with they day.
 *
 * Use the `components` prop to swap this component with a custom one. If you
 * need to just change the content of the day cell, consider swapping the
 * `DayDate` component instead.
 *
 * @group Components
 * @see https://daypicker.dev/advanced-guides/custom-components
 */
export function Day(
  props: {
    day: CalendarDay;
    modifiers: Modifiers;
    children?: ReactNode;
  } & JSX.IntrinsicElements["td"]
) {
  const { day, modifiers, ...tdProps } = props;
  const { classNames, styles } = useProps();
  return (
    <td className={classNames[UI.Day]} style={styles?.[UI.Day]} {...tdProps} />
  );
}

export type DayProps = Parameters<typeof Day>[0];
