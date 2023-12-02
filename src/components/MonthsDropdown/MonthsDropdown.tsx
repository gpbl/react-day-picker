import { Dropdown as DefaultDropdown } from '../Dropdown';
import { useDayPicker } from '../../contexts/DayPickerContext';
import {
  useCalendar,
  type DayPickerMonth
} from '../../contexts/CalendarContext';

export interface MonthsDropdownProps {
  month: DayPickerMonth;
}
export function MonthsDropdown(props: MonthsDropdownProps) {
  const { classNames, components } = useDayPicker();

  const { getDropdownMonths } = useCalendar();

  const Dropdown = components?.Dropdown ?? DefaultDropdown;

  return (
    <Dropdown
      name="month"
      rootClassName={classNames.months_dropdown}
      options={getDropdownMonths()}
      value={props.month.date.getMonth()}
      onChange={
        () => {}
        // goToMonth(new Date(props.month.date.getFullYear(), Number(value), 1))
      }
    />
  );
}
