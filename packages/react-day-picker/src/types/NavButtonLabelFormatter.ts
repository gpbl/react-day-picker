import { DayPickerProps } from 'types';

/**
 * Represent a function to format the ARIA label for a navigation button.
 */
export type NavButtonLabelFormatter = (
  month: Date,
  props: DayPickerProps
) => string;
