import * as DateFns from 'date-fns';
import { DayPickerProps } from 'types';

export interface HeadProps {
  locale: DateFns.Locale;
  showWeekNumber?: boolean;
  dayPickerProps: DayPickerProps;
}
