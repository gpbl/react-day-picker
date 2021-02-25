import { DayLabelFormatter } from './DayLabelFormatter';
import { NavButtonLabelFormatter } from './NavButtonLabelFormatter';
import { WeekdayLabelFormatter } from './WeekdayLabelFormatter';
import { WeekNumberLabelFormatter } from './WeekNumberLabelFormatter';

/**
 * Represent a map of formatters used to format ARIA labels for the relative
 * [[UIElements]].
 */
export type Labels = {
  labelNext: NavButtonLabelFormatter;
  labelPrev: NavButtonLabelFormatter;
  labelDay: DayLabelFormatter;
  labelWeekday: WeekdayLabelFormatter;
  labelWeekNumber: WeekNumberLabelFormatter;
};
