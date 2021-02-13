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
  navNextButton: NavButtonLabelFormatter;
  navPrevButton: NavButtonLabelFormatter;
  day: DayLabelFormatter;
  headCell: WeekdayLabelFormatter;
  rowHead: WeekNumberLabelFormatter;
};
