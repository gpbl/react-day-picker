import { type DayPickerProps } from '../../../DayPicker';
import * as defaultLabels from '../../../labels';
import { type Labels } from '../../../types';

/** Return the labels from the props. */
export function getLabels(props: DayPickerProps): Labels {
  return { ...defaultLabels, ...props.labels };
}
