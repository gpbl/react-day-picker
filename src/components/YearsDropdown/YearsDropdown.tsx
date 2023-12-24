import { ChangeEventHandler } from 'react';

import { setYear, startOfMonth } from 'date-fns';

import { Month } from '../../classes/CalendarMonth';
import { useCalendar } from '../../contexts/CalendarContext';
import { useDayPicker } from '../../contexts/DayPickerContext';
import { Dropdown as DefaultDropdown } from '../Dropdown';

export interface YearsDropdownProps {
  /** The month where the dropdown is displayed. */
  month: Month;
}
export function YearsDropdown(props: YearsDropdownProps) {
  const {
    classNames,
    components,
    labels: { labelYearDropdown }
  } = useDayPicker();

  const { dropdown, goToMonth } = useCalendar();

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
      rootClassName={classNames.dropdown_year}
      options={dropdown.years}
      value={props.month.date.getFullYear()}
      onChange={handleChange}
    />
  );
}
