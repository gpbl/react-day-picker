import { Formatters } from '../../../types';
import { formatDay } from '../utils/formatDay';
import { formatMonthCaption } from '../utils/formatMonthCaption';
import { formatWeekdayName } from '../utils/formatWeekdayName';
import { formatWeekNumber } from '../utils/formatWeekNumber';
import { formatYearCaption } from '../utils/formatYearCaption';

export const defaultFormatters: Required<Formatters> = {
  formatDay,
  formatMonthCaption,
  formatWeekdayName,
  formatWeekNumber,
  formatYearCaption
};
