import type { ChangeEventHandler } from 'react';

import { setMonth } from 'date-fns/setMonth';
import { startOfMonth } from 'date-fns/startOfMonth';

import { Month } from '../../classes';
import { useCalendar } from '../../contexts/CalendarContext';
import { useDayPicker } from '../../contexts/DayPickerContext';
import { Dropdown as DefaultDropdown } from '../Dropdown';

export interface MonthsDropdownProps {
  /** The month where the dropdown is displayed. */
  month: Month;
}
export function MonthsDropdown(props: MonthsDropdownProps) {
  const {
    classNames,
    components,
    labels: { labelMonthDropdown }
  } = useDayPicker();

  const { dropdown, goToMonth } = useCalendar();

  const Dropdown = components?.Dropdown ?? DefaultDropdown;

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const selectedMonth = Number(e.target.value);
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
