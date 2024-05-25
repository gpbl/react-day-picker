import type { ChangeEventHandler } from "react";

import { setMonth } from "date-fns/setMonth";
import { startOfMonth } from "date-fns/startOfMonth";

import type { CalendarMonth } from "../classes";
import { useCalendar } from "../contexts/calendar";
import { useProps } from "../contexts/props";

import { Dropdown as DefaultDropdown } from "./Dropdown";

/**
 * Render the dropdown to change the month.
 *
 * @group Components
 */
export function MonthsDropdown(props: {
  /** The month where the dropdown is displayed. */
  month: CalendarMonth;
}) {
  const {
    classNames,
    components,
    labels: { labelMonthDropdown }
  } = useProps();

  const { dropdownOptions: dropdown, goToMonth } = useCalendar();

  const Dropdown = components?.Dropdown ?? DefaultDropdown;

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const selectedMonth = Number((e.target as HTMLSelectElement).value);
    const month = setMonth(startOfMonth(props.month.date), selectedMonth);
    goToMonth(month);
  };

  return (
    <Dropdown
      name="month"
      aria-label={labelMonthDropdown()}
      rootClassName={classNames.months_dropdown}
      options={dropdown.months}
      value={props.month.date.getMonth()}
      onChange={handleChange}
    />
  );
}
