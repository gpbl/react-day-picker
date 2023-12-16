import {
  addYears,
  endOfYear,
  isBefore,
  isSameYear,
  startOfYear
} from 'date-fns';
import { DayPickerContext } from '../../DayPickerContext';
import { DropdownOption } from '../../../components';
import { Formatters, Mode } from '../../../types';

export function getDropdownYears(
  dayPicker: Pick<DayPickerContext<Mode>, 'fromDate' | 'toDate'> & {
    formatters: Pick<Formatters, 'formatYearDropdown'>;
  }
): DropdownOption[] | undefined {
  if (!dayPicker.fromDate) return undefined;
  if (!dayPicker.toDate) return undefined;
  const firstNavYear = startOfYear(dayPicker.fromDate);
  const lastNavYear = endOfYear(dayPicker.toDate);
  const years: number[] = [];
  let year = firstNavYear;
  while (isBefore(year, lastNavYear) || isSameYear(year, lastNavYear)) {
    years.push(year.getFullYear());
    year = addYears(year, 1);
  }
  return years.map((year) => [
    year,
    dayPicker.formatters.formatYearDropdown(year)
  ]);
}
