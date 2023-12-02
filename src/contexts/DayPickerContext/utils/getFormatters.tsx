import { type DayPickerProps } from '../../../DayPicker';
import * as defaultFormatters from '../../../formatters';

/** Return the formatters from the props. */
export function getFormatters(props: DayPickerProps) {
  const { formatters } = props;
  if (formatters?.formatMonthCaption && !formatters.formatCaption) {
    formatters.formatCaption = formatters.formatMonthCaption;
  }
  if (formatters?.formatYearCaption && !formatters.formatYearDropdown) {
    formatters.formatCaption = formatters.formatYearCaption;
  }
  return {
    ...defaultFormatters,
    ...formatters
  };
}
