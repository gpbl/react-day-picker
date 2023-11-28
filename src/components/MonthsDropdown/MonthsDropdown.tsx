import { useDayPicker } from '../../contexts/DayPickerContext';
import {
  useCalendar,
  type DayPickerMonth
} from '../../contexts/CalendarContext';
import { Dropdown as DefaultDropdown } from '../Dropdown';

export interface MonthsDropdownProps {
  month: DayPickerMonth;
}
export function MonthsDropdown(props: MonthsDropdownProps) {
  const {
    classNames,
    locale,
    formatters: { formatMonthDropdown },
    components
  } = useDayPicker();

  const calendar = useCalendar();

  const Dropdown = components?.Dropdown ?? DefaultDropdown;

  const options = calendar.months.map((month) => {
    return {
      value: month.date.toISOString(),
      label: formatMonthDropdown(month.date, { locale })
    };
  });

  return (
    <Dropdown
      name="month"
      rootClassName={classNames.months_dropdown}
      options={options}
      value={formatMonthDropdown(props.month.date, { locale })}
    />
  );
}
