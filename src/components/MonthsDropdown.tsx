import React from "react";
import type { ChangeEventHandler } from "react";

import { UI } from "../UI";
import type { CalendarMonth } from "../classes";
import { useCalendar, useProps } from "../contexts";

import { Dropdown as DefaultDropdown } from "./Dropdown";

/**
 * Render the dropdown to change the month.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://react-day-picker.js.org/advanced-guides/custom-components
 */
export function MonthsDropdown(props: {
  /** The month where the dropdown is displayed. */
  month: CalendarMonth;
}) {
  const {
    classNames,
    components,
    disableNavigation,
    dateLib: { setMonth, startOfMonth },
    labels: { labelMonthDropdown }
  } = useProps();

  const { dropdownOptions, goToMonth } = useCalendar();

  const Dropdown = components?.Dropdown ?? DefaultDropdown;

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const selectedMonth = Number((e.target as HTMLSelectElement).value);
    const month = setMonth(startOfMonth(props.month.date), selectedMonth);
    goToMonth(month);
  };

  return (
    <Dropdown
      aria-label={labelMonthDropdown()}
      disabled={Boolean(disableNavigation)}
      rootClassName={classNames[UI.MonthsDropdown]}
      options={dropdownOptions.months}
      value={props.month.date.getMonth()}
      onChange={handleChange}
    />
  );
}

export type MonthsDropdownProps = Parameters<typeof MonthsDropdown>[0];
