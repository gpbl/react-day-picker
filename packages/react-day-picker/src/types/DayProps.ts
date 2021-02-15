import { SharedProps } from './SharedProps';

/**
 * The props of the [[Day]] component.
 */
export interface DayProps extends SharedProps {
  day: Date;
  currentMonth: Date;
}
