import { WeekNumberLabelFormatter } from '../../../types';

/**
 * The default ARIA label for the WeekNumber element.
 */
export const labelWeekNumber: WeekNumberLabelFormatter = (n): string => {
  return `Week n. ${n}`;
};
