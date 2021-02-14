import {
  DayLabelFormatter,
  NavButtonLabelFormatter,
  WeekNumberLabelFormatter,
  WeekdayLabelFormatter
} from '../types';

/**
 * Represent a map of formatters used to format ARIA labels for the relative
 * [[UIElements]].
 */
export type LabelsFormatters = {
  NavButtonNext?: NavButtonLabelFormatter;
  NavButtonPrev?: NavButtonLabelFormatter;
  Day?: DayLabelFormatter;
  HeadCell?: WeekdayLabelFormatter;
  RowHead?: WeekNumberLabelFormatter;
};
