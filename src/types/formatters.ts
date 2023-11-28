import { formatCaption } from '../formatters/formatCaption';
import { formatDay } from '../formatters/formatDay';
import {
  formatYearDropdown,
  formatYearCaption
} from '../formatters/formatYearDropdown';
import { formatWeekdayName } from '../formatters/formatWeekdayName';
import { formatWeekNumber } from '../formatters/formatWeekNumber';
import {
  formatMonthCaption,
  formatMonthDropdown
} from '../formatters/formatMonthDropdown';

/** Represent a map of formatters used to render localized content. */
export type Formatters = {
  /** Format the caption of a month grid. */
  formatCaption: typeof formatCaption;
  /** @deprecated Use {@link Formatters.formatCaption} instead. */
  formatMonthCaption: typeof formatMonthCaption;
  /** Format the label in the month drop-down. */
  formatMonthDropdown: typeof formatMonthDropdown;
  /** @deprecated Use {@link Formatters.formatYearDropdown} instead. */
  formatYearCaption: typeof formatYearCaption;
  /** Format the label in the year drop-down. */
  formatYearDropdown: typeof formatYearDropdown;
  /** Format the day in the day cell. */
  formatDay: typeof formatDay;
  /** Format the week number. */
  formatWeekNumber: typeof formatWeekNumber;
  /** Format the week day name in the header */
  formatWeekdayName: typeof formatWeekdayName;
};
