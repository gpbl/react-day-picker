import React from "react";
import type { ChangeEventHandler } from "react";

import { UI } from "../UI.js";
import type { CalendarMonth } from "../classes/CalendarMonth.js";
import type { UIProps } from "../types/index.js";

import { Dropdown as DefaultDropdown } from "./Dropdown.js";

/**
 * Render the dropdown to change the year.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://daypicker.dev/advanced-guides/custom-components
 */
export function YearsDropdown(
  props: {
    /** The month where the dropdown is displayed. */
    month: CalendarMonth;
  } & UIProps
) {
  const {
    classNames,
    components,
    dateLib: { startOfMonth, setYear },
    disableNavigation,
    labels: { labelYearDropdown }
  } = props.props;

  const { dropdownOptions, goToMonth } = props.calendar;

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const month = setYear(
      startOfMonth(props.month.date),
      Number(e.target.value)
    );
    goToMonth(month);
  };

  const Dropdown = components?.Dropdown ?? DefaultDropdown;
  return (
    <Dropdown
      aria-label={labelYearDropdown()}
      disabled={Boolean(disableNavigation)}
      rootClassName={classNames[UI.YearsDropdown]}
      options={dropdownOptions.years}
      value={props.month.date.getFullYear()}
      onChange={handleChange}
    />
  );
}
