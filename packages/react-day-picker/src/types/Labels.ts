import { DayLabelFormatter } from './DayLabelFormatter';
import { NavButtonLabelFormatter } from './NavButtonLabelFormatter';
import { WeekdayLabelFormatter } from './WeekdayLabelFormatter';
import { WeekNumberLabelFormatter } from './WeekNumberLabelFormatter';

/**
 * Represent a map of functions to translate ARIA labels for the relative elements.
 */
export type Labels = {
  labelMonthDropdown: () => string;
  labelYearDropdown: () => string;
  labelNext: NavButtonLabelFormatter;
  labelPrevious: NavButtonLabelFormatter;
  labelDay: DayLabelFormatter;
  labelWeekday: WeekdayLabelFormatter;
  labelWeekNumber: WeekNumberLabelFormatter;
};
