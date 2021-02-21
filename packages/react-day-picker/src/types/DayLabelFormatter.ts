import { ModifiersStatus } from '../types';

/**
 * Represent a function to format the ARIA label for the [[Day]] component.
 */
export type DayLabelFormatter = (
  day: Date,
  modifiers: ModifiersStatus,
  options?: { locale?: Locale }
) => string;
