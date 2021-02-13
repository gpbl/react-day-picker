import {
  DayLabelFormatter,
  NavButtonLabelFormatter,
  WeekNumberLabelFormatter,
  WeekdayLabelFormatter
} from 'types';

/**
 * Represent a map of formatters used to format ARIA labels in the UI elements.
 */
export type LabelsFormatters = {
  navNext: NavButtonLabelFormatter;
  navPrev: NavButtonLabelFormatter;
  day: DayLabelFormatter;
  weekday: WeekdayLabelFormatter;
  weekNumber: WeekNumberLabelFormatter;
};
