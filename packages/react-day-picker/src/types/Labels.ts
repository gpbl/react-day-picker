import {
  DayLabelFormatter,
  NextLabelFormatter,
  WeekNumberLabelFormatter,
  WeekdayLabelFormatter
} from '.';

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
