import { ModifierStatus } from '../types';

/**
 * Represent a function to format the ARIA label for the [[Day]] component.
 */
export type DayLabelFormatter = (
  day: Date,
  modifiers: ModifierStatus,
  options?: { locale?: Locale }
) => string;
