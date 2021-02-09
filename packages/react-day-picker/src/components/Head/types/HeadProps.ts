import * as DateFns from 'date-fns';
import { DayPickerProps } from '../../DayPicker';

export interface HeadProps {
  locale: DateFns.Locale;
  showWeekNumber?: boolean;
  dayPickerProps: DayPickerProps;
}
