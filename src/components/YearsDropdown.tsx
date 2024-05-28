import type { ChangeEventHandler } from "react";

import { setYear } from "date-fns/setYear";
import { startOfMonth } from "date-fns/startOfMonth";

import { UI } from "../UI";
import type { CalendarMonth } from "../classes/CalendarMonth";
import { useCalendar } from "../contexts/calendar";
import { useProps } from "../contexts/props";

import { Dropdown as DefaultDropdown } from "./Dropdown";

/**
 * Render the dropdown to change the year.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://react-day-picker.js.org/advanced-guides/custom-components
 */
export function YearsDropdown(props: {
  /** The month where the dropdown is displayed. */
  month: CalendarMonth;
}) {
  const {
    classNames,
    components,
    labels: { labelYearDropdown }
  } = useProps();

  const { dropdownOptions: dropdown, goToMonth } = useCalendar();

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
      name="year"
      aria-label={labelYearDropdown()}
      rootClassName={classNames[UI.YearsDropdown]}
      options={dropdown.years}
      value={props.month.date.getFullYear()}
      onChange={handleChange}
    />
  );
}
