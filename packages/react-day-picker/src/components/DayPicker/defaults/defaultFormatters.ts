import { Formatters } from '../../../types';
import { formatCaption } from '../utils/formatCaption';
import { formatDay } from '../utils/formatDay';
import { formatMonthCaption } from '../utils/formatMonthCaption';
import { formatWeekdayName } from '../utils/formatWeekdayName';
import { formatWeekNumber } from '../utils/formatWeekNumber';
import { formatYearCaption } from '../utils/formatYearCaption';

export const defaultFormatters: Required<Formatters> = {
  formatCaption,
  formatDay,
  formatMonthCaption,
  formatWeekdayName,
  formatWeekNumber,
  formatYearCaption
};
