import { Dropdown as DefaultDropdown } from '../Dropdown';
import { useDayPicker } from '../../contexts/DayPickerContext';
import {
  useCalendar,
  type DayPickerMonth
} from '../../contexts/CalendarContext';
import { ChangeEventHandler } from 'react';
import { setMonth, startOfMonth } from 'date-fns';

export interface MonthsDropdownProps {
  /** The month where the dropdown is displayed. */
  month: DayPickerMonth;
}
export function MonthsDropdown(props: MonthsDropdownProps) {
  const {
    classNames,
    components,
    labels: { labelMonthDropdown }
  } = useDayPicker();

  const { getDropdownMonths, goToMonth } = useCalendar();

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
      options={getDropdownMonths()}
      value={props.month.date.getMonth()}
      onChange={handleChange}
    />
  );
}
