import React from "react";

import { UI } from "../UI.js";
import { useProps } from "../contexts/index.js";
import { getWeekdays } from "../helpers/getWeekdays.js";

import { Weekday as DefaultWeekday } from "./Weekday.js";

/**
 * Render the row with the weekday names.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://daypicker.dev/advanced-guides/custom-components
 */
export function Weekdays() {
  const {
    classNames,
    components,
    dateLib,
    hideWeekdayRow,
    ISOWeek,
    locale,
    showWeekNumber,
    styles,
    weekStartsOn
  } = useProps();

  const weekdays = getWeekdays(locale, weekStartsOn, ISOWeek, dateLib);
  const Weekday = components?.Weekday ?? DefaultWeekday;

  return (
    <tr
      role="row"
      hidden={hideWeekdayRow}
      aria-rowindex={1}
      style={styles?.[UI.Weekdays]}
      className={classNames[UI.Weekdays]}
      onClick={(e) => e.stopPropagation()}
    >
      {showWeekNumber && <Weekday aria-colindex={1} />}
      {weekdays.map((weekday, i) => (
        <Weekday
          key={i}
          weekday={weekday}
          aria-colindex={showWeekNumber ? i + 2 : i + 1}
        />
      ))}
    </tr>
  );
}
