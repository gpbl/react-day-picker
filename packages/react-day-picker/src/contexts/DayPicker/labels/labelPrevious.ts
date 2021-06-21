import { NavButtonLabelFormatter } from 'types';

/**
 * The default ARIA label for previous month button in navigation
 */
export const labelPrevious: NavButtonLabelFormatter = (): string => {
  return 'Go to previous month';
};
