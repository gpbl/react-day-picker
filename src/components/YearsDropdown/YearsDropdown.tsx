import { useDayPicker } from '../../contexts/DayPickerContext';
import {
  useCalendar,
  type DayPickerMonth
} from '../../contexts/CalendarContext';
import { Dropdown as DefaultDropdown } from '../Dropdown';

export interface YearsDropdownProps {
  month: DayPickerMonth;
}
export function YearsDropdown(props: YearsDropdownProps) {
  const { classNames, components } = useDayPicker();

  const { getDropdownYears } = useCalendar();

  const Dropdown = components?.Dropdown ?? DefaultDropdown;

  return (
    <Dropdown
      name="year"
      rootClassName={classNames.dropdown_year}
      options={getDropdownYears()}
      value={props.month.date.getFullYear()}
    />
  );
}
