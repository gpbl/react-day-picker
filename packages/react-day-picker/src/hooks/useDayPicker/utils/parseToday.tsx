import { DayPickerProps } from 'types';

/** Given initial props, calculate the today's date to use in the calendar. */
export function parseToday(
  props: Omit<DayPickerProps, 'defaultSelected' | 'onSelect'>
): Date {
  return props.today && props.today !== 'off' ? props.today : new Date();
}
