import { Dropdown as DefaultDropdown } from '../Dropdown';
import { useDayPicker } from '../../contexts/DayPickerContext';
import { useCalendar } from '../../contexts/CalendarContext';
import { ChangeEventHandler } from 'react';
import { setMonth, startOfMonth } from 'date-fns';
import { Month } from '../../classes';

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
