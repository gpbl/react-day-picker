import { DateFormatter } from './DateFormatter';
import { WeekdayFormatter } from './WeekdayFormatter';
import { WeekNumberFormatter } from './WeekNumberFormatter';

/**
 * Represent a map of formatters used to format ARIA labels for the relative
 * [[UIElements]].
 */
export type Formatters = {
  formatMonthCaption?: DateFormatter;
  formatYearCaption?: DateFormatter;
  formatDay?: DateFormatter;
  formatWeekNumber?: WeekNumberFormatter;
  formatWeekdayName?: WeekdayFormatter;
};
