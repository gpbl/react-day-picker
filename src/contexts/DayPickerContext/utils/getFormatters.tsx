import { type DayPickerProps } from '../../../DayPicker';
import * as defaultFormatters from '../../../formatters';

/** Return the formatters from the props. */
export function getFormatters(props: DayPickerProps) {
  return {
    ...defaultFormatters,
    ...props.formatters
  };
}
