import { DayPickerProps } from 'types';

/**
 * Represent a function to format the ARIA label of the week number.
 */
export type WeekNumberLabelFormatter = (
  n: number,
  props: DayPickerProps
) => string;
