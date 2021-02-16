import { Formatters } from '../../../types';
import { formatDay } from '../utils/formatDay';
import { formatMonthCaption } from '../utils/formatMonthCaption';
import { formatWeekdayName } from '../utils/formatWeekdayName';
import { formatWeekNumber } from '../utils/formatWeekNumber';
import { formatYearCaption } from '../utils/formatYearCaption';

/**
 * The formatters for the ARIA labels used across the component.
 *
 * Change the default formatters using the
 * [[DayPickerComponentProps.labels]] prop.
 */
export const defaultFormatters: Required<Formatters> = {
  formatDay,
  formatMonthCaption,
  formatWeekdayName,
  formatWeekNumber,
  formatYearCaption
};
