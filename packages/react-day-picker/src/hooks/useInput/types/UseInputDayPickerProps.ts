import { DayClickEventHandler, MonthChangeEventHandler } from '../../../types';

/** Represent the props to attach to DayPicker component. */
export interface UseInputDayPickerProps {
  mode: 'custom';
  fromDate?: Date;
  locale: Locale;
  min: number;
  month: Date;
  onDayClick: DayClickEventHandler;
  onMonthChange: MonthChangeEventHandler;
  selected: Date | undefined;
  toDate?: Date;
  today: Date;
}
