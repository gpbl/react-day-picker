import { DateFormatter } from './DateFormatter';
import { WeekdayFormatter } from './WeekdayFormatter';
import { WeekNumberFormatter } from './WeekNumberFormatter';

/**
 * Represent a map of formatters used to render localized content.
 */
export type Formatters = {
  /** Format the month in the caption when `captionLayout` is `buttons`. */
  formatCaption?: DateFormatter;
  /** Format the month in the navigation dropdown. */
  formatMonthCaption?: DateFormatter;
  /** Format the year in the navigation dropdown. */
  formatYearCaption?: DateFormatter;
  /** Format the day in the day cell. */
  formatDay?: DateFormatter;
  /** Format the week number. */
  formatWeekNumber?: WeekNumberFormatter;
  /** Format the week day name in the header */
  formatWeekdayName?: WeekdayFormatter;
};
