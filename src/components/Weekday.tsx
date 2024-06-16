import React from "react";

import { UI } from "../UI";
import { usePropsContext } from "../contexts/usePropsContext";

/**
 * Render the column header with the weekday name (e.g. "Mo", "Tu", etc.).
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://react-day-picker.js.org/advanced-guides/custom-components
 */
export function Weekday(props: {
  ["aria-colindex"]?: number | undefined;
  ["aria-label"]?: string | undefined;
  weekday?: Date;
}) {
  const {
    classNames,
    formatters: { formatWeekdayName },
    labels: { labelWeekday, labelWeekNumberHeader },
    locale,
    hideWeekdayRow,
    styles
  } = usePropsContext();
  return (
    <span
      role="columnheader"
      aria-colindex={props["aria-colindex"]}
      aria-label={
        props.weekday
          ? labelWeekday(props.weekday, { locale })
          : labelWeekNumberHeader({ locale })
      }
      className={classNames[UI.Weekday]}
      style={styles?.[UI.Weekday]}
    >
      {!hideWeekdayRow &&
        (props.weekday ? formatWeekdayName(props.weekday, { locale }) : "#")}
    </span>
  );
}

export type WeekdayProps = Parameters<typeof Weekday>[0];
