import {
  defaultFormatCaption,
  defaultLocale
} from '../DayPicker/defaults/props';
import * as DateFns from 'date-fns';

import { DayPickerProps } from '../DayPicker';

/**
 * Return the name of the weekdays according to the formatting function.
 */
export function getWeekdaysNames(
  locale: DateFns.Locale,
  format: DayPickerProps['formatCaption'] = defaultFormatCaption
): string[] {
  const start = DateFns.startOfWeek(new Date(), { locale });
  const names = [];
  for (let i = 0; i < 7; i++) {
    const day = DateFns.addDays(start, i);
    names.push(format(day, { locale: locale || defaultLocale }));
  }
  return names;
}
