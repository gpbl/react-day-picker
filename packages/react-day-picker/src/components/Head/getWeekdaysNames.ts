import * as DateFns from 'date-fns';

import { DayPickerProps } from '../DayPicker';
import { DEFAULT_PROPS } from '../DayPicker/defaults/props';

/**
 * Return the name of the weekdays according to the formatting function.
 */
export function getWeekdaysNames(
  locale: DateFns.Locale,
  format: DayPickerProps['formatCaption'] = DEFAULT_PROPS.formatCaption
): string[] {
  const start = DateFns.startOfWeek(new Date(), { locale });
  const names = [];
  for (let i = 0; i < 7; i++) {
    const day = DateFns.addDays(start, i);
    names.push(format(day, { locale }));
  }
  return names;
}
