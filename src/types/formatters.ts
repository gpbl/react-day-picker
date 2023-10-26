import { formatCaption } from '../formatters/formatCaption';
import { formatDay } from '../formatters/formatDay';
import { formatMonthCaption } from '../formatters/formatMonthCaption';
import { formatWeekdayName } from '../formatters/formatWeekdayName';
import { formatWeekNumber } from '../formatters/formatWeekNumber';
import { formatYearCaption } from '../formatters/formatYearCaption';

/** Represent a map of formatters used to render localized content. */
export type Formatters = {
  /** Format the month in the caption when `captionLayout` is `buttons`. */
  formatCaption: typeof formatCaption;
  /** Format the month in the navigation dropdown. */
  formatMonthCaption: typeof formatMonthCaption;
  /** Format the year in the navigation dropdown. */
  formatYearCaption: typeof formatYearCaption;
  /** Format the day in the day cell. */
  formatDay: typeof formatDay;
  /** Format the week number. */
  formatWeekNumber: typeof formatWeekNumber;
  /** Format the week day name in the header */
  formatWeekdayName: typeof formatWeekdayName;
};
