import { type DayPickerProps } from '../../../DayPicker';
import * as defaultLabels from '../../../formatters';

/** Return the labels from the props. */
export function getLabels(props: DayPickerProps) {
  return { ...defaultLabels, ...props.labels };
}
