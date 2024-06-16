import React from "react";

import { usePropsContext } from "../contexts/usePropsContext";
import { UI } from "../UI";
import type { CalendarMonth } from "../classes";

import { MonthsDropdown } from "./MonthsDropdown";
import { YearsDropdown } from "./YearsDropdown";

/**
 * Render the dropdowns to navigate between months.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://react-day-picker.js.org/advanced-guides/custom-components
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
  const { classNames, styles } = usePropsContext();

  return (
    <div
      className={classNames[UI.DropdownNav]}
      style={styles?.[UI.DropdownNav]}
    >
      {props.showMonths && <MonthsDropdown month={props.month} />}
      {props.showYears && <YearsDropdown month={props.month} />}
    </div>
  );
}

export type DropdownNavProps = Parameters<typeof DropdownNav>[0];
