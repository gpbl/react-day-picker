import { ChangeEventHandler } from "react";

import { setYear } from "date-fns/setYear";
import { startOfMonth } from "date-fns/startOfMonth";

import { Month } from "../classes/CalendarMonth";
import { useCalendar } from "../contexts/CalendarContext";
import { useDayPicker } from "../contexts/DayPickerContext";
import { Dropdown as DefaultDropdown } from "./Dropdown";

/** Render the dropdown to change the year. */
export function YearsDropdown(props: {
  /** The month where the dropdown is displayed. */
  month: Month;
}) {
  const {
    classNames,
    components,
    labels: { labelYearDropdown },
  } = useDayPicker();

  const { dropdown, goToMonth } = useCalendar();

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const month = setYear(
      startOfMonth(props.month.date),
      Number(e.target.value),
    );
    goToMonth(month);
  };

  const Dropdown = components?.Dropdown ?? DefaultDropdown;
  return (
    <Dropdown
      name="year"
      aria-label={labelYearDropdown()}
      rootClassName={classNames.dropdown_year}
      options={dropdown.years}
      value={props.month.date.getFullYear()}
      onChange={handleChange}
    />
  );
}
