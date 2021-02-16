import { DayLabelFormatter } from './DayLabelFormatter';
import { NextLabelFormatter } from './NextLabelFormatter';
import { WeekdayLabelFormatter } from './WeekdayLabelFormatter';
import { WeekNumberLabelFormatter } from './WeekNumberLabelFormatter';

/**
 * Represent a map of formatters used to format ARIA labels for the relative
 * [[UIElements]].
 */
export type Labels = {
  nextLabel?: NextLabelFormatter;
  prevLabel?: NextLabelFormatter;
  dayLabel?: DayLabelFormatter;
  weekdayLabel?: WeekdayLabelFormatter;
  weekNumberLabel?: WeekNumberLabelFormatter;
};
