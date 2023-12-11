import { addMonths, isBefore, startOfMonth } from 'date-fns';
import { DayPickerContext } from '../../DayPickerContext';
import { DropdownOption } from '../../../components';
import { Mode } from '../../../types';

export function getDropdownMonths(
  dayPicker: DayPickerContext<Mode>
): DropdownOption[] | undefined {
  if (!dayPicker.fromDate) return undefined;
  if (!dayPicker.toDate) return undefined;
  const navStartMonth = startOfMonth(dayPicker.fromDate);
  const navEndMonth = startOfMonth(dayPicker.toDate);

  const months: number[] = [];
  let month = navStartMonth;
  while (months.length < 12 && isBefore(month, addMonths(navEndMonth, 1))) {
    months.push(month.getMonth());
    month = addMonths(month, 1);
  }
  const sortedMonths = months.sort((a, b) => {
    return a - b;
  });
  const options = sortedMonths.map((m) => {
    const label = dayPicker.formatters.formatMonthDropdown(m, dayPicker.locale);
    const option: [number, string] = [m, label];
    return option;
  });
  return options;
}
