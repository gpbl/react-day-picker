import { DayPickerProps } from '../../../components/DayPicker';

export type UseInputDayPickerProps = {
  onMonthChange: DayPickerProps['onMonthChange'];
  onDayClick: DayPickerProps['onDayClick'];
  month: DayPickerProps['month'];
  selected: DayPickerProps['selected'];
};
