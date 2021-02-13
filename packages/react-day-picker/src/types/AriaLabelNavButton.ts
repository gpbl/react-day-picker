import { DayPickerProps } from 'types';

/**
 * Represent a function returning the `aria-label` for a navigation button.
 */
export type AriaLabelNavButton = (month: Date, props: DayPickerProps) => string;
