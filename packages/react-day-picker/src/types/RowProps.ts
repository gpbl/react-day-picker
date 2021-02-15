import { SharedProps } from './SharedProps';

export interface RowProps extends SharedProps {
  weekNumber: number;
  /* The month that is displaying the row */
  currentMonth: Date;
  week: Date[];
}
