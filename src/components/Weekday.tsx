import React from "react";

import { UI } from "../UI.js";
import type { UIProps } from "../types/index.js";

/**
 * Render the column header with the weekday name (e.g. "Mo", "Tu", etc.).
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://daypicker.dev/advanced-guides/custom-components
 */
export function Weekday(
  props: {
    ["aria-colindex"]?: number | undefined;
    ["aria-label"]?: string | undefined;
    weekday?: Date;
  } & UIProps
) {
  const {
    classNames,
    dateLib,
    formatters: { formatWeekdayName },
    labels: { labelWeekday, labelWeekNumberHeader },
    locale,
    hideWeekdayRow,
    styles
  } = props.props;
  return (
    <th
      role="columnheader"
      aria-colindex={props["aria-colindex"]}
      aria-label={
        props.weekday
          ? labelWeekday(props.weekday, { locale }, dateLib)
          : labelWeekNumberHeader({ locale })
      }
      className={classNames[UI.Weekday]}
      style={styles?.[UI.Weekday]}
    >
      {!hideWeekdayRow &&
        (props.weekday
          ? formatWeekdayName(props.weekday, { locale }, dateLib)
          : "#")}
    </th>
  );
}

export type WeekdayProps = Parameters<typeof Weekday>[0];
