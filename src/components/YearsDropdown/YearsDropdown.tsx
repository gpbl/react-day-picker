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
  const {
    classNames,
    locale,
    formatters: { formatYearDropdown },
    components
  } = useDayPicker();

  const calendar = useCalendar();

  const Dropdown = components?.Dropdown ?? DefaultDropdown;

  const options = calendar.months.map((month) => {
    return {
      value: month.date.toISOString(),
      label: formatYearDropdown(month.date, { locale })
    };
  });

  return (
    <Dropdown
      name="year"
      rootClassName={classNames.years_dropdown}
      options={options}
      value={formatYearDropdown(props.month.date, { locale })}
    />
  );
}
