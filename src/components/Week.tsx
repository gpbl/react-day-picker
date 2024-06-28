import React from "react";

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
    ["aria-rowindex"]: number;
    week: CalendarWeek;
    children: React.ReactNode;
  } & UIProps
) {
  const { styles, classNames } = props.props;

  return (
    <tr
      role="row"
      aria-rowindex={props["aria-rowindex"]}
      className={classNames[UI.Week]}
      style={styles?.[UI.Week]}
    >
      {props.children}
    </tr>
  );
}

export type WeekProps = Parameters<typeof Week>[0];
