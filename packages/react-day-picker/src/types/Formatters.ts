import { DateFormatter } from './DateFormatter';
import { WeekdayFormatter } from './WeekdayFormatter';
import { WeekNumberFormatter } from './WeekNumberFormatter';

/**
 * Represent a map of formatters used to render localized content.
 */
export type Formatters = {
  formatCaption?: DateFormatter;
  formatMonthCaption?: DateFormatter;
  formatYearCaption?: DateFormatter;
  formatDay?: DateFormatter;
  formatWeekNumber?: WeekNumberFormatter;
  formatWeekdayName?: WeekdayFormatter;
};
