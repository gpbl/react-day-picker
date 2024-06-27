import React from "react"

import { UI } from "../UI.js"
import type { CalendarMonth } from "../classes/index.js"
import { useProps } from "../contexts/index.js"

import { MonthsDropdown } from "./MonthsDropdown.js"
import { YearsDropdown } from "./YearsDropdown.js"

/**
 * Render the dropdowns to navigate between months.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://daypicker.dev/advanced-guides/custom-components
 */
export function DropdownNav(props: {
  /** The month where the dropdown navigation is displayed. */
  month: CalendarMonth;
  /** Whether the user can change the month. */
  showMonths?: boolean;
  /** Whether the user can change the year. */
  showYears?: boolean;
  /** The index where this month is displayed. */
  index: number;
}) {
  const {
    classNames,
    styles,
    formatters: { formatMonthDropdown, formatYearDropdown }
  } = useProps();

  return (
    <div
      className={classNames[UI.DropdownNav]}
      style={styles?.[UI.DropdownNav]}
    >
      {props.showMonths ? (
        <MonthsDropdown month={props.month} />
      ) : (
        <span role="status" aria-live="polite">
          {formatMonthDropdown(props.month.date.getMonth())}
        </span>
      )}
      {props.showYears ? (
        <YearsDropdown month={props.month} />
      ) : (
        <span role="status" aria-live="polite">
          {formatYearDropdown(props.month.date.getFullYear())}
        </span>
      )}
    </div>
  );
}

export type DropdownNavProps = Parameters<typeof DropdownNav>[0];
